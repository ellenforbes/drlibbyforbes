// Universal Template Loader - Updated with correct links and appointment popup
(function() {
    // Extract the main content section before replacing body
    const mainContent = document.querySelector('.container');
    const mainContentHTML = mainContent ? mainContent.innerHTML : '';
    
    const template = `
    <!-- Hamburger Menu Button -->
    <button class="hamburger-btn" id="hamburgerBtn">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobileDrawer">
        <div class="mobile-drawer-content">
            <a href="index.html" class="mobile-nav-link">Home</a>
            <a href="about-libby.html" class="mobile-nav-link">About</a>
            <div class="mobile-nav-dropdown" id="mobilePatientInfo">
                <a href="#" class="mobile-nav-link">Patient Information</a>
                <div class="mobile-dropdown-content">
                    <a href="specialist-paediatric-allergist.html">Why choose a specialist paediatric allergist</a>
                    <a href="peanut-nut-allergy.html">Peanut and tree nut allergies</a>
                    <a href="milk-lactose-allergy.html">Cow's milk allergy</a>
                    <a href="egg-allergy.html">Egg allergy</a>
                    <a href="baby-food-introduction-allergy.html">Allergen Introduction for Babies</a>
                    <a href="anaphylaxis-allergy-action-plan.html">Development of personalised allergy and anaphylaxis action plans</a>
                    <a href="allergy-testing.html">Allergy testing and interpretation</a>
                    <a href="eczema-food-sensitivity.html">Eczema</a>
                    <a href="environmental-allergies-rhinitis-asthma.html">Environmental allergies including rhinitis and asthma</a>
                </div>
            </div>
            <a href="publications.html" class="mobile-nav-link">Publications</a>
            <a href="#" class="mobile-nav-link book-appointment-trigger">Book Appointment</a>
            <a href="location.html" class="mobile-nav-link">Location</a>
        </div>
    </div>

    <!-- Drawer Overlay -->
    <div class="drawer-overlay" id="drawerOverlay"></div>

    <div class="page-wrapper">
        <!-- Banner Section -->
        <div class="banner">
            <h1>Dr Libby Forbes</h1>
            <h2>Paediatric Allergist and Immunologist</h2>
            <p>BSc/MBBS DCH MPhil FRACP FRCPA</p>
        </div>

        <!-- Navigation Bar -->
        <nav class="navbar">
            <a href="index.html" class="nav-link">Home</a>
            <a href="about-libby.html" class="nav-link">About</a>
            <div class="nav-dropdown">
                <a href="#" class="nav-link">Patient Information</a>
                <div class="nav-dropdown-content">
                    <a href="specialist-paediatric-allergist.html">Why choose a specialist paediatric allergist</a>
                    <a href="peanut-nut-allergy.html">Peanut and tree nut allergies</a>
                    <a href="milk-lactose-allergy.html">Cow's milk allergy</a>
                    <a href="egg-allergy.html">Egg allergy</a>
                    <a href="baby-food-introduction-allergy.html">Allergen Introduction for Babies</a>
                    <a href="allergy-testing.html">Allergy testing and interpretation</a>
                    <a href="anaphylaxis-allergy-action-plan.html">Development of personalised allergy and anaphylaxis action plans</a>
                    <a href="environmental-allergies-rhinitis-asthma.html">Environmental allergies including rhinitis and asthma</a>
                    <a href="eczema-food-sensitivity.html">Eczema and hives</a>
                </div>
            </div>
            <a href="publications.html" class="nav-link">Publications</a>
            <a href="#" class="nav-link book-appointment-trigger">Book Appointment</a>
            <a href="location.html" class="nav-link">Location</a>
        </nav>

        <!-- Main Content -->
        <div class="container">
            ${mainContentHTML}
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Dr Libby Forbes Registered Business and Medical Practioner</p>
        </div>
    </div>

    <!-- Appointment Popup Modal -->
    <div id="appointmentModal" class="appointment-modal">
        <div class="appointment-modal-content">
            <span class="appointment-modal-close">&times;</span>
            <h2>Book an Appointment</h2>
            <p>Please check back on the 15th of February to schedule an appointment:</p>
            
            <div class="appointment-options">
                <a href="mailto:notyetonline@gmail.com" class="appointment-option">
                    <div class="appointment-icon">✉️</div>
                    <div class="appointment-details">
                        <h3>Email</h3>
                        <p>notyetonline@gmail.com</p>
                    </div>
                </a>
                
                <a href="tel:+61400000000" class="appointment-option">
                    <div class="appointment-icon">📞</div>
                    <div class="appointment-details">
                        <h3>Call</h3>
                        <p>0400 123 123</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `;

    // Replace body content with template
    document.body.innerHTML = template;

    // Add appointment popup functionality
    const modal = document.getElementById('appointmentModal');
    const triggers = document.querySelectorAll('.book-appointment-trigger, .btn-primary');
    const closeBtn = document.querySelector('.appointment-modal-close');

    // Open modal when clicking any book appointment button
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
})();
