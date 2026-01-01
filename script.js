
  // Initialize EmailJS with your Public Key
  (function() {
    emailjs.init({
      publicKey: "0fLbZiMR_AhVR5ahY", 
    });
  })();

  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // simple front-end validation
    if (!form.checkValidity()) {
      statusDiv.className = 'alert alert-warning mb-4';
      statusDiv.textContent = 'Please fill all required fields correctly.';
      statusDiv.classList.remove('d-none');
      return;
    }

    // disable button + show loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';

    // EmailJS sendForm
    emailjs.sendForm(
      'service_d7nqkp7',    // <- replace
      'template_13j9739',   // <- replace
      '#contactForm'        // selector or form element
    ).then(
      function(response) {
        statusDiv.className = 'alert alert-success mb-4';
        statusDiv.textContent = 'Thank you! Your enterprise quote request has been sent. We will respond within 24 hours.';
        statusDiv.classList.remove('d-none');
        form.reset();
      },
      function(error) {
        console.error('EmailJS error:', error);
        statusDiv.className = 'alert alert-danger mb-4';
        statusDiv.textContent = 'Sorry, something went wrong while sending your request. Please try again or email us directly at info@pcbcare.com.';
        statusDiv.classList.remove('d-none');
      }
    ).finally(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  });

  // Existing footer year handling (you can move this to script.js if you prefer)
  document.getElementById('year').textContent = new Date().getFullYear();



// Initialize EmailJS - REPLACE WITH YOUR KEYS
