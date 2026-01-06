import { Layout } from '../components/Layout'

export const ProgramsPage = () => {
  return (
    <Layout title="Programs - SOKN South Africa">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden py-20">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/religious-programs.jpg" alt="Programs" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p class="text-xl text-cream-200 max-w-3xl mx-auto">
            Authentic Hindu spiritual practices and humanitarian service programs
          </p>
        </div>
      </section>

      {/* Spiritual Programs */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Spiritual Programs
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Daily Pujas */}
            <div class="card-hover">
              <div class="h-64 overflow-hidden rounded-t-2xl">
                <img src="/static/images/religious-programs.jpg" alt="Daily Pujas" class="w-full h-full object-cover" />
              </div>
              <div class="bg-white p-8 rounded-b-2xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-maroon-700 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-hands-praying text-white text-xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-maroon-900">Daily Pujas & Worship</h3>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Traditional Hindu worship ceremonies conducted daily with devotion and authenticity, following ancient Vedic traditions.
                </p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Morning and evening Arati</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Abhishekam (sacred bath ceremonies)</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Archana (name chanting with offerings)</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Naivedya (food offerings to deities)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Homas & Yagnas */}
            <div class="card-hover">
              <div class="h-64 overflow-hidden rounded-t-2xl">
                <img src="/static/images/hero-temple.jpg" alt="Homas" class="w-full h-full object-cover" />
              </div>
              <div class="bg-white p-8 rounded-b-2xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-maroon-700 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-fire text-white text-xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-maroon-900">Vedic Fire Ceremonies</h3>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Sacred fire rituals (Homas and Yagnas) performed by trained priests for specific blessings, healing, and spiritual elevation.
                </p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Ganapati Homa for obstacle removal</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Maha Mrityunjaya Homa for health</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Sudarshana Homa for protection</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Sri Vidya Puja for prosperity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Meditation & Yoga */}
            <div class="card-hover">
              <div class="h-64 overflow-hidden rounded-t-2xl">
                <img src="/static/images/spiritual-bg.jpg" alt="Meditation" class="w-full h-full object-cover" />
              </div>
              <div class="bg-white p-8 rounded-b-2xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-maroon-700 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-om text-white text-xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-maroon-900">Meditation & Yoga</h3>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Guided meditation sessions and authentic yogic practices for inner transformation and spiritual awakening.
                </p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Kriya Yoga practices</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Kundalini meditation</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Nithya Dhyaan (daily meditation)</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Pranayama (breath work)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Spiritual Education */}
            <div class="card-hover">
              <div class="h-64 overflow-hidden rounded-t-2xl">
                <img src="/static/images/donation.jpg" alt="Education" class="w-full h-full object-cover" />
              </div>
              <div class="bg-white p-8 rounded-b-2xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-maroon-700 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-book-open text-white text-xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-maroon-900">Vedic Education</h3>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Comprehensive classes on Hindu scriptures, philosophy, and ancient wisdom for all age groups.
                </p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Bhagavad Gita study classes</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Upanishads and Vedanta</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Sanskrit language classes</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-maroon-600 mr-2 mt-1"></i>
                    <span>Children's Balavihar programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanitarian Programs */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-cream-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Humanitarian Service Programs
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Annadanam */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-utensils text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Annadanam</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Sacred food donation program providing free vegetarian meals to those in need.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Daily meal distribution</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Festival food programs</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Community kitchen services</li>
              </ul>
            </div>

            {/* Health & Wellness */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-heartbeat text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Health & Wellness</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Holistic health programs combining traditional Ayurveda with yoga therapy.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Free yoga classes</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Ayurvedic consultations</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Healing meditation</li>
              </ul>
            </div>

            {/* Community Support */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Community Building</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Strengthening Hindu community through cultural programs and social support.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Cultural events</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Family support services</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Youth development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Celebrations */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Festival Celebrations
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the joy of Hindu festivals celebrated with traditional rituals and community participation
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-lg text-center">
              <i class="fas fa-diya text-maroon-700 text-4xl mb-4"></i>
              <h3 class="font-bold text-lg text-maroon-900 mb-2">Navaratri</h3>
              <p class="text-gray-600 text-sm">Nine nights of divine celebration with special pujas</p>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-6 rounded-xl shadow-lg text-center">
              <i class="fas fa-om text-maroon-700 text-4xl mb-4"></i>
              <h3 class="font-bold text-lg text-maroon-900 mb-2">Maha Shivaratri</h3>
              <p class="text-gray-600 text-sm">Grand night of Lord Shiva worship</p>
            </div>

            <div class="bg-gradient-to-br from-maroon-50 to-white p-6 rounded-xl shadow-lg text-center">
              <i class="fas fa-fire text-maroon-700 text-4xl mb-4"></i>
              <h3 class="font-bold text-lg text-maroon-900 mb-2">Deepavali</h3>
              <p class="text-gray-600 text-sm">Festival of lights with traditional ceremonies</p>
            </div>

            <div class="bg-gradient-to-br from-cream-50 to-white p-6 rounded-xl shadow-lg text-center">
              <i class="fas fa-praying-hands text-maroon-700 text-4xl mb-4"></i>
              <h3 class="font-bold text-lg text-maroon-900 mb-2">Krishna Jayanti</h3>
              <p class="text-gray-600 text-sm">Birth celebration of Lord Krishna</p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section class="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-white">
              <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span class="text-cream-100 font-semibold">
                  <i class="fas fa-podcast mr-2"></i>
                  Sacred Audio Series
                </span>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                Avatar Leela Series
              </h2>
              <p class="text-xl text-cream-200 mb-6 leading-relaxed">
                The extraordinary life story of Bhagavan Sri Nithyananda Paramashivam — told as it happened, experienced as it transforms.
              </p>
              <ul class="space-y-3 mb-8 text-cream-200">
                <li class="flex items-start">
                  <i class="fas fa-headphones text-cream-400 mr-3 mt-1"></i>
                  <span>10 Sacred Episodes covering divine descent to cosmic manifestation</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-clock text-cream-400 mr-3 mt-1"></i>
                  <span>7+ Hours of transformative content</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-gift text-cream-400 mr-3 mt-1"></i>
                  <span>Complete bundle at special price: $408 (Save $207)</span>
                </li>
              </ul>
              <a href="/podcasts" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg inline-block hover:bg-cream-100 transition shadow-2xl">
                <i class="fas fa-play mr-2"></i>
                Explore Podcasts
              </a>
            </div>
            <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 class="text-2xl font-bold text-white mb-6">Featured Episodes</h3>
              <div class="space-y-4">
                <div class="bg-white/10 p-4 rounded-xl">
                  <p class="font-semibold text-cream-100 mb-1">Introduction to the Series</p>
                  <p class="text-sm text-cream-300">Start here — $21</p>
                </div>
                <div class="bg-white/10 p-4 rounded-xl">
                  <p class="font-semibold text-cream-100 mb-1">Divine Conception & Descent</p>
                  <p class="text-sm text-cream-300">How avatars descend — $54</p>
                </div>
                <div class="bg-white/10 p-4 rounded-xl">
                  <p class="font-semibold text-cream-100 mb-1">Cosmic Entry of Arunagiri Yogeshwara</p>
                  <p class="text-sm text-cream-300">Premium episode — $108</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-20 hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: url('/static/images/religious-programs.jpg'); background-size: cover; background-position: center;"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Programs
          </h2>
          <p class="text-xl text-cream-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Hindu spirituality and contribute to humanitarian service
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition shadow-2xl">
              <i class="fas fa-envelope mr-2"></i>
              Get Involved
            </a>
            <a href="/donate" class="bg-cream-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-500 transition shadow-2xl">
              <i class="fas fa-heart mr-2"></i>
              Support Our Programs
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
