import { Layout } from '../components/Layout'

const episodes = [
  {
    id: 'intro',
    title: 'Introduction to the Series',
    price: 21,
    duration: '~15 min',
    description: 'Why should anyone listen to the life of a living Avatar? The gateway episode — listen before deciding on anything else.',
    targetAudience: 'First-time listeners, Curious spiritual seekers, Youth & general public',
    coreAngle: 'Why Avatar stories are not mythology',
    featured: true
  },
  {
    id: 'ep1',
    title: 'The Greatest Happening – Divine Conception & Descent',
    price: 54,
    duration: '~45 min',
    description: 'Avatars don\'t take birth — they DESCEND. Discover the cosmic reality behind divine conception.',
    targetAudience: 'Devotees, Sanatana Dharma followers, Mythology & avatar researchers',
    coreAngle: 'Understanding the difference between biological birth and divine descent'
  },
  {
    id: 'ep2',
    title: 'Early Wonders of the Avatar\'s Childhood',
    price: 54,
    duration: '~45 min',
    description: 'Extraordinary consciousness shows in childhood. Not miracles — signs of higher cognition.',
    targetAudience: 'Parents, Families, Youth, Common public',
    coreAngle: 'Witness the signs of divine consciousness in early years'
  },
  {
    id: 'ep3',
    title: 'Unimaginable Training of Raghupathi Yogi',
    price: 54,
    duration: '~45 min',
    description: 'Real yogic training is not comfort — it is alchemy. This episode will shatter comfort-based spirituality.',
    targetAudience: 'Yogis, Seekers, Discipline-oriented minds, Fitness & yoga practitioners',
    coreAngle: 'Traditional tapas vs modern yoga'
  },
  {
    id: 'ep4',
    title: 'Swamiji\'s Ecosystem of Gurus',
    price: 54,
    duration: '~45 min',
    description: 'An Avatar honors the Guru ecosystem. This episode heals confusion around Guru tattva.',
    targetAudience: 'Spiritual intellectuals, Guru-bhakti oriented devotees',
    coreAngle: 'Guru is not hierarchy — Guru is ecosystem'
  },
  {
    id: 'ep5',
    title: 'Cosmic Entry of Arunagiri Yogeshwara',
    price: 108,
    duration: '~60 min',
    description: 'Not a meeting — a cosmic convergence. This is not information. This is transmission.',
    targetAudience: 'Serious devotees, Advanced seekers, People experiencing spiritual awakenings',
    coreAngle: 'Experience the cosmic convergence',
    premium: true
  },
  {
    id: 'ep6',
    title: 'Training with Arunagiri Yogeshwara',
    price: 108,
    duration: '~60 min',
    description: 'How avatars are prepared to hold cosmic responsibility. This episode is for those ready to listen responsibly.',
    targetAudience: 'Initiated disciples, Yoga teachers, Spiritual leaders',
    coreAngle: 'Preparation for cosmic responsibility',
    premium: true
  },
  {
    id: 'ep7',
    title: 'Bundle of Joy – His Childhood',
    price: 54,
    duration: '~45 min',
    description: 'Joy is a spiritual frequency. An episode that heals the inner child.',
    targetAudience: 'General public, Families, Women devotees',
    coreAngle: 'Innocence + bliss as spiritual frequencies'
  },
  {
    id: 'ep8',
    title: 'Parivrajaka – The Wandering Days',
    price: 54,
    duration: '~45 min',
    description: 'Walking away to discover the cosmos. When life demanded more than society could offer.',
    targetAudience: 'Renunciates, Seekers questioning life direction, Youth at crossroads',
    coreAngle: 'Detachment, search, and courage'
  },
  {
    id: 'ep9',
    title: 'Radiating Powers & Gifting Powers',
    price: 54,
    duration: '~45 min',
    description: 'Powers are side effects of consciousness. Understand powers without superstition.',
    targetAudience: 'Power manifestation curious public, Devotees, Skeptics',
    coreAngle: 'Not magic, not show — pure consciousness'
  }
]

