// Donation handling script with Paystack integration

let paystackPublicKey = null;

// Fetch Paystack public key on page load
async function loadPaystackKey() {
  try {
    const response = await fetch('/api/paystack-key');
    const data = await response.json();
    paystackPublicKey = data.publicKey;
  } catch (error) {
    console.error('Failed to load Paystack key:', error);
  }
}

// Load Paystack key when page loads
loadPaystackKey();

// Function to open donation modal
function openDonationModal(sevaName, amount) {
  const modal = document.getElementById('donation-modal');
  const modalTitle = document.getElementById('modal-seva-name');
  const modalAmount = document.getElementById('modal-amount');
  const hiddenSevaInput = document.getElementById('hidden-seva-name');
  const hiddenAmountInput = document.getElementById('hidden-amount');
  
  modalTitle.textContent = sevaName;
  
  if (amount === 'custom') {
    modalAmount.textContent = 'Custom Amount';
    hiddenAmountInput.value = '';
    document.getElementById('custom-amount-field').classList.remove('hidden');
  } else {
    modalAmount.textContent = '$' + amount.toLocaleString();
    hiddenAmountInput.value = amount;
    document.getElementById('custom-amount-field').classList.add('hidden');
  }
  
  hiddenSevaInput.value = sevaName;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Function to close donation modal
function closeDonationModal() {
  const modal = document.getElementById('donation-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  
  // Reset form
  document.getElementById('donation-form').reset();
  document.getElementById('donation-status').classList.add('hidden');
}

// Handle custom amount input
document.addEventListener('DOMContentLoaded', function() {
  const customAmountInput = document.getElementById('custom-amount-input');
  if (customAmountInput) {
    customAmountInput.addEventListener('input', function() {
      document.getElementById('hidden-amount').value = this.value;
    });
  }
  
  // Handle donation form submission
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    donationForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const sevaName = document.getElementById('hidden-seva-name').value;
      const amount = document.getElementById('hidden-amount').value;
      const donorName = document.getElementById('donor-name').value;
      const donorEmail = document.getElementById('donor-email').value;
      const donorPhone = document.getElementById('donor-phone').value;
      
      // Validate amount
      if (!amount || amount <= 0) {
        alert('Please enter a valid donation amount');
        return;
      }
      
      const statusDiv = document.getElementById('donation-status');
      const submitButton = document.getElementById('submit-donation-btn');
      
      // Disable button during submission
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Initializing Payment...';
      
      try {
        // Initialize payment with backend
        const response = await fetch('/api/initialize-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            sevaName,
            amount,
            donorName,
            donorEmail,
            donorPhone
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Redirect to Paystack payment page
          window.location.href = data.authorizationUrl;
        } else {
          statusDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-500 text-red-800 mb-4';
          statusDiv.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>' + data.message;
          statusDiv.classList.remove('hidden');
        }
        
      } catch (error) {
        console.error('Payment error:', error);
        statusDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-500 text-red-800 mb-4';
        statusDiv.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>An error occurred. Please contact us directly at accounts@sokn-sa.org';
        statusDiv.classList.remove('hidden');
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-heart mr-2"></i>Proceed to Payment';
      }
    });
  }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('donation-modal');
  if (event.target === modal) {
    closeDonationModal();
  }
});

// Handle payment callback (if returning from Paystack)
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const reference = urlParams.get('reference');
  
  if (reference) {
    // Payment was made, verify it
    verifyPayment(reference);
  }
});

async function verifyPayment(reference) {
  try {
    const response = await fetch(`/api/verify-payment/${reference}`);
    const data = await response.json();
    
    if (data.success) {
      // Show success message
      showPaymentSuccess(data.data);
    } else {
      showPaymentError('Payment verification failed. Please contact us at accounts@sokn-sa.org');
    }
  } catch (error) {
    console.error('Verification error:', error);
    showPaymentError('Unable to verify payment. Please contact us at accounts@sokn-sa.org');
  }
}

function showPaymentSuccess(paymentData) {
  // Create success modal
  const successModal = document.createElement('div');
  successModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
  successModal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
      <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class="fas fa-check-circle text-green-600 text-4xl"></i>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
      <p class="text-lg text-gray-700 mb-6">
        Thank you for your generous donation of <strong>$${paymentData.amount}</strong>
      </p>
      <div class="bg-cream-50 p-4 rounded-lg mb-6 text-left">
        <p class="text-sm text-gray-600 mb-2"><strong>Reference:</strong> ${paymentData.reference}</p>
        <p class="text-sm text-gray-600"><strong>Email:</strong> ${paymentData.email}</p>
      </div>
      <p class="text-gray-600 mb-6">
        You will receive a confirmation email shortly. May divine blessings be upon you! 🙏
      </p>
      <button onclick="window.location.href='/'" class="bg-maroon-700 hover:bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold transition">
        Return to Home
      </button>
    </div>
  `;
  document.body.appendChild(successModal);
  
  // Remove reference from URL
  window.history.replaceState({}, document.title, window.location.pathname);
}

function showPaymentError(message) {
  // Create error modal
  const errorModal = document.createElement('div');
  errorModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
  errorModal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
      <div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class="fas fa-exclamation-circle text-red-600 text-4xl"></i>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Payment Issue</h2>
      <p class="text-lg text-gray-700 mb-6">${message}</p>
      <div class="flex gap-4 justify-center">
        <button onclick="window.location.href='/donate'" class="bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-3 rounded-full font-semibold transition">
          Try Again
        </button>
        <button onclick="window.location.href='/contact'" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition">
          Contact Us
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(errorModal);
  
  // Remove reference from URL
  window.history.replaceState({}, document.title, window.location.pathname);
}
