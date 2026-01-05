import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { DonatePage } from './pages/donate'
import { JayanthiPage } from './pages/jayanthi'
import { ContactPage } from './pages/contact'
import { ProgramsPage } from './pages/programs'
import { PaymentSuccessPage } from './pages/payment-success'
import type { Env } from './types/env'

const app = new Hono<{ Bindings: Env }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all HTML pages
app.use(renderer)

// Page routes
app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

app.get('/donate', (c) => {
  return c.render(<DonatePage />)
})

app.get('/jayanthi', (c) => {
  return c.render(<JayanthiPage />)
})

app.get('/programs', (c) => {
  return c.render(<ProgramsPage />)
})

app.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

app.get('/payment-success', (c) => {
  return c.render(<PaymentSuccessPage />)
})

// API route for contact form
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, email, phone, message } = body

    // Email sending logic would go here
    // For now, we'll return success
    console.log('Contact form submission:', { name, email, phone, message })

    return c.json({ 
      success: true, 
      message: 'Thank you for contacting us. We will get back to you soon.' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'An error occurred. Please try again.' 
    }, 500)
  }
})

// API route to get Paystack public key
app.get('/api/paystack-key', (c) => {
  // Public key is safe to hardcode (it's meant to be public)
  const publicKey = 'pk_live_ac3f66c7a1605d0e93e15f811e878c50b7956ab8'
  return c.json({ publicKey })
})

// API route to initialize Paystack payment
app.post('/api/initialize-payment', async (c) => {
  try {
    const body = await c.req.json()
    const { sevaName, amount, donorName, donorEmail, donorPhone } = body

    const secretKey = c.env?.PAYSTACK_SECRET_KEY_LIVE
    if (!secretKey) {
      return c.json({ 
        success: false, 
        message: 'Payment gateway not configured' 
      }, 500)
    }

    // Initialize Paystack transaction
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: donorEmail,
        amount: amount * 100, // Paystack expects amount in kobo (cents)
        currency: 'ZAR', // South African Rand
        metadata: {
          sevaName,
          donorName,
          donorPhone,
          custom_fields: [
            {
              display_name: "Seva/Offering",
              variable_name: "seva_name",
              value: sevaName
            },
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: donorName
            }
          ]
        }
      })
    })

    const data = await response.json()

    if (data.status) {
      return c.json({
        success: true,
        authorizationUrl: data.data.authorization_url,
        reference: data.data.reference
      })
    } else {
      return c.json({
        success: false,
        message: data.message || 'Failed to initialize payment'
      }, 400)
    }

  } catch (error) {
    console.error('Payment initialization error:', error)
    return c.json({ 
      success: false, 
      message: 'An error occurred. Please try again or contact accounts@sokn-sa.org directly.' 
    }, 500)
  }
})

// API route to verify Paystack payment
app.get('/api/verify-payment/:reference', async (c) => {
  try {
    const reference = c.req.param('reference')
    const secretKey = c.env?.PAYSTACK_SECRET_KEY_LIVE

    if (!secretKey) {
      return c.json({ 
        success: false, 
        message: 'Payment gateway not configured' 
      }, 500)
    }

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        'Authorization': `Bearer ${secretKey}`
      }
    })

    const data = await response.json()

    if (data.status && data.data.status === 'success') {
      // Payment successful
      console.log('Payment verified:', data.data)
      
      return c.json({
        success: true,
        data: {
          amount: data.data.amount / 100, // Convert back from kobo
          email: data.data.customer.email,
          reference: data.data.reference,
          metadata: data.data.metadata
        }
      })
    } else {
      return c.json({
        success: false,
        message: 'Payment verification failed'
      }, 400)
    }

  } catch (error) {
    console.error('Payment verification error:', error)
    return c.json({ 
      success: false, 
      message: 'An error occurred during verification' 
    }, 500)
  }
})

export default app
