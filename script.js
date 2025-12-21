// <!-- EmailJS SDK -->
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

// <script>
  // Initialize EmailJS - REPLACE WITH YOUR KEYS
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // ← Paste your Public Key
  
  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const spinner = submitBtn.querySelector('.spinner-border');
    const statusDiv = document.getElementById('formStatus');
    
    // Show loading
    submitBtn.disabled = true;
    spinner.classList.remove('d-none');
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Sending...';
    
    // Copy email to hidden field (EmailJS requirement)
    document.getElementById('user_email').value = document.getElementById('email').value;
    
    // Send form - REPLACE WITH YOUR IDS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
        // Success
        statusDiv.className = 'alert alert-success';
        statusDiv.innerHTML = '✅ Quote request sent successfully! We will respond within 24 hours.';
        statusDiv.classList.remove('d-none');
        
        document.getElementById('contactForm').reset();
      }, function(error) {
        // Error
        console.log('EmailJS Error:', error);
        statusDiv.className = 'alert alert-danger';
        statusDiv.innerHTML = '❌ Failed to send. Please try again or email us directly.';
        statusDiv.classList.remove('d-none');
      })
      .finally(function() {
        // Reset button
        submitBtn.disabled = false;
        spinner.classList.add('d-none');
        submitBtn.innerHTML = 'Request Quote';
      });
  });
  
  // Existing scripts (year, navbar scroll)
  document.getElementById('year').textContent = new Date().getFullYear();
  
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
// </script>
