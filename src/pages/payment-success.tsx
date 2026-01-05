import { Layout } from '../components/Layout'

export const PaymentSuccessPage = () => {
  return (
    <Layout title="Payment Successful - SOKN South Africa">
      <section class="py-20 bg-gradient-to-br from-cream-50 to-white min-h-screen flex items-center">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-white p-12 rounded-3xl shadow-2xl">
            <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <i class="fas fa-check-circle text-green-600 text-5xl"></i>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-maroon-900 mb-6">
              Payment Successful!
            </h1>
            
            <p class="text-xl text-gray-700 mb-8 leading-relaxed">
              Thank you for your generous donation to the Sovereign Order of Kailasa's Nithyananda (South Africa).
            </p>
            
            <div class="bg-gradient-to-br from-maroon-50 to-cream-50 p-6 rounded-2xl mb-8">
              <p class="text-gray-700 leading-relaxed">
                <i class="fas fa-envelope text-maroon-600 mr-2"></i>
                A confirmation email will be sent to your registered email address shortly.
              </p>
            </div>
            
            <div class="bg-cream-50 p-6 rounded-2xl mb-8">
              <p class="text-lg font-semibold text-maroon-900 mb-3">
                🙏 May Divine Blessings Be Upon You
              </p>
              <p class="text-gray-700 leading-relaxed">
                Your contribution supports our humanitarian service, spiritual programs, and the preservation of ancient Hindu wisdom.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" class="bg-maroon-700 hover:bg-maroon-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg">
                <i class="fas fa-home mr-2"></i>
                Return to Home
              </a>
              <a href="/donate" class="bg-cream-600 hover:bg-cream-500 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg">
                <i class="fas fa-heart mr-2"></i>
                Make Another Donation
              </a>
            </div>
            
            <div class="mt-8 pt-8 border-t border-gray-200">
              <p class="text-sm text-gray-600">
                If you have any questions, please contact us at <a href="mailto:accounts@sokn-sa.org" class="text-maroon-700 hover:text-maroon-600 font-semibold">accounts@sokn-sa.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
