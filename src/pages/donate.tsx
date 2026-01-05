import { Layout } from '../components/Layout'

const DonationModal = () => (
  <div id="donation-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-maroon-900">Complete Your Donation</h2>
          <button onclick="closeDonationModal()" class="text-gray-500 hover:text-gray-700 text-3xl">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="bg-gradient-to-br from-maroon-50 to-cream-50 p-6 rounded-xl mb-6">
          <p class="text-sm text-gray-600 mb-2">You are donating for:</p>
          <h3 id="modal-seva-name" class="text-2xl font-bold text-maroon-900 mb-2"></h3>
          <p id="modal-amount" class="text-3xl font-bold text-maroon-700"></p>
        </div>

        <div id="donation-status" class="hidden"></div>

        <form id="donation-form" class="space-y-4">
          <input type="hidden" id="hidden-seva-name" />
          <input type="hidden" id="hidden-amount" />

          <div id="custom-amount-field" class="hidden">
            <label class="block text-sm font-semibold text-gray-700 mb-2">Donation Amount (USD) *</label>
            <input type="number" id="custom-amount-input" min="1" step="1" placeholder="Enter amount" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input type="text" id="donor-name" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none" placeholder="Your full name" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <input type="email" id="donor-email" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none" placeholder="your.email@example.com" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input type="tel" id="donor-phone" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none" placeholder="+27 (optional)" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
            <textarea id="donor-message" rows="3" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none resize-none" placeholder="Any special requests or dedications..."></textarea>
          </div>

          <div class="bg-cream-50 p-4 rounded-lg">
            <p class="text-sm text-gray-700 leading-relaxed">
              <i class="fas fa-info-circle text-maroon-600 mr-2"></i>
              After submitting, you will be contacted by our team at <strong>accounts@sokn-sa.org</strong> with payment instructions and further details.
            </p>
          </div>

          <button type="submit" id="submit-donation-btn" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full text-lg">
            <i class="fas fa-heart mr-2"></i>
            Complete Donation
          </button>
        </form>
      </div>
    </div>
  </div>
)

