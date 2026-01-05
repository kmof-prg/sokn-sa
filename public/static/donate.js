// Donation handling script

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
      
      const formData = {
        sevaName: document.getElementById('hidden-seva-name').value,
        amount: document.getElementById('hidden-amount').value,
        donorName: document.getElementById('donor-name').value,
        donorEmail: document.getElementById('donor-email').value,
        donorPhone: document.getElementById('donor-phone').value,
        donorMessage: document.getElementById('donor-message').value
      };
      
      const statusDiv = document.getElementById('donation-status');
      const submitButton = document.getElementById('submit-donation-btn');
      
      // Disable button during submission
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
      
      try {
        const response = await fetch('/api/donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
          statusDiv.className = 'p-4 rounded-lg bg-green-100 border-2 border-green-500 text-green-800 mb-4';
          statusDiv.innerHTML = '<i class="fas fa-check-circle mr-2"></i>' + data.message;
          
          // Reset form after 3 seconds
          setTimeout(() => {
            closeDonationModal();
          }, 3000);
        } else {
          statusDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-500 text-red-800 mb-4';
          statusDiv.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>' + data.message;
        }
        
        statusDiv.classList.remove('hidden');
        
      } catch (error) {
        statusDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-500 text-red-800 mb-4';
        statusDiv.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>An error occurred. Please contact us directly at accounts@sokn-sa.org';
        statusDiv.classList.remove('hidden');
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-heart mr-2"></i>Complete Donation';
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
