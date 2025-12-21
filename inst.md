## **EmailJS Setup - Complete Step-by-Step (5 Minutes)**

## **Step 1: Create Free Account**
1. Go to [emailjs.com](https://www.emailjs.com)
2. Click **"Sign up for free"**
3. Use **Google** or **GitHub** login (fastest)
4. Verify email (check spam if needed)

## **Step 2: Connect Email Service**
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **"Gmail"** or **"Outlook"** (your brand email)
3. **Authorize** EmailJS (one-time only)
4. ✅ **Email Service Connected**

## **Step 3: Create Email Template**
1. Dashboard → **Email Templates** → **Create New Template**
2. **Template Name:** `PCB Quote Request`
3. **Copy this exact content:**

```
Subject: 🖥️ New PCB Quote Request - {{subject}}

👋 New Quote Request Received!

Company: {{name}}
Email: {{email}}
Project Type: {{subject}}
Requirements: {{message}}

---
📅 Sent: {{from_date}}
🕒 Time: {{from_time}}
🌐 From Website: CircuitPro PCB Services
```

4. **Save Template** → **Copy TEMPLATE_ID** (e.g., `template_abc123`)

## **Step 4: Get Your Keys**
From Dashboard → **Account** tab:
```
Public Key: user_xxxxxxxxxx  ← Copy this
Service ID: service_yyyyyyyy  ← Copy this (from Email Services)
Template ID: template_zzzzzz   ← Copy this (from Step 3)
```

## **Step 5: Update Your HTML**
**Replace your form section** with this **exact code:**

```html
<!-- Contact Form (EmailJS Ready) -->
<section id="contact" class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Get a Quote</h2>
      <p class="text-muted">Share your PCB requirements for fast quotation.</p>
    </div>

    <!-- Form Status Messages -->
    <div id="formStatus" class="alert d-none mb-4" role="alert"></div>

    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <form id="contactForm">
          <input type="hidden" name="user_email" id="user_email" />
          
          <div class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Company Name *</label>
              <input type="text" class="form-control" id="name" name="name" required />
            </div>
            
            <div class="col-md-6">
              <label for="email" class="form-label">Contact Email *</label>
              <input type="email" class="form-control" id="email" name="email" required />
            </div>
            
            <div class="col-12">
              <label for="subject" class="form-label">Project Type *</label>
              <input type="text" class="form-control" id="subject" name="subject" 
                     placeholder="Prototype / Production / Design / Repair" required />
            </div>
            
            <div class="col-12">
              <label for="message" class="form-label">Requirements</label>
              <textarea class="form-control" id="message" name="message" rows="5" 
                        placeholder="Board size, layers, components, quantity, deadline, Gerber files..."></textarea>
            </div>
            
            <div class="col-12 text-end">
              <button type="submit" class="btn btn-primary" id="submitBtn">
                <span class="spinner-border spinner-border-sm d-none" role="status"></span>
                Request Quote
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
```

## **Step 6: Replace JavaScript (Before `</body>`)**

```html
<!-- EmailJS SDK -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script>
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
</script>
```

## **Step 7: Replace These 3 Values**
```
1. YOUR_PUBLIC_KEY_HERE → user_abc123def456
2. YOUR_SERVICE_ID → service_xyz789
3. YOUR_TEMPLATE_ID → template_uvw012
```

## **✅ Test It**
1. Save HTML file
2. Open in browser
3. Fill form → **Submit**
4. Check your **brand email** (usually arrives in 10-30 seconds)

## **Features Included**
- ✅ Loading spinner + button disable
- ✅ Success/error alerts
- ✅ Form validation
- ✅ Auto-scroll to status
- ✅ Mobile responsive
- ✅ Professional email formatting 

**Your PCB clients will receive perfect quote requests!** 🚀

**Done? Test it and confirm you receive the email, then we can add file uploads for Gerber files next.**