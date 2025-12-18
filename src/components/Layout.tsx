export const Layout = ({ children, title = 'SOKN South Africa' }: { children: any, title?: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    maroon: {
                      50: '#fdf4f4',
                      100: '#fbe8e8',
                      200: '#f6d5d5',
                      300: '#efb3b3',
                      400: '#e58888',
                      500: '#d65d5d',
                      600: '#c24040',
                      700: '#a23232',
                      800: '#872d2d',
                      900: '#702a2a',
                      950: '#3d1313',
                    },
                    cream: {
                      50: '#fefdfb',
                      100: '#fdfbf7',
                      200: '#faf6ed',
                      300: '#f6f0e0',
                      400: '#f0e5c9',
                      500: '#e8d6ad',
                      600: '#ddc28a',
                      700: '#cba568',
                      800: '#a88653',
                      900: '#876d46',
                      950: '#493923',
                    }
                  }
                }
              }
            }
          `
        }} />
        <link href="/static/style.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-gradient {
              background: linear-gradient(135deg, #702a2a 0%, #a23232 50%, #702a2a 100%);
            }
            .text-gradient {
              background: linear-gradient(135deg, #a23232 0%, #d65d5d 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .btn-primary {
              background: linear-gradient(135deg, #a23232 0%, #c24040 100%);
              transition: all 0.3s ease;
            }
            .btn-primary:hover {
              background: linear-gradient(135deg, #702a2a 0%, #a23232 100%);
              transform: translateY(-2px);
              box-shadow: 0 10px 20px rgba(162, 50, 50, 0.3);
            }
            .card-hover {
              transition: all 0.3s ease;
            }
            .card-hover:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            }
            .nav-link {
              position: relative;
              transition: color 0.3s ease;
            }
            .nav-link:after {
              content: '';
              position: absolute;
              bottom: -4px;
              left: 0;
              width: 0;
              height: 2px;
              background: #a23232;
              transition: width 0.3s ease;
            }
            .nav-link:hover:after {
              width: 100%;
            }
            .donation-card {
              background: linear-gradient(135deg, #fdfbf7 0%, #ffffff 100%);
              border: 2px solid #f6f0e0;
              transition: all 0.3s ease;
            }
            .donation-card:hover {
              border-color: #a23232;
              box-shadow: 0 10px 30px rgba(162, 50, 50, 0.15);
            }
            .animate-fade-in {
              animation: fadeIn 0.8s ease-in;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `
        }} />
      </head>
      <body class="bg-cream-50 text-gray-800">
        {/* Navigation */}
        <nav class="bg-white shadow-lg sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
              <div class="flex items-center">
                <a href="/" class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-maroon-700 to-maroon-500 rounded-full flex items-center justify-center">
                    <i class="fas fa-om text-white text-2xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-xl text-maroon-900">SOKN</div>
                    <div class="text-xs text-gray-600">South Africa</div>
                  </div>
                </a>
              </div>
              
              <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="nav-link text-gray-700 hover:text-maroon-700 font-medium">Home</a>
                <a href="/about" class="nav-link text-gray-700 hover:text-maroon-700 font-medium">About</a>
                <a href="/programs" class="nav-link text-gray-700 hover:text-maroon-700 font-medium">Programs</a>
                <a href="/donate" class="nav-link text-gray-700 hover:text-maroon-700 font-medium">Donate</a>
                <a href="/contact" class="nav-link text-gray-700 hover:text-maroon-700 font-medium">Contact</a>
              </div>

              <div class="hidden md:flex items-center">
                <a href="/donate" class="btn-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  <i class="fas fa-heart mr-2"></i>
                  Donate Now
                </a>
              </div>

              {/* Mobile menu button */}
              <div class="md:hidden">
                <button onclick="toggleMobileMenu()" class="text-gray-700 hover:text-maroon-700">
                  <i class="fas fa-bars text-2xl"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
              <a href="/" class="block text-gray-700 hover:text-maroon-700 font-medium py-2">Home</a>
              <a href="/about" class="block text-gray-700 hover:text-maroon-700 font-medium py-2">About</a>
              <a href="/programs" class="block text-gray-700 hover:text-maroon-700 font-medium py-2">Programs</a>
              <a href="/donate" class="block text-gray-700 hover:text-maroon-700 font-medium py-2">Donate</a>
              <a href="/contact" class="block text-gray-700 hover:text-maroon-700 font-medium py-2">Contact</a>
              <a href="/donate" class="btn-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg inline-block mt-2">
                <i class="fas fa-heart mr-2"></i>
                Donate Now
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer class="bg-maroon-900 text-white mt-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div>
                <div class="flex items-center space-x-3 mb-4">
                  <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <i class="fas fa-om text-white text-xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-lg">SOKN</div>
                    <div class="text-xs text-cream-300">South Africa</div>
                  </div>
                </div>
                <p class="text-cream-200 text-sm leading-relaxed">
                  Sovereign Order of Kailasa's Nithyananda - Dedicated to serving humanity through Hindu-based spiritual practices and humanitarian activities.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 class="font-bold text-lg mb-4 text-cream-100">Quick Links</h3>
                <ul class="space-y-2">
                  <li><a href="/" class="text-cream-200 hover:text-white transition">Home</a></li>
                  <li><a href="/about" class="text-cream-200 hover:text-white transition">About Us</a></li>
                  <li><a href="/programs" class="text-cream-200 hover:text-white transition">Programs</a></li>
                  <li><a href="/donate" class="text-cream-200 hover:text-white transition">Donate</a></li>
                  <li><a href="/jayanthi" class="text-cream-200 hover:text-white transition">Jayanthi Package</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 class="font-bold text-lg mb-4 text-cream-100">Contact Us</h3>
                <ul class="space-y-3 text-cream-200 text-sm">
                  <li class="flex items-start">
                    <i class="fas fa-envelope mt-1 mr-3"></i>
                    <a href="mailto:info@sokn-sa.org" class="hover:text-white transition">info@sokn-sa.org</a>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-envelope mt-1 mr-3"></i>
                    <a href="mailto:accounts@sokn-sa.org" class="hover:text-white transition">accounts@sokn-sa.org</a>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-map-marker-alt mt-1 mr-3"></i>
                    <span>South Africa</span>
                  </li>
                </ul>
              </div>

              {/* Social & Newsletter */}
              <div>
                <h3 class="font-bold text-lg mb-4 text-cream-100">Stay Connected</h3>
                <div class="flex space-x-4 mb-4">
                  <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
                <p class="text-cream-200 text-sm mb-3">Subscribe to our newsletter</p>
                <div class="flex">
                  <input type="email" placeholder="Your email" class="flex-1 px-4 py-2 rounded-l-lg bg-white/20 text-white placeholder-cream-300 focus:outline-none focus:bg-white/30" />
                  <button class="bg-cream-600 hover:bg-cream-500 px-4 py-2 rounded-r-lg transition">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="border-t border-white/20 mt-8 pt-8 text-center text-cream-300 text-sm">
              <p>&copy; 2026 Sovereign Order of Kailasa's Nithyananda (South Africa). All rights reserved.</p>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            function toggleMobileMenu() {
              const menu = document.getElementById('mobile-menu');
              menu.classList.toggle('hidden');
            }
          `
        }} />
      </body>
    </html>
  )
}
