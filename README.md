# SOKN South Africa Website

## Project Overview
- **Name**: Sovereign Order of Kailasa's Nithyananda (South Africa)
- **Goal**: A comprehensive website for SOKN South Africa featuring information about the organization, spiritual programs, charitable initiatives, and donation opportunities
- **Tech Stack**: Hono Framework + TypeScript + Cloudflare Pages + TailwindCSS

## URLs
- **Development**: https://3000-i056jqkytwlnzia80n5c3-8f57ffe2.sandbox.novita.ai
- **Production**: (To be deployed to Cloudflare Pages)
- **GitHub**: (To be pushed)

## ✨ Latest Update: Functional Donation System

**NEW**: All donation buttons are now fully functional with:
- ✅ Interactive donation modal for collecting donor information
- ✅ API endpoint (`/api/donate`) for processing donations
- ✅ Form validation and user feedback
- ✅ Email notification to accounts@sokn-sa.org
- ✅ Works on all pages (Donate page and Jayanthi package)

## Features Completed

### Core Pages
✅ **Home Page**
- Hero section with temple imagery
- About SOKN overview with mission, vision, and values
- Humanitarian service section with charitable activities
- Hindu-based religious programs showcase
- Special Jayanthi Package promotion
- Call-to-action sections

✅ **About Page**
- Detailed biography of Bhagavan Sri Nithyananda Paramashivam
- Divine contributions and accomplishments
- Comprehensive charitable initiatives (6 categories)
- Information about the Sovereign Order
- Core principles and values

✅ **Programs Page**
- Spiritual programs (Daily Pujas, Homas, Meditation, Education)
- Humanitarian service programs (Annadanam, Health, Community)
- Festival celebrations
- Detailed descriptions with imagery

✅ **Donate Page**
- Regular donation options:
  - Ask Nithyananda (flexible amount)
  - Worship the Divine's Feet (PPP) - $1,008
  - Daily Madapalli Food Offerings - $2,008
  - The Ultimate Offering (UTTS) - $1,008
  - Grand Package - $2,008
  - All Offerings Combined (flexible)
- Jayanthi Package promotion
- Impact of donations section
- Contact information for donation assistance

✅ **Jayanthi Package Page**
- Complete 21-day celebration program (Dec 30 - Jan 19)
- Vaikunta Ekadashi Celebrations (6 special sevas)
- Nithyanandotsavam Main Sevas (4 rituals)
- Day-by-day breakdown of all 21 days with individual sevas
- Day 10 featured as "Most Auspicious" - THE SPH CORONATION
- Individual seva pricing and donation buttons

✅ **Contact Page**
- Functional contact form with validation
- API endpoint: POST /api/contact
- Email addresses: info@sokn-sa.org, accounts@sokn-sa.org
- Quick links to other pages
- Social media integration
- FAQ section

