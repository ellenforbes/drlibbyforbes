// Universal Template Loader - Updated with appointment and location popups
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
            <a href="#" class="mobile-nav-link location-trigger">Location</a>
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
            <a href="#" class="nav-link location-trigger">Location</a>
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
            <p>Please check back after the 15th of February to schedule and appointment</p>
            
            <div class="appointment-options">
                <a href="mailto:ellenmarieforbes@gmail.com" class="appointment-option">
                    <div class="appointment-icon">✉️</div>
                    <div class="appointment-details">
                        <h3>Email</h3>
                        <p>testdontemail@gmail.com</p>
                    </div>
                </a>
                
                <a href="tel:+61498468531" class="appointment-option">
                    <div class="appointment-icon">📞</div>
                    <div class="appointment-details">
                        <h3>Call</h3>
                        <p>0400 123 123</p>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- Location Popup Modal -->
    <div id="locationModal" class="location-modal">
        <div class="location-modal-content">
            <span class="location-modal-close">&times;</span>
            <h2>Practice Location</h2>
            <p>Dr Libby Forbes - Brisbane, QLD</p>
            
            <div id="locationMap" class="location-map"></div>
        </div>
    </div>
    `;

    // Replace body content with template
    document.body.innerHTML = template;

    // ===== APPOINTMENT POPUP FUNCTIONALITY =====
    const appointmentModal = document.getElementById('appointmentModal');
    const appointmentTriggers = document.querySelectorAll('.book-appointment-trigger, .btn-primary');
    const appointmentCloseBtn = document.querySelector('.appointment-modal-close');

    // Open appointment modal
    appointmentTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            appointmentModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close appointment modal when clicking X
    if (appointmentCloseBtn) {
        appointmentCloseBtn.addEventListener('click', function() {
            appointmentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close appointment modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === appointmentModal) {
            appointmentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === locationModal) {
            locationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (locationMapInstance) {
                locationMapInstance.remove();
                locationMapInstance = null;
            }
        }
    });

    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (appointmentModal.style.display === 'block') {
                appointmentModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (locationModal.style.display === 'block') {
                locationModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (locationMapInstance) {
                    locationMapInstance.remove();
                    locationMapInstance = null;
                }
            }
        }
    });

    // ===== LOCATION POPUP FUNCTIONALITY =====
    const locationModal = document.getElementById('locationModal');
    const locationTriggers = document.querySelectorAll('.location-trigger');
    const locationCloseBtn = document.querySelector('.location-modal-close');
    let locationMapInstance = null;

    // Open location modal and initialize map
    locationTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            locationModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Initialize map after a short delay to ensure the container is visible
            setTimeout(function() {
                if (!locationMapInstance) {
                    const lat = -27.4645274;
                    const lng = 153.0251978;
                    
                    locationMapInstance = L.map('locationMap').setView([lat, lng], 15);
                    
                    // Add CartoDB light tiles
                    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                        attribution: '© OpenStreetMap contributors © CARTO',
                        subdomains: 'abcd',
                        maxZoom: 20
                    }).addTo(locationMapInstance);
                    
                    // Add marker
                    const marker = L.marker([lat, lng]).addTo(locationMapInstance);
                    
                    const mapsIcon = `<a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Open in Google Maps</a>`;
                    
                    marker.bindPopup(`<b>Dr Libby Forbes</b><br>${mapsIcon}`).openPopup();
                }
            }, 100);
        });
    });

    // Close location modal when clicking X
    if (locationCloseBtn) {
        locationCloseBtn.addEventListener('click', function() {
            locationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (locationMapInstance) {
                locationMapInstance.remove();
                locationMapInstance = null;
            }
        });
    }
})();