export const PodcastsPage = () => {
  const totalIndividualPrice = episodes.reduce((sum, ep) => sum + ep.price, 0)
  
  return (
    <Layout title="Podcasts - Avatar Leela Series - SOKN South Africa">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden py-20">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/spiritual-bg.jpg" alt="Podcasts" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span class="text-cream-100 font-semibold">
              <i class="fas fa-podcast mr-2"></i>
              Sacred Audio Series
            </span>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Avatar Leela Series</h1>
          <p class="text-xl text-cream-200 max-w-3xl mx-auto leading-relaxed mb-8">
            The extraordinary life story of Bhagavan Sri Nithyananda Paramashivam — told as it happened, experienced as it transforms.
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-cream-100">
            <div class="flex items-center">
              <i class="fas fa-headphones mr-2"></i>
              <span>10 Sacred Episodes</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-clock mr-2"></i>
              <span>7+ Hours of Content</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-infinity mr-2"></i>
              <span>Timeless Wisdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Offer Banner */}
      <section class="py-8 bg-gradient-to-r from-maroon-900 via-maroon-700 to-maroon-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div class="flex-1 text-center md:text-left">
              <div class="inline-block bg-cream-500 text-maroon-900 px-4 py-1 rounded-full text-sm font-bold mb-3">
                SPECIAL BUNDLE OFFER
              </div>
              <h2 class="text-3xl font-bold mb-2">Complete Sacred Series Package</h2>
              <p class="text-cream-200 text-lg mb-3">All 10 episodes including introduction</p>
              <div class="flex items-center justify-center md:justify-start gap-4">
                <span class="text-2xl line-through text-cream-300">${totalIndividualPrice}</span>
                <span class="text-5xl font-bold text-cream-100">$408</span>
              </div>
              <p class="text-cream-300 text-sm mt-2">Save ${totalIndividualPrice - 408} • 34% OFF</p>
            </div>
            <div>
              <button onclick="openDonationModal('Avatar Leela Series - Complete Bundle', 408)" class="bg-cream-600 hover:bg-cream-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition transform hover:scale-105">
                <i class="fas fa-gift mr-2"></i>
                Get Complete Series
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Series */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-6">
              Not Biography. Not Mythology. Living Reality.
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 leading-relaxed">
              This is not a collection of stories about the past. This is the sacred documentation of a living Avatar's journey — from divine descent to cosmic manifestation. Each episode is a portal into understanding what it means when the Divine walks among us.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-microphone text-maroon-700 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Authentic Narration</h3>
              <p class="text-gray-700">
                Told with reverence and precision, capturing the essence of divine consciousness
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-brain text-maroon-700 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Transformative Content</h3>
              <p class="text-gray-700">
                Not just listening — experiencing shifts in consciousness through sound
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-shield-alt text-maroon-700 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-maroon-900 mb-3">Sacred Protection</h3>
              <p class="text-gray-700">
                Protected access ensuring the sanctity and integrity of the content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Choose Your Journey
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Each episode is carefully crafted to reveal different dimensions of the Avatar's life. Start with the introduction or dive into specific aspects that call to you.
            </p>
          </div>

          <div class="space-y-6">
            {episodes.map((episode, index) => (
              <div class={`${episode.featured ? 'border-4 border-cream-500 bg-gradient-to-r from-cream-50 to-white' : episode.premium ? 'border-2 border-maroon-300 bg-gradient-to-r from-maroon-50 to-white' : 'border-2 border-gray-200 bg-white'} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition card-hover`}>
                <div class="flex flex-col lg:flex-row gap-6">
                  {/* Episode Info */}
                  <div class="flex-1">
                    <div class="flex items-start gap-4 mb-4">
                      <div class={`${episode.featured ? 'bg-cream-600' : episode.premium ? 'bg-maroon-700' : 'bg-maroon-600'} text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span class="text-xl font-bold">{index === 0 ? 'INTRO' : `EP${index}`}</span>
                      </div>
                      <div class="flex-1">
                        <div class="flex flex-wrap items-center gap-3 mb-2">
                          <h3 class="text-2xl font-bold text-maroon-900">{episode.title}</h3>
                          {episode.featured && (
                            <span class="bg-cream-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              START HERE
                            </span>
                          )}
                          {episode.premium && (
                            <span class="bg-maroon-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                              PREMIUM
                            </span>
                          )}
                        </div>
                        <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span><i class="fas fa-clock mr-1"></i>{episode.duration}</span>
                          <span><i class="fas fa-dollar-sign mr-1"></i>{episode.price} USD</span>
                        </div>
                      </div>
                    </div>

                    <p class="text-lg text-gray-800 leading-relaxed mb-4 font-medium">
                      {episode.description}
                    </p>

                    <div class="space-y-3">
                      <div class="bg-cream-50 p-4 rounded-lg">
                        <p class="text-sm font-semibold text-maroon-900 mb-2">
                          <i class="fas fa-users mr-2"></i>Perfect For:
                        </p>
                        <p class="text-sm text-gray-700">{episode.targetAudience}</p>
                      </div>

                      <div class="bg-maroon-50 p-4 rounded-lg">
                        <p class="text-sm font-semibold text-maroon-900 mb-2">
                          <i class="fas fa-lightbulb mr-2"></i>Core Understanding:
                        </p>
                        <p class="text-sm text-gray-700">{episode.coreAngle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <div class="flex flex-col justify-center items-center lg:items-end gap-4 lg:min-w-[200px]">
                    <div class="text-center lg:text-right">
                      <p class="text-4xl font-bold text-maroon-900 mb-1">${episode.price}</p>
                      <p class="text-sm text-gray-600">Single Episode</p>
                    </div>
                    <button 
                      onclick={`openDonationModal('${episode.title}', ${episode.price})`}
                      class="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg w-full lg:w-auto whitespace-nowrap"
                    >
                      <i class="fas fa-headphones mr-2"></i>
                      Get Access
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Listen Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Why This Series Matters
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-maroon-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-start gap-4">
                <i class="fas fa-check-circle text-maroon-600 text-3xl flex-shrink-0 mt-1"></i>
                <div>
                  <h3 class="text-2xl font-bold text-maroon-900 mb-3">For Devotees</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Deepen your connection by understanding the cosmic journey of your beloved Swamiji. Know not just who He is, but how He became what He is.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-start gap-4">
                <i class="fas fa-check-circle text-maroon-600 text-3xl flex-shrink-0 mt-1"></i>
                <div>
                  <h3 class="text-2xl font-bold text-maroon-900 mb-3">For Seekers</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Understand what it means when the Divine incarnates. This is not faith — this is knowledge. Not belief — but direct understanding.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-start gap-4">
                <i class="fas fa-check-circle text-maroon-600 text-3xl flex-shrink-0 mt-1"></i>
                <div>
                  <h3 class="text-2xl font-bold text-maroon-900 mb-3">For the Curious</h3>
                  <p class="text-gray-700 leading-relaxed">
                    You've heard about Him. You've seen glimpses. Now understand the complete picture without mystification or superstition.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-maroon-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-start gap-4">
                <i class="fas fa-check-circle text-maroon-600 text-3xl flex-shrink-0 mt-1"></i>
                <div>
                  <h3 class="text-2xl font-bold text-maroon-900 mb-3">For Future Generations</h3>
                  <p class="text-gray-700 leading-relaxed">
                    This is living history. Documentation of a time when the Divine walked, taught, healed, and transformed millions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Podcast Series */}
      <section class="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="bg-cream-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              📿 SACRED DECODINGS
            </span>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Sacred Podcast Series
            </h2>
            <div class="w-24 h-1 bg-cream-500 mx-auto mb-6"></div>
            <p class="text-xl text-cream-200 max-w-3xl mx-auto leading-relaxed">
              Decodings by The SPH Bhagavan Sri Nithyananda Paramashivam
            </p>
            <p class="text-lg text-cream-300 max-w-4xl mx-auto mt-4">
              Receive the original Hindu scriptures decoded directly by The Supreme Pontiff of Hinduism, revealing their experiential, mystical, and applied spiritual sciences.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bhagavad Gita */}
            <div class="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition card-hover">
              <div class="relative h-64">
                <img src="/static/images/krishna-flute.jpg" alt="Bhagavad Gita" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h3 class="text-2xl font-bold text-white mb-2">🌸 Bhagavad Gita – Complete Decoding</h3>
                  <p class="text-cream-200 text-sm">As Decoded by SPH Bhagavan Sri Nithyananda Paramashivam</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-600">Total Episodes: <strong class="text-maroon-900">18</strong></span>
                  <span class="text-2xl font-bold text-maroon-700">USD $108</span>
                </div>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Krishna's eternal science for enlightenment, leadership, inner clarity, and conscious living. A powerful decoding revealing the experiential truths behind every verse.
                </p>
                <button onclick="openDonationModal('Bhagavad Gita – Complete Decoding Podcast Series', 108)" class="w-full bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-3 rounded-full font-bold transition">
                  <i class="fas fa-headphones mr-2"></i>
                  Get Full Series
                </button>
              </div>
            </div>

            {/* Devi Gita */}
            <div class="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition card-hover">
              <div class="relative h-64">
                <img src="/static/images/devi-gita.jpg" alt="Devi Gita" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h3 class="text-2xl font-bold text-white mb-2">🌺 Devi Gita – Decodings of the Divine Mother</h3>
                  <p class="text-cream-200 text-sm">As Decoded by SPH Bhagavan Sri Nithyananda Paramashivam</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-600">Complete Podcast Package</span>
                  <span class="text-2xl font-bold text-maroon-700">USD $108</span>
                </div>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Receive the truths of the Divine Feminine (Shakti) decoded for modern seekers. Understand the cosmic power of the Mother and how to awaken it within.
                </p>
                <button onclick="openDonationModal('Devi Gita – Decodings of the Divine Mother', 108)" class="w-full bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-3 rounded-full font-bold transition">
                  <i class="fas fa-headphones mr-2"></i>
                  Get Full Series
                </button>
              </div>
            </div>

            {/* Ganesha Gita */}
            <div class="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition card-hover">
              <div class="relative h-64">
                <img src="/static/images/ganesha-gita.jpg" alt="Ganesha Gita" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h3 class="text-2xl font-bold text-white mb-2">🐘 Ganesha Gita – Complete Decoding</h3>
                  <p class="text-cream-200 text-sm">As Decoded by SPH Bhagavan Sri Nithyananda Paramashivam</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-600">Full Series Included</span>
                  <span class="text-2xl font-bold text-maroon-700">USD $108</span>
                </div>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Ganapati wisdom for obstacle removal, intelligence awakening, and conscious living. Learn the secrets of effortless success and divine protection.
                </p>
                <button onclick="openDonationModal('Ganesha Gita – Complete Decoding Podcast Series', 108)" class="w-full bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-3 rounded-full font-bold transition">
                  <i class="fas fa-headphones mr-2"></i>
                  Get Full Series
                </button>
              </div>
            </div>

            {/* Sarvajñānottara Āgama */}
            <div class="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition card-hover">
              <div class="relative h-64">
                <img src="/static/images/agama-sacred.jpg" alt="Sarvajñānottara Āgama" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <h3 class="text-2xl font-bold text-white mb-2">🕉️ Sarvajñānottara Āgama – Complete Decoding</h3>
                  <p class="text-cream-200 text-sm">As Decoded by SPH Bhagavan Sri Nithyananda Paramashivam</p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm text-gray-600">Entire Series - Complete Package</span>
                  <span class="text-2xl font-bold text-maroon-700">USD $108</span>
                </div>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Rare decodings of the Sarvajñānottara Āgama for Samadhi and Kailasa-state existence. Ancient wisdom for achieving the ultimate state of consciousness.
                </p>
                <button onclick="openDonationModal('Sarvajñānottara Āgama – Complete Decoding Series', 108)" class="w-full bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-3 rounded-full font-bold transition">
                  <i class="fas fa-headphones mr-2"></i>
                  Get Full Series
                </button>
              </div>
            </div>
          </div>

          {/* Bundle Offer for Sacred Series */}
          <div class="mt-16 bg-gradient-to-r from-cream-600 to-cream-500 rounded-2xl p-8 shadow-2xl">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-white mb-4">
                <i class="fas fa-gift mr-2"></i>
                Complete Sacred Library Bundle
              </h3>
              <p class="text-cream-100 text-lg mb-6">
                Get all 4 Sacred Podcast Series and save $84
              </p>
              <div class="flex items-center justify-center gap-8 mb-6">
                <div>
                  <p class="text-sm text-cream-200">Individual Price:</p>
                  <p class="text-2xl font-bold text-white line-through">$432</p>
                </div>
                <i class="fas fa-arrow-right text-3xl text-white"></i>
                <div>
                  <p class="text-sm text-cream-200">Bundle Price:</p>
                  <p class="text-4xl font-bold text-white">$348</p>
                </div>
              </div>
              <button onclick="openDonationModal('Complete Sacred Library Bundle - All 4 Series', 348)" class="bg-white text-maroon-900 px-12 py-4 rounded-full font-bold text-xl hover:bg-cream-100 transition shadow-2xl">
                <i class="fas fa-shopping-cart mr-2"></i>
                Get Complete Library - Save $84
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: url('/static/images/spiritual-bg.jpg'); background-size: cover; background-position: center;"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Journey Today
          </h2>
          <p class="text-xl text-cream-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start with the introduction or commit to the complete transformation with the full series bundle.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button onclick="openDonationModal('Introduction to the Series', 21)" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition shadow-2xl">
              <i class="fas fa-play mr-2"></i>
              Start with Intro ($21)
            </button>
            <button onclick="openDonationModal('Avatar Leela Series - Complete Bundle', 408)" class="bg-cream-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-500 transition shadow-2xl">
              <i class="fas fa-gift mr-2"></i>
              Get Full Series ($408)
            </button>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <div id="donation-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-3xl font-bold text-maroon-900">Complete Your Purchase</h2>
              <button onclick="closeDonationModal()" class="text-gray-500 hover:text-gray-700 text-3xl">
                <i class="fas fa-times"></i>
              </button>
            </div>

            <div class="bg-gradient-to-br from-maroon-50 to-cream-50 p-6 rounded-xl mb-6">
              <p class="text-sm text-gray-600 mb-2">You are purchasing:</p>
              <h3 id="modal-seva-name" class="text-2xl font-bold text-maroon-900 mb-2"></h3>
              <p id="modal-amount" class="text-3xl font-bold text-maroon-700"></p>
            </div>

            <div id="donation-status" class="hidden"></div>

            <form id="donation-form" class="space-y-4">
              <input type="hidden" id="hidden-seva-name" />
              <input type="hidden" id="hidden-amount" />

              <div id="custom-amount-field" class="hidden">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Amount (USD) *</label>
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

              <div class="bg-cream-50 p-4 rounded-lg">
                <p class="text-sm text-gray-700 leading-relaxed">
                  <i class="fas fa-shield-alt text-green-600 mr-2"></i>
                  You will be redirected to <strong>Paystack</strong> secure payment gateway to complete your purchase safely.
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

      <script src="/static/donate.js"></script>
    </Layout>
  )
}