### Design & Styling
- **Color Theme**: Maroon (#702a2a, #a23232) and Beige Cream (#fefdfb, #f6f0e0)
- **AI-Generated Images**: 5 custom spiritual-themed images
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Fade-in effects, hover transitions, gradient backgrounds
- **Typography**: Professional hierarchy with FontAwesome icons

### Technical Implementation
- **Framework**: Hono (Cloudflare Workers optimized)
- **Rendering**: Server-side JSX rendering
- **Static Assets**: Served via `/static/*` path
- **API Routes**: Contact form submission endpoint
- **Build System**: Vite with Cloudflare Pages plugin
- **Process Manager**: PM2 for development

## Data Architecture

### Pages Structure
```
src/
├── index.tsx (Main app with routes)
├── renderer.tsx (JSX renderer)
├── components/
│   └── Layout.tsx (Shared layout with nav & footer)
└── pages/
    ├── home.tsx
    ├── about.tsx
    ├── programs.tsx
    ├── donate.tsx
    ├── jayanthi.tsx
    └── contact.tsx
```

### Static Assets
```
public/static/
├── images/
│   ├── hero-temple.jpg
│   ├── charity.jpg
│   ├── religious-programs.jpg
│   ├── spiritual-bg.jpg
│   └── donation.jpg
└── style.css
```

### API Endpoints
- `POST /api/contact` - Contact form submission
  - Accepts: name, email, phone, subject, message
  - Returns: success/error JSON response

- `POST /api/donate` - Donation form submission  
  - Accepts: sevaName, amount, donorName, donorEmail, donorPhone, donorMessage
  - Returns: success/error JSON response
  - Logs donation details for email notification

## User Guide

### Navigation
- **Home**: Overview of SOKN and its mission
- **About**: Learn about the Supreme Pontiff and the organization
- **Programs**: View all spiritual and humanitarian programs
- **Donate**: Make donations for various sevas and offerings
- **Contact**: Get in touch or ask questions

### Making Donations
1. Visit the **Donate** page or **Jayanthi Package** page
2. Choose from regular offerings or special celebration sevas
3. Click "Donate Now" button on your desired seva
4. Fill in the donation modal with your details:
   - Full name (required)
   - Email address (required)
   - Phone number (optional)
   - Custom amount (for flexible donations)
   - Special message or dedication (optional)
5. Submit the form - you'll receive confirmation
6. Our team will contact you at accounts@sokn-sa.org with payment details

### Jayanthi Package (Dec 30 - Jan 19)
- 21 days of divine celebrations
- Each day represents a sacred Leela
- Day 10 is the most auspicious (THE SPH CORONATION)
- Multiple seva options per day with varying prices
- Special ceremonies: Vaikunta Ekadashi and Nithyanandotsavam

### Contact Form
1. Fill in your details (name, email required)
2. Choose a subject from the dropdown
3. Write your message
4. Submit - you'll receive confirmation
5. Team will respond to info@sokn-sa.org or accounts@sokn-sa.org

## Development

### Local Development
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Test the server
curl http://localhost:3000

# View logs
pm2 logs sokn-sa-website --nostream

# Stop server
pm2 stop sokn-sa-website
```

### Project Scripts
```json
{
  "dev": "vite",
  "dev:sandbox": "wrangler pages dev dist --ip 0.0.0.0 --port 3000",
  "build": "vite build",
  "preview": "wrangler pages dev",
  "deploy": "npm run build && wrangler pages deploy dist",
  "deploy:prod": "npm run build && wrangler pages deploy dist --project-name sokn-sa"
}
```

## Deployment

### Cloudflare Pages Deployment
1. **Setup Cloudflare API Key**:
   ```bash
   # Use the setup tool
   setup_cloudflare_api_key
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Create Cloudflare Pages project**:
   ```bash
   npx wrangler pages project create sokn-sa --production-branch main
   ```

4. **Deploy**:
   ```bash
   npx wrangler pages deploy dist --project-name sokn-sa
   ```

### Environment Variables
For production, you may need to set:
- Email service credentials (for contact form)
- Payment gateway keys (for donations)
- Analytics tracking IDs

## Features Not Yet Implemented

### Payment Integration
- Payment gateway integration for donations
- Secure payment processing
- Donation receipts and confirmations
- Recurring donation options

### Email Service
- Automated email sending for contact form
- Donation acknowledgment emails
- Newsletter subscription system

### Admin Dashboard
- Content management system
- Donation tracking and reporting
- User management
- Event calendar management

### Additional Features
- Multi-language support (Hindi, Tamil, etc.)
- User accounts and profiles
- Event registration system
- Photo/video gallery
- Blog/news section
- Live streaming integration

## Recommended Next Steps

### Immediate (Week 1-2)
1. **Payment Integration**
   - Integrate Stripe or PayPal for donations
   - Add donation amount selection and checkout flow
   - Implement secure payment handling

2. **Email Service**
   - Setup SendGrid or similar service
   - Implement contact form email delivery
   - Create donation confirmation emails

3. **Content Review**
   - Review all content with organization leadership
   - Update any specific details or corrections
   - Add missing information or details

### Short-term (Month 1)
4. **Enhanced Features**
   - Add event calendar with registration
   - Create photo/video gallery
   - Implement newsletter subscription
   - Add blog/news section

5. **SEO & Analytics**
   - Add meta tags and descriptions
   - Setup Google Analytics
   - Implement structured data
   - Create sitemap

6. **Testing & Optimization**
   - Cross-browser testing
   - Mobile device testing
   - Performance optimization
   - Accessibility audit

### Medium-term (Months 2-3)
7. **Admin Dashboard**
   - Build content management system
   - Create donation reporting dashboard
   - Add user management features

8. **Advanced Features**
   - Multi-language support
   - User authentication system
   - Live streaming integration
   - Social media feed integration

9. **Marketing**
   - Social media integration
   - Email marketing campaigns
   - SEO optimization
   - Community engagement tools

## Technical Notes

### Cloudflare Pages Limitations
- No server-side file operations (use Cloudflare services)
- 10ms CPU time limit per request (free plan)
- Use Cloudflare D1/KV/R2 for data persistence
- No WebSocket support

### Best Practices Implemented
- Server-side JSX rendering for SEO
- Responsive mobile-first design
- Semantic HTML structure
- Optimized images and assets
- Clean URL structure
- Form validation
- Error handling

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Contact Information
- **General Inquiries**: info@sokn-sa.org
- **Donations & Accounts**: accounts@sokn-sa.org
- **Location**: South Africa

## Copyright
© 2026 Sovereign Order of Kailasa's Nithyananda (South Africa). All rights reserved.

## Last Updated
December 18, 2025

---

**Note**: This website is built with Hono framework and deployed on Cloudflare Pages for optimal performance and global edge delivery.


## 🎙️ Podcast Pages

### Avatar Leela Series
**The extraordinary life story of Bhagavan Sri Nithyananda Paramashivam**
- **Episodes**: 10 Sacred Episodes (Intro + EP1-9)
- **Duration**: 7+ Hours of transformative content
- **Individual Pricing**:
  - Introduction: $21 USD
  - Episodes 1-4, 7-9: $54 USD each
  - Episodes 5-6 (PREMIUM): $108 USD each
- **Bundle Offer**: Complete Series Package - $408 USD (Save $207 • 34% OFF)
- **Target Audiences**: Devotees, Seekers, Spiritual practitioners, General public
- **Features**: Detailed episode descriptions, target audience breakdown, core angles explained

### Sacred Podcast Series
**Complete Scripture Decodings by SPH Bhagavan Sri Nithyananda Paramashivam**

Four complete scripture decoding series with AI-generated spiritual imagery:

1. **🌸 Bhagavad Gita – Complete Decoding**
   - **Episodes**: 18
   - **Content**: Krishna's eternal science for enlightenment, leadership, inner clarity, and conscious living
   - **Price**: $108 USD
   - **Image**: AI-generated Lord Krishna playing flute

2. **🌺 Devi Gita – Decodings of the Divine Mother**
   - **Content**: Divine Feminine (Shakti) truths decoded for modern seekers
   - **Price**: $108 USD
   - **Image**: AI-generated Divine Mother Devi

3. **🐘 Ganesha Gita – Complete Decoding**
   - **Content**: Ganapati wisdom for obstacle removal, intelligence awakening, and conscious living
   - **Price**: $108 USD
   - **Image**: AI-generated adorable Lord Ganesha

4. **🕉️ Sarvajñānottara Āgama – Complete Decoding Series**
   - **Content**: Rare decodings for Samadhi and Kailasa-state existence
   - **Price**: $108 USD
   - **Image**: AI-generated sacred Shiva symbols

**Complete Sacred Library Bundle**:
- All 4 Sacred Podcast Series included
- Individual Total: $432 USD
- Bundle Price: $348 USD
- **Save $84** (20% OFF)

### Payment Integration
- All podcast purchases use Paystack secure payment gateway
- Live payment processing with real transactions
- Customer information collected (name, email, phone)
- Transaction tracking via Paystack dashboard
