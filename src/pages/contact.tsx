import { Layout } from '../components/Layout'

export const ContactPage = () => {
  return (
    <Layout title="Contact Us - SOKN South Africa">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden py-20">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/hero-temple.jpg" alt="Contact" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p class="text-xl text-cream-200 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for questions, program information, or to get involved.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div class="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
              <h2 class="text-3xl font-bold text-maroon-900 mb-6">Send Us a Message</h2>
              <p class="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form id="contact-form" class="space-y-6">
                {/* Name */}
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none transition"
                    placeholder="+27 (optional)"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select 
                    id="subject" 
                    name="subject"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none transition"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="programs">Programs & Services</option>
                    <option value="donation">Donation Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="jayanthi">Jayanthi Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="6"
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  class="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg w-full"
                >
                  <i class="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>

                {/* Status Message */}
                <div id="form-status" class="hidden p-4 rounded-lg"></div>
              </form>
            </div>

            {/* Contact Information */}
            <div class="space-y-8">
              <div class="bg-gradient-to-br from-maroon-900 to-maroon-700 text-white p-8 rounded-2xl shadow-2xl">
                <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
                <p class="text-cream-200 mb-8 leading-relaxed">
                  We're here to answer your questions and help you connect with our community and programs.
                </p>

                <div class="space-y-6">
                  {/* Email - Info */}
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i class="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">General Inquiries</h3>
                      <a href="mailto:info@sokn-sa.org" class="text-cream-200 hover:text-white transition">
                        info@sokn-sa.org
                      </a>
                    </div>
                  </div>

                  {/* Email - Accounts */}
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i class="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Donations & Accounts</h3>
                      <a href="mailto:accounts@sokn-sa.org" class="text-cream-200 hover:text-white transition">
                        accounts@sokn-sa.org
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i class="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Location</h3>
                      <p class="text-cream-200">South Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div class="bg-white p-8 rounded-2xl shadow-xl border-2 border-cream-200">
                <h3 class="text-2xl font-bold text-maroon-900 mb-6">Quick Links</h3>
                <div class="space-y-4">
                  <a href="/about" class="flex items-center text-gray-700 hover:text-maroon-700 transition group">
                    <i class="fas fa-arrow-right text-maroon-600 mr-3 group-hover:translate-x-1 transition"></i>
                    <span class="font-semibold">Learn About SOKN</span>
                  </a>
                  <a href="/programs" class="flex items-center text-gray-700 hover:text-maroon-700 transition group">
                    <i class="fas fa-arrow-right text-maroon-600 mr-3 group-hover:translate-x-1 transition"></i>
                    <span class="font-semibold">View Our Programs</span>
                  </a>
                  <a href="/donate" class="flex items-center text-gray-700 hover:text-maroon-700 transition group">
                    <i class="fas fa-arrow-right text-maroon-600 mr-3 group-hover:translate-x-1 transition"></i>
                    <span class="font-semibold">Make a Donation</span>
                  </a>
                  <a href="/jayanthi" class="flex items-center text-gray-700 hover:text-maroon-700 transition group">
                    <i class="fas fa-arrow-right text-maroon-600 mr-3 group-hover:translate-x-1 transition"></i>
                    <span class="font-semibold">Jayanthi Package</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div class="bg-gradient-to-br from-cream-50 to-white p-8 rounded-2xl shadow-xl border-2 border-cream-200">
                <h3 class="text-2xl font-bold text-maroon-900 mb-6">Connect With Us</h3>
                <p class="text-gray-700 mb-6">
                  Follow us on social media for updates, events, and spiritual inspiration.
                </p>
                <div class="flex space-x-4">
                  <a href="#" class="w-12 h-12 bg-maroon-700 hover:bg-maroon-600 rounded-full flex items-center justify-center text-white transition">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="w-12 h-12 bg-maroon-700 hover:bg-maroon-600 rounded-full flex items-center justify-center text-white transition">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="w-12 h-12 bg-maroon-700 hover:bg-maroon-600 rounded-full flex items-center justify-center text-white transition">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="w-12 h-12 bg-maroon-700 hover:bg-maroon-600 rounded-full flex items-center justify-center text-white transition">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-maroon-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto"></div>
          </div>

          <div class="space-y-6">
            <div class="bg-gradient-to-br from-cream-50 to-white p-6 rounded-xl shadow-lg border-2 border-cream-200">
              <h3 class="font-bold text-lg text-maroon-900 mb-2">How can I participate in your programs?</h3>
              <p class="text-gray-700">
                All our spiritual programs are open to everyone regardless of background. You can attend our daily pujas, meditation sessions, or educational classes. Contact us for the schedule.
              </p>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-6 rounded-xl shadow-lg border-2 border-cream-200">
              <h3 class="font-bold text-lg text-maroon-900 mb-2">Are donations tax-deductible?</h3>
              <p class="text-gray-700">
                Yes, all donations support our charitable and religious activities. You'll receive an acknowledgment for your contribution. For specific tax questions, please consult your tax advisor.
              </p>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-6 rounded-xl shadow-lg border-2 border-cream-200">
              <h3 class="font-bold text-lg text-maroon-900 mb-2">Can I volunteer with SOKN?</h3>
              <p class="text-gray-700">
                Absolutely! We welcome volunteers for our food distribution programs, temple services, educational activities, and community events. Contact us to learn about current opportunities.
              </p>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-6 rounded-xl shadow-lg border-2 border-cream-200">
              <h3 class="font-bold text-lg text-maroon-900 mb-2">What is the Jayanthi Package?</h3>
              <p class="text-gray-700">
                The Jayanthi Package is a special 21-day celebration starting December 30th, featuring sacred ceremonies and offerings. Each day represents a divine Leela. View the complete package details on our Jayanthi page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('contact-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
              name: document.getElementById('name').value,
              email: document.getElementById('email').value,
              phone: document.getElementById('phone').value,
              subject: document.getElementById('subject').value,
              message: document.getElementById('message').value
            };
            
            const statusDiv = document.getElementById('form-status');
            
            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              });
              
              const data = await response.json();
              
              if (data.success) {
                statusDiv.className = 'p-4 rounded-lg bg-green-100 border-2 border-green-500 text-green-800';
                statusDiv.textContent = data.message;
                document.getElementById('contact-form').reset();
              } else {
                statusDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-500 text-red-800';
                statusDiv.textContent = data.message;
              }
              
              statusDiv.classList.remove('hidden');
              
              // Hide status after 5 seconds
              setTimeout(() => {
                statusDiv.classList.add('hidden');
              }, 5000);
              
            } catch (error) {
              statusDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-500 text-red-800';
              statusDiv.textContent = 'An error occurred. Please try again or email us directly.';
              statusDiv.classList.remove('hidden');
            }
          });
        `
      }} />
    </Layout>
  )
}