export const DonatePage = () => {
  return (
    <Layout title="Donate - SOKN South Africa">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden py-20">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/donation.jpg" alt="Donation" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span class="text-cream-100 font-semibold">
              <i class="fas fa-heart mr-2"></i>
              Support Our Mission
            </span>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Donate Now</h1>
          <p class="text-xl text-cream-200 max-w-3xl mx-auto leading-relaxed">
            Your generous contribution supports our humanitarian service, spiritual programs, and the preservation of ancient Hindu wisdom.
          </p>
        </div>
      </section>

      {/* Regular Donation Options */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Ongoing Donation Opportunities
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our sacred offerings to support various aspects of our mission
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Ask Nithyananda */}
            <div class="donation-card p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-question text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-3 text-center">Ask Nithyananda</h3>
              <p class="text-gray-600 text-center mb-6">
                Seek divine guidance and blessings through your personal questions
              </p>
              <div class="text-center mb-6">
                <p class="text-sm text-gray-600 mb-2">You decide the amount</p>
                <input type="number" placeholder="Enter amount" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none text-center text-xl font-bold" />
              </div>
              <button onclick="openDonationModal('Ask Nithyananda', 'custom')" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full">
                <i class="fas fa-donate mr-2"></i>
                Donate Now
              </button>
            </div>

            {/* Worship the Divine's Feet (PPP) */}
            <div class="donation-card p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-praying-hands text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-3 text-center">Worship the Divine's Feet</h3>
              <p class="text-gray-600 text-center mb-6">
                Sacred Pada Puja (PPP) for divine blessings and spiritual elevation
              </p>
              <div class="text-center mb-6">
                <p class="text-4xl font-bold text-maroon-900">$1,008</p>
              </div>
              <button onclick="openDonationModal('Worship the Divine\\'s Feet (PPP)', 1008)" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full">
                <i class="fas fa-donate mr-2"></i>
                Donate Now
              </button>
            </div>

            {/* Daily Madapalli Food Offerings */}
            <div class="donation-card p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-utensils text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-3 text-center">Daily Madapalli Food</h3>
              <p class="text-gray-600 text-center mb-6">
                Sacred food offerings to the Divine prepared with devotion
              </p>
              <div class="text-center mb-6">
                <p class="text-4xl font-bold text-maroon-900">$2,008</p>
              </div>
              <button onclick="openDonationModal('Daily Madapalli Food Offerings', 2008)" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full">
                <i class="fas fa-donate mr-2"></i>
                Donate Now
              </button>
            </div>

            {/* The Ultimate Offering (UTTS) */}
            <div class="donation-card p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-star text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-3 text-center">Ultimate Offering</h3>
              <p class="text-gray-600 text-center mb-6">
                The Ultimate offering To The Supreme (UTTS) for highest blessings
              </p>
              <div class="text-center mb-6">
                <p class="text-4xl font-bold text-maroon-900">$1,008</p>
              </div>
              <button onclick="openDonationModal('The Ultimate Offering (UTTS)', 1008)" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full">
                <i class="fas fa-donate mr-2"></i>
                Donate Now
              </button>
            </div>

            {/* Grand Package */}
            <div class="donation-card p-8 rounded-2xl shadow-lg border-4 border-maroon-600 relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-maroon-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                SPECIAL PACKAGE
              </div>
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto mt-2">
                <i class="fas fa-gift text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-3 text-center">Grand Package</h3>
              <p class="text-gray-600 text-center mb-6">
                Exotic flower garland Seva + Basil Garland Seva + Archana
              </p>
              <div class="text-center mb-6">
                <p class="text-4xl font-bold text-maroon-900">$2,008</p>
              </div>
              <button onclick="openDonationModal('Grand Package - Exotic Flower & Basil Garland Seva + Archana', 2008)" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full">
                <i class="fas fa-donate mr-2"></i>
                Donate Now
              </button>
            </div>

            {/* All Offerings Combined */}
            <div class="donation-card p-8 rounded-2xl shadow-lg bg-gradient-to-br from-maroon-50 to-cream-50">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-hand-holding-heart text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-3 text-center">All Offerings</h3>
              <p class="text-gray-600 text-center mb-6">
                Support all ongoing programs and receive complete blessings
              </p>
              <div class="text-center mb-6">
                <p class="text-sm text-gray-600 mb-2">Combined donation</p>
                <input type="number" placeholder="Enter amount" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-maroon-600 focus:outline-none text-center text-xl font-bold" />
              </div>
              <button onclick="openDonationModal('All Offerings Combined', 'custom')" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full">
                <i class="fas fa-donate mr-2"></i>
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal />

      <script src="/static/donate.js"></script>

      {/* Jayanthi Package CTA */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-br from-maroon-900 to-maroon-700 rounded-3xl shadow-2xl overflow-hidden">
            <div class="md:flex items-center">
              <div class="md:w-1/2 p-12">
                <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <span class="text-cream-100 font-semibold">
                    <i class="fas fa-calendar-star mr-2"></i>
                    Special Celebration
                  </span>
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                  Jayanthi Package
                </h2>
                <p class="text-xl text-cream-200 mb-8 leading-relaxed">
                  Join us for 21 days of divine celebrations starting December 30th. Experience sacred ceremonies, special sevas, and divine blessings.
                </p>
                <ul class="space-y-3 text-cream-200 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-star text-cream-400 mr-3 mt-1"></i>
                    <span>Vaikunta Ekadashi Celebrations</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-star text-cream-400 mr-3 mt-1"></i>
                    <span>Day 10: THE SPH Coronation</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-star text-cream-400 mr-3 mt-1"></i>
                    <span>21 Days of Sacred Alankaram & Sevas</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-star text-cream-400 mr-3 mt-1"></i>
                    <span>Special Homas and Divine Offerings</span>
                  </li>
                </ul>
                <a href="/jayanthi" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg inline-block hover:bg-cream-100 transition shadow-2xl">
                  <i class="fas fa-gift mr-2"></i>
                  View Complete Package
                </a>
              </div>
              <div class="md:w-1/2">
                <img src="/static/images/religious-programs.jpg" alt="Jayanthi Celebration" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Impact of Your Donation
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Your contribution creates lasting positive change in our community
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-hands-helping text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Feed the Hungry</h3>
              <p class="text-gray-600">
                Provide nutritious meals to thousands through our daily food programs
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-book-open text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Spiritual Education</h3>
              <p class="text-gray-600">
                Support free classes on Hindu scriptures and spiritual practices
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-dharmachakra text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Temple Services</h3>
              <p class="text-gray-600">
                Maintain daily worship, special ceremonies, and sacred festivals
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Community Building</h3>
              <p class="text-gray-600">
                Strengthen Hindu community through cultural and social programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-maroon-900 mb-6">
            Need Assistance with Your Donation?
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            Our team is here to help you with any questions about donation options, payment methods, or specific programs.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a href="mailto:accounts@sokn-sa.org" class="flex items-center justify-center text-maroon-900 hover:text-maroon-700 font-semibold text-lg">
              <i class="fas fa-envelope text-2xl mr-3"></i>
              accounts@sokn-sa.org
            </a>
            <a href="mailto:info@sokn-sa.org" class="flex items-center justify-center text-maroon-900 hover:text-maroon-700 font-semibold text-lg">
              <i class="fas fa-envelope text-2xl mr-3"></i>
              info@sokn-sa.org
            </a>
          </div>
          <a href="/contact" class="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg inline-block">
            <i class="fas fa-paper-plane mr-2"></i>
            Contact Us
          </a>
        </div>
      </section>

      {/* Tax Deductible Notice */}
      <section class="py-12 bg-gradient-to-br from-maroon-50 to-cream-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <i class="fas fa-info-circle text-maroon-600 text-3xl mb-4"></i>
            <h3 class="text-xl font-bold text-maroon-900 mb-3">Important Information</h3>
            <p class="text-gray-700 leading-relaxed">
              All donations support the charitable and religious activities of the Sovereign Order of Kailasa's Nithyananda (South Africa). 
              You will receive an acknowledgment for your contribution. For specific tax inquiries, please consult with your tax advisor.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
