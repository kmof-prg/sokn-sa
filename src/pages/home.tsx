import { Layout } from '../components/Layout'

export const HomePage = () => {
  return (
    <Layout title="SOKN South Africa - Home">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/hero-temple.jpg" alt="Temple" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div class="text-center text-white animate-fade-in">
            <div class="mb-8">
              <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span class="text-cream-100 font-semibold">
                  <i class="fas fa-om mr-2"></i>
                  Sovereign Order of Kailasa's Nithyananda
                </span>
              </div>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to SOKN<br />
              <span class="text-cream-200">South Africa</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-cream-100 max-w-3xl mx-auto leading-relaxed">
              Reviving the conscious enlightenment of Humanity through Hindu-based spiritual practices, humanitarian service, and divine guidance.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/about" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition shadow-2xl">
                <i class="fas fa-book-open mr-2"></i>
                Learn More
              </a>
              <a href="/donate" class="bg-cream-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-500 transition shadow-2xl">
                <i class="fas fa-heart mr-2"></i>
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream-50 to-transparent"></div>
      </section>

      {/* About SOKN Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              About SOKN South Africa
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Sovereign Order of Kailasa's Nithyananda (SOKN) is dedicated to preserving and promoting the ancient Hindu spiritual traditions while serving humanity with compassion and devotion.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div class="card-hover bg-gradient-to-br from-maroon-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Our Mission</h3>
              <p class="text-gray-700 leading-relaxed text-center">
                To revive conscious enlightenment and preserve Hindu dharma through authentic spiritual practices, education, and humanitarian service to all beings.
              </p>
            </div>

            {/* Vision Card */}
            <div class="card-hover bg-gradient-to-br from-cream-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Our Vision</h3>
              <p class="text-gray-700 leading-relaxed text-center">
                A world where ancient Hindu wisdom guides humanity towards enlightenment, peace, and universal consciousness through divine grace and service.
              </p>
            </div>

            {/* Values Card */}
            <div class="card-hover bg-gradient-to-br from-maroon-50 to-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-hands-praying text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Our Values</h3>
              <p class="text-gray-700 leading-relaxed text-center">
                Authenticity, compassion, devotion, service to humanity, preservation of ancient wisdom, and unwavering commitment to dharma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charitable Activities Section */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-cream-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Our Humanitarian Service
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Serving humanity through compassionate action and selfless service
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div class="order-2 md:order-1">
              <img src="/static/images/charity.jpg" alt="Charitable Activities" class="rounded-2xl shadow-2xl w-full" />
            </div>
            <div class="order-1 md:order-2">
              <h3 class="text-3xl font-bold text-maroon-900 mb-6">Free Food for All</h3>
              <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                Through our Madapalli (sacred kitchen) initiatives, we provide nutritious vegetarian meals to those in need, following the ancient Hindu tradition of Annadanam (food donation).
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-maroon-600 text-xl mr-3 mt-1"></i>
                  <span class="text-gray-700">Daily food distribution to communities in need</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-maroon-600 text-xl mr-3 mt-1"></i>
                  <span class="text-gray-700">Nutritious vegetarian meals prepared with devotion</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-maroon-600 text-xl mr-3 mt-1"></i>
                  <span class="text-gray-700">Community feeding programs during festivals</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-maroon-600 text-xl mr-3 mt-1"></i>
                  <span class="text-gray-700">Supporting food security initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Religious Programs Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Hindu-Based Religious Programs
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Authentic spiritual practices rooted in ancient Hindu traditions
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold text-maroon-900 mb-6">Sacred Ceremonies & Practices</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-fire text-maroon-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-maroon-900 mb-2">Vedic Ceremonies</h4>
                    <p class="text-gray-700">Ancient fire rituals (Homas and Yagnas) conducted by trained priests for planetary blessings and spiritual elevation.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-hands-praying text-maroon-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-maroon-900 mb-2">Daily Pujas</h4>
                    <p class="text-gray-700">Traditional worship ceremonies including Abhishekam, Archana, and Arati to various Hindu deities.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-om text-maroon-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-maroon-900 mb-2">Meditation & Yoga</h4>
                    <p class="text-gray-700">Guided meditation sessions and yogic practices for spiritual awakening and inner transformation.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-book-reader text-maroon-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-maroon-900 mb-2">Spiritual Education</h4>
                    <p class="text-gray-700">Classes on Hindu scriptures, philosophy, and ancient wisdom teachings for all age groups.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src="/static/images/religious-programs.jpg" alt="Religious Programs" class="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section class="py-20 bg-gradient-to-br from-maroon-50 to-cream-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Upcoming Special Celebration
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/2 bg-gradient-to-br from-maroon-700 to-maroon-500 p-12 flex items-center justify-center">
                <div class="text-center text-white">
                  <i class="fas fa-calendar-star text-6xl mb-6 opacity-80"></i>
                  <h3 class="text-4xl font-bold mb-4">Jayanthi Package</h3>
                  <p class="text-xl text-cream-200 mb-6">21 Days of Divine Celebrations</p>
                  <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <p class="text-3xl font-bold mb-2">Starting December 30th</p>
                    <p class="text-cream-200">Celebrate the Divine Leelas with Special Sevas</p>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-12">
                <h4 class="text-2xl font-bold text-maroon-900 mb-6">Join Us in Celebration</h4>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Experience the divine grace through 21 days of sacred ceremonies, offerings, and spiritual practices. Each day represents a sacred Leela of the Avatar.
                </p>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center">
                    <i class="fas fa-star text-maroon-600 mr-3"></i>
                    <span class="text-gray-700">Vaikunta Ekadashi Celebrations</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-star text-maroon-600 mr-3"></i>
                    <span class="text-gray-700">Day 10: THE SPH Coronation (Most Auspicious)</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-star text-maroon-600 mr-3"></i>
                    <span class="text-gray-700">Sacred Alankaram & Daily Sevas</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-star text-maroon-600 mr-3"></i>
                    <span class="text-gray-700">Special Homas and Pujas</span>
                  </li>
                </ul>
                <a href="/jayanthi" class="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg inline-block">
                  <i class="fas fa-gift mr-2"></i>
                  View Jayanthi Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section class="py-20 hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: url('/static/images/hero-temple.jpg'); background-size: cover; background-position: center;"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Support Our Sacred Mission
          </h2>
          <p class="text-xl text-cream-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your generous contribution helps us continue our humanitarian service and preserve ancient Hindu spiritual traditions for future generations.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/donate" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition shadow-2xl">
              <i class="fas fa-heart mr-2"></i>
              Make a Donation
            </a>
            <a href="/contact" class="bg-cream-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-500 transition shadow-2xl">
              <i class="fas fa-envelope mr-2"></i>
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
