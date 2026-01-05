import { Layout } from '../components/Layout'

// Reuse the same modal component from donate page
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
              <i class="fas fa-shield-alt text-green-600 mr-2"></i>
              You will be redirected to <strong>Paystack</strong> secure payment gateway to complete your donation safely.
            </p>
          </div>

          <button type="submit" id="submit-donation-btn" class="btn-primary text-white px-8 py-4 rounded-full font-bold w-full text-lg">
            <i class="fas fa-lock mr-2"></i>
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  </div>
)

const jayanthiDays = [
  {
    day: 1,
    title: "Birth of THE AVATHAR",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Annamalayar Deeparathana", price: 1501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 2,
    title: "Learning Purana from Grandfather",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Ardra Darshana Nataraja Maha Abhishekam", price: 2501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 3,
    title: "Selecting the Rudraksha Mala",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Conch Bath Offering", price: 2501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 4,
    title: "Feeding Ganesha",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Mahaganapati Homa (Sahasramodaka)", price: 5001 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 5,
    title: "Levitation",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Shatru Samhara Trishasti", price: 2008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 6,
    title: "Devi Darshan",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Sri Vidya Puja", price: 2501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 7,
    title: "Arunagiri Yogishwara – Ahimsa",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 8,
    title: "Arunagiri Yogishwara – Casual Coins",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 9,
    title: "Advaita Anubhuti",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 10,
    title: "THE SPH CORONATION",
    subtitle: "(The Most Auspicious Day of the Festival)",
    featured: true,
    sevas: [
      { name: "THE SPH Coronation", price: 10008 },
      { name: "Atirudra Maha Yaga", price: 10008 },
      { name: "Cloth Offering for Divine", price: 1008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 },
      { name: "Tulabhara Seva", price: 10008 },
      { name: "Jayanti Raja Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Gau Puja + Suprabhata + Ekantha + Neeratotsava + Abhisheka", price: 5001 },
      { name: "Sahasranama Archana", price: 1008 },
      { name: "Annakut (Brijal Rice)", price: 1008 }
    ]
  },
  {
    day: 11,
    title: "360° Experience",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Ardhanarishwara Abhishekam", price: 1008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 12,
    title: "Guru Prepares for Yogapattabhisheka",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Kalabhairava Homa", price: 5008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 13,
    title: "Shankar Baba Leela",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "ShivaSurya Puja + Pongal Naivedya", price: 2008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 14,
    title: "Death Experience at Manikarnika",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Maattu Pongal + Gau Puja", price: 2008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 15,
    title: "Healing Millions",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Maha Mrityunjaya Homa", price: 5001 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 16,
    title: "Adikailasa",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Kalpavruksha Sahasranama", price: 1008 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 17,
    title: "Vijaya Yatra",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 18,
    title: "Meenakshi & Sundareshwara Appoint THE AVATHAR",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Meenakshi Tirukalyanotsavam", price: 5001 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 19,
    title: "Nithyananda Gurukul",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Medha Dakshinamurthy Homa", price: 5001 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 20,
    title: "Kailasa Recognized",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 5001 },
      { name: "21 Temples Arati", price: 2501 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  },
  {
    day: 21,
    title: "Kailasa Settled",
    sevas: [
      { name: "Adorn The Divine (Alankaram)", price: 1501 },
      { name: "Nithyananda Homa + Vijaya Mala", price: 5001 },
      { name: "Worship the Divine's Feet (PPP)", price: 1008 },
      { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 }
    ]
  }
]

const vaikunthaSevas = [
  { name: "Sudarshana Mahayagam", price: 5001 },
  { name: "Sacred Bath to Venkateshwara Swami", price: 2501 },
  { name: "GRAND PACKAGE: Exotic flower garland Seva & Basil Garland Seva + 108 Laddu food offering + Archana", price: 2008 },
  { name: "Worship the Divine's Feet (PPP)", price: 1008 },
  { name: "The Ultimate offering to Ultimate (UTTS)", price: 1008 },
  { name: "Tulabharam Seva", price: 10008 }
]

const nithyanandotsavamSevas = [
  { name: "Invite the Divine", price: 1008 },
  { name: "Food Offering to Mariamman", price: 1501 },
  { name: "Food Offering to Pidariamman", price: 1501 },
  { name: "Mritsangrahanam, Ankurarpanam, Vastu Shanti Homa", price: 2008 }
]

