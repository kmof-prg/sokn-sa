import { Layout } from '../components/Layout'

export const AboutPage = () => {
  return (
    <Layout title="About SOKN South Africa">
      {/* Hero Section */}
      <section class="hero-gradient relative overflow-hidden py-20">
        <div class="absolute inset-0 opacity-20">
          <img src="/static/images/spiritual-bg.jpg" alt="Spiritual Background" class="w-full h-full object-cover" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">About SOKN</h1>
          <p class="text-xl text-cream-200 max-w-3xl mx-auto">
            Preserving Ancient Hindu Wisdom & Serving Humanity with Compassion
          </p>
        </div>
      </section>

      {/* The Supreme Pontiff Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              The Supreme Pontiff of Hinduism
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <h3 class="text-3xl font-bold text-maroon-700 mb-6">
              Bhagavan Sri Nithyananda Paramashivam
            </h3>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong class="text-maroon-900">His Divine Holiness Bhagavan Sri Nithyananda Paramashivam</strong> is the reviver of KAILASA - the ancient enlightened Hindu civilizational nation and the Supreme Pontiff of Hinduism. He is the most-watched spiritual teacher on YouTube with over 20 million views and the author of more than 300 books published in 500+ titles and translated into 27 international languages.
              </p>
              
              <p>
                As the founder of the world's largest Hindu University - Nithyananda Hindu University - which offers traditional Vedic education and modern science, He has dedicated His life to reviving the science of enlightenment and powerful cognitions from the Vedic tradition.
              </p>

              <p>
                <strong class="text-maroon-900">Divine Mission:</strong> His mission is to make every human being experience and express the eternal bliss of Paramashivoham - the ultimate superconscious breakthrough - and establish conscious enlightenment across the globe.
              </p>

              <p>
                Through His teachings, millions have experienced life transformation, healing miracles, and spiritual awakening. His unique gift is making the most complex Vedic scriptures easily understandable and experientially accessible to seekers of all backgrounds.
              </p>
            </div>

            <div class="bg-gradient-to-br from-maroon-50 to-cream-50 p-8 rounded-2xl shadow-xl">
              <h4 class="text-2xl font-bold text-maroon-900 mb-6 text-center">Divine Contributions</h4>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-maroon-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <i class="fas fa-university text-white text-sm"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-maroon-900">World's Largest Hindu University</p>
                    <p class="text-gray-600 text-sm">Nithyananda Hindu University with global campuses</p>
                  </div>
                </li>

                <li class="flex items-start">
                  <div class="w-8 h-8 bg-maroon-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <i class="fas fa-book text-white text-sm"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-maroon-900">300+ Books Published</p>
                    <p class="text-gray-600 text-sm">Translated into 27 languages worldwide</p>
                  </div>
                </li>

                <li class="flex items-start">
                  <div class="w-8 h-8 bg-maroon-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <i class="fas fa-video text-white text-sm"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-maroon-900">20+ Million YouTube Views</p>
                    <p class="text-gray-600 text-sm">Most-watched spiritual teacher globally</p>
                  </div>
                </li>

                <li class="flex items-start">
                  <div class="w-8 h-8 bg-maroon-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <i class="fas fa-hands-helping text-white text-sm"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-maroon-900">Global Humanitarian Service</p>
                    <p class="text-gray-600 text-sm">Free food, education, and medical care</p>
                  </div>
                </li>

                <li class="flex items-start">
                  <div class="w-8 h-8 bg-maroon-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <i class="fas fa-spa text-white text-sm"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-maroon-900">Spiritual Powers & Siddhis</p>
                    <p class="text-gray-600 text-sm">Manifesting yogic powers in disciples</p>
                  </div>
                </li>

                <li class="flex items-start">
                  <div class="w-8 h-8 bg-maroon-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <i class="fas fa-globe-asia text-white text-sm"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-maroon-900">Revival of KAILASA Nation</p>
                    <p class="text-gray-600 text-sm">Ancient Hindu enlightened civilization</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-br from-maroon-900 to-maroon-700 text-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <div class="text-center mb-8">
              <i class="fas fa-quote-left text-4xl text-cream-300 mb-4"></i>
              <p class="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                "I am here to revive conscious enlightenment in every human being and make the science of Enlightenment and superconscious powers accessible to all."
              </p>
              <p class="text-cream-300 text-lg">
                - Bhagavan Sri Nithyananda Paramashivam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charitable Initiatives Section */}
      <section class="py-20 bg-gradient-to-br from-cream-50 to-cream-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Our Charitable Initiatives
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Serving humanity through compassionate action inspired by ancient Hindu values
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Food Program */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-utensils text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Free Food for All</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Our Madapalli (sacred kitchen) serves nutritious vegetarian meals daily to those in need, following the sacred Hindu tradition of Annadanam.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Daily meal distribution</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Festival food programs</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Community kitchens</li>
              </ul>
            </div>

            {/* Education Programs */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Spiritual Education</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Free classes on Hindu scriptures, Sanskrit, yoga, and meditation for children and adults seeking spiritual knowledge.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Vedic studies classes</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Youth programs</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Sanskrit learning</li>
              </ul>
            </div>

            {/* Health & Wellness */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-heartbeat text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Health & Wellness</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Holistic healing programs including yoga therapy, meditation for wellness, and traditional Ayurvedic health guidance.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Free yoga classes</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Meditation sessions</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Health consultations</li>
              </ul>
            </div>

            {/* Temple Services */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-dharmachakra text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Temple Services</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Daily pujas, special ceremonies, and festival celebrations open to all devotees seeking divine blessings and spiritual upliftment.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Daily worship ceremonies</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Special occasion pujas</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Festival celebrations</li>
              </ul>
            </div>

            {/* Community Support */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Community Support</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Building strong Hindu communities through cultural programs, social gatherings, and support networks for families.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Cultural events</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Social gatherings</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Family support</li>
              </ul>
            </div>

            {/* Youth Development */}
            <div class="card-hover bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-cream-600 to-cream-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-child text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-maroon-900 mb-4 text-center">Youth Development</h3>
              <p class="text-gray-700 leading-relaxed text-center mb-4">
                Empowering young minds with values, leadership skills, and spiritual wisdom through our Nithyananda Gurukul programs.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Character building</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Leadership training</li>
                <li><i class="fas fa-check text-maroon-600 mr-2"></i>Spiritual mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Order Information */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-4">
              Sovereign Order of Kailasa's Nithyananda
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-maroon-700 to-maroon-400 mx-auto mb-6"></div>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              A sacred order dedicated to preserving Hindu dharma and serving humanity
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="space-y-6">
              <h3 class="text-3xl font-bold text-maroon-900 mb-6">About the Order</h3>
              <p class="text-lg text-gray-700 leading-relaxed">
                The Sovereign Order of Kailasa's Nithyananda (SOKN) is a spiritual and humanitarian organization similar in structure to the Sovereign Order of Malta, dedicated to the preservation and propagation of authentic Hindu spiritual traditions.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Founded under the divine guidance of Bhagavan Sri Nithyananda Paramashivam, SOKN operates globally to revive the ancient Hindu enlightened civilization of KAILASA and make its timeless wisdom accessible to all seekers.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                As a sovereign entity, SOKN maintains its commitment to Hindu dharma while serving humanity through charitable activities, spiritual education, and the preservation of Vedic sciences and traditions.
              </p>
            </div>

            <div class="bg-gradient-to-br from-maroon-50 to-cream-50 p-8 rounded-2xl shadow-xl">
              <h4 class="text-2xl font-bold text-maroon-900 mb-6">Core Principles</h4>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-om text-maroon-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <p class="font-semibold text-maroon-900">Dharma</p>
                    <p class="text-gray-600 text-sm">Upholding universal cosmic law and righteousness</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-hands-helping text-maroon-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <p class="font-semibold text-maroon-900">Seva</p>
                    <p class="text-gray-600 text-sm">Selfless service to humanity without discrimination</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-lotus text-maroon-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <p class="font-semibold text-maroon-900">Spiritual Enlightenment</p>
                    <p class="text-gray-600 text-sm">Making enlightenment accessible to all beings</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-book-open text-maroon-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <p class="font-semibold text-maroon-900">Preservation of Wisdom</p>
                    <p class="text-gray-600 text-sm">Safeguarding ancient Hindu scriptures and sciences</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-globe text-maroon-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <p class="font-semibold text-maroon-900">Global Unity</p>
                    <p class="text-gray-600 text-sm">Building bridges of understanding and peace</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-20 hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: url('/static/images/spiritual-bg.jpg'); background-size: cover; background-position: center;"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Our Sacred Mission
          </h2>
          <p class="text-xl text-cream-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of the revival of Hindu dharma and contribute to humanitarian service across South Africa and beyond.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/donate" class="bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-100 transition shadow-2xl">
              <i class="fas fa-heart mr-2"></i>
              Support Our Mission
            </a>
            <a href="/contact" class="bg-cream-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cream-500 transition shadow-2xl">
              <i class="fas fa-envelope mr-2"></i>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
