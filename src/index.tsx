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

const app = new Hono()

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

export default app