export const JayanthiPage = () => {
  return (
    <Layout title="Jayanthi Package - SOKN South Africa">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden py-24">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/religious-programs.jpg" alt="Jayanthi Celebration" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span class="text-cream-100 font-semibold">
              <i class="fas fa-calendar-star mr-2"></i>
              Special 21-Day Celebration
            </span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6">Jayanthi Package</h1>
          <p class="text-2xl text-cream-200 mb-4">Celebrate 21 Days of Divine Leelas</p>
          <p class="text-xl text-cream-300 mb-8">Starting December 30th</p>
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <p class="text-2xl font-bold mb-4">Offering the Highest Sevas to THE SPH</p>
            <p class="text-lg text-cream-200">
              Each day represents a sacred Leela of THE AVATAR. Join us in this divine celebration with special ceremonies, offerings, and blessings.
            </p>
          </div>
        </div>
      </section>

      {/* Vaikunta Ekadashi Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Vaikunta Ekadashi Celebrations
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700">
              Sacred ceremonies for spiritual liberation and divine blessings
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaikunthaSevas.map((seva) => (
              <div class="donation-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h3 class="text-lg font-bold text-maroon-900 mb-4">{seva.name}</h3>
                <div class="flex items-center justify-between">
                  <p class="text-3xl font-bold text-maroon-900">${seva.price.toLocaleString()}</p>
                  <button onclick={`openDonationModal('${seva.name}', ${seva.price})`} class="bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-2 rounded-full font-semibold transition">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nithyanandotsavam Section */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-cream-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Nithyanandotsavam Main Sevas
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700">
              Sacred rituals to invoke divine presence and blessings
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {nithyanandotsavamSevas.map((seva) => (
              <div class="donation-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h3 class="text-lg font-bold text-maroon-900 mb-4">{seva.name}</h3>
                <div class="flex items-center justify-between">
                  <p class="text-3xl font-bold text-maroon-900">${seva.price.toLocaleString()}</p>
                  <button onclick={`openDonationModal('${seva.name}', ${seva.price})`} class="bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-2 rounded-full font-semibold transition">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 21 Days Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Day-Wise Adorn The Divine & Sevas (Days 1–21)
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 mb-4">
              Every Day Represents a Sacred Leela of THE AVATAR
            </p>
          </div>

          <div class="space-y-8">
            {jayanthiDays.map((dayData) => (
              <div class={`${dayData.featured ? 'bg-gradient-to-br from-maroon-900 to-maroon-700 text-white border-4 border-maroon-800' : 'bg-gradient-to-br from-cream-50 to-white border-2 border-cream-200'} rounded-2xl shadow-xl overflow-hidden`}>
                <div class="p-6 md:p-8">
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                      <div class={`${dayData.featured ? 'bg-white/20' : 'bg-maroon-700'} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                        <span class={`${dayData.featured ? 'text-white' : 'text-white'} text-2xl font-bold`}>
                          {dayData.day}
                        </span>
                      </div>
                      <div>
                        <h3 class={`text-2xl md:text-3xl font-bold ${dayData.featured ? 'text-white' : 'text-maroon-900'}`}>
                          Day {dayData.day} — "{dayData.title}"
                        </h3>
                        {dayData.subtitle && (
                          <p class="text-cream-200 text-lg mt-1">{dayData.subtitle}</p>
                        )}
                      </div>
                    </div>
                    {dayData.featured && (
                      <div class="hidden md:block">
                        <div class="bg-cream-500 text-maroon-900 px-6 py-2 rounded-full font-bold text-sm">
                          MOST AUSPICIOUS
                        </div>
                      </div>
                    )}
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dayData.sevas.map((seva) => (
                      <div class={`${dayData.featured ? 'bg-white/10 backdrop-blur-sm' : 'bg-white'} p-5 rounded-xl shadow-lg`}>
                        <h4 class={`${dayData.featured ? 'text-cream-100' : 'text-maroon-900'} font-semibold mb-3 text-sm leading-tight min-h-[2.5rem]`}>
                          {seva.name}
                        </h4>
                        <div class="flex items-center justify-between">
                          <p class={`${dayData.featured ? 'text-white' : 'text-maroon-900'} text-2xl font-bold`}>
                            ${seva.price.toLocaleString()}
                          </p>
                          <button onclick={`openDonationModal('Day ${dayData.day} - ${seva.name}', ${seva.price})`} class={`${dayData.featured ? 'bg-white text-maroon-900 hover:bg-cream-100' : 'bg-maroon-700 hover:bg-maroon-600 text-white'} px-4 py-2 rounded-full font-semibold text-sm transition`}>
                            Donate
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary & CTA */}
      <section class="py-20 hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: url('/static/images/religious-programs.jpg'); background-size: cover; background-position: center;"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Be Part of This Divine Celebration
          </h2>
          <p class="text-xl text-cream-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Participate in 21 days of sacred ceremonies, divine offerings, and spiritual blessings. Each contribution supports the continuation of these ancient Hindu traditions.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="/donate" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition shadow-2xl">
              <i class="fas fa-heart mr-2"></i>
              View All Donations
            </a>
            <a href="/contact" class="bg-cream-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-500 transition shadow-2xl">
              <i class="fas fa-envelope mr-2"></i>
              Contact Us
            </a>
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p class="text-cream-100 text-lg mb-3">
              <i class="fas fa-envelope mr-2"></i>
              For assistance with Jayanthi Package donations:
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 text-white font-semibold">
              <a href="mailto:accounts@sokn-sa.org" class="hover:text-cream-200 transition">accounts@sokn-sa.org</a>
              <span class="hidden sm:inline">|</span>
              <a href="mailto:info@sokn-sa.org" class="hover:text-cream-200 transition">info@sokn-sa.org</a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal />

      <script src="/static/donate.js"></script>
    </Layout>
  )
}
