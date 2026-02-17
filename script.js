//// NAVIGATION ////
// Mobile navigation dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    const navDropdown = document.querySelector('.nav-dropdown');
    const navLink = navDropdown ? navDropdown.querySelector('.nav-link') : null;
    
    if (navLink && window.innerWidth <= 767) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            navDropdown.classList.toggle('active');
        });
    }

    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const mobilePatientInfo = document.getElementById('mobilePatientInfo');

    // Toggle hamburger menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            mobileDrawer.classList.toggle('active');
            drawerOverlay.classList.toggle('active');
        });
    }

    // Close drawer when clicking overlay
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            mobileDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
        });
    }

    // Mobile Patient Information dropdown toggle
    if (mobilePatientInfo) {
        const mobileDropdownLink = mobilePatientInfo.querySelector('.mobile-nav-link');
        if (mobileDropdownLink) {
            mobileDropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                mobilePatientInfo.classList.toggle('expanded');
            });
        }
    }
});

//// MAP ////
// Initialize the map (Brisbane coordinates as example)
const map = L.map('map').setView([-27.4698, 153.0251], 13);

// Add Positron (light) tiles from CartoDB to map
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

const lat = -27.4645274;
const lng = 153.0251978;

const marker = L.marker([lat, lng]).addTo(map);

const mapsIcon = `<a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Practice Location</a>`;

marker.bindPopup(`<b>Dr Libby Forbes</b><br>${mapsIcon}`);




//// INFORMATION BUTTON ////
// Dropdown toggle function for information button
function toggleDropdown() {
    const dropdown = document.querySelector('.info-dropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside information button
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.info-dropdown');
    const button = document.querySelector('.info-button');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});