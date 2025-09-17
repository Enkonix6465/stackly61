// Sticky Header Animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});



document.querySelectorAll('.pjax-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const url = this.getAttribute('href');

    fetch(url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('#main-content').innerHTML;
        document.querySelector('#main-content').innerHTML = newContent;
        history.pushState(null, '', url);

        // Re-initialize lazy loading for new content
        initLazyLoad();
      });
  });
});


// loader.js

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
  document.getElementById("content").style.display = "block";
});



// header.js

 
// Mobile menu setup
const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburgerMenu");

// Show/hide mobile menu on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

// Toggle dropdowns for mobile menu
document.querySelectorAll('.mobile-dropdown-parent > span').forEach(link => {
  link.addEventListener('click', function() {
    const parentLi = this.parentElement;
    const dropdown = parentLi.querySelector('.mobile-dropdown');
    dropdown.classList.toggle('active');
  });
});

// Close mobile menu when switching to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  }
});

// Desktop dropdown toggle logic
document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== this.nextElementSibling) {
        menu.classList.remove('active');
      }
    });
    const dropdownMenu = this.nextElementSibling;
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('active');
    }
  });
});

// Redirect on desktop dropdown menu item click
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href !== "#") {
      window.location.href = href;
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
    }
  });
});

// Redirect on normal nav link click
document.querySelectorAll('.nav-menu > .nav-item:not(.dropdown) .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href !== "#") {
      window.location.href = href;
    }
  });
});

// Auth link toggle for desktop and mobile
function setupAuthLinks() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const authLinks = [document.getElementById("authLink"), document.getElementById("mobileAuthLink")];

  authLinks.forEach(link => {
    if (!link) return;
    if (isLoggedIn) {
      link.innerText = "Logout";
      link.href = "#";
      link.onclick = (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
      };
    } else {
      link.innerText = "Login";
      link.href = "index.html";
      link.onclick = null;
    }
  });
}
setupAuthLinks();

// Theme toggle
const toggleBtn = document.getElementById('toggleBtn');
let darkMode = localStorage.getItem('darkMode') === 'true';

function applyTheme() {
  if (darkMode) {
    document.body.classList.add('dark-mode');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove('dark-mode');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  applyTheme();
});
applyTheme();

// Avatar initials logic
const avatarCircle = document.getElementById('avatarCircle');
const avatarInitials = document.getElementById('avatarInitials');
const avatarDropdown = document.getElementById('avatarDropdown');
const logoutBtn = document.getElementById('logoutBtn');
const currentUserEmail = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || {};

if (currentUserEmail && users[currentUserEmail]) {
  const firstName = users[currentUserEmail].firstName || "";
  const lastName = users[currentUserEmail].lastName || "";
  const initials = (firstName[0] || "").toUpperCase() + (lastName[0] || "").toUpperCase();
  avatarInitials.textContent = initials;
} else {
  avatarInitials.textContent = "?";
}

// Show/hide avatar dropdown on click
avatarCircle.addEventListener('click', function(e) {
  e.stopPropagation();
  avatarDropdown.style.display = avatarDropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener('click', function(e) {
  if (!avatarCircle.contains(e.target) && !avatarDropdown.contains(e.target)) {
    avatarDropdown.style.display = "none";
  }
});

 // Logout action
 logoutBtn.addEventListener('click', function(e) {
   e.preventDefault();
   localStorage.removeItem("isLoggedIn");
   localStorage.removeItem("currentUser");
   window.location.href = "index.html";
 });

 // Mobile-specific header functionality
 const isMobile = window.innerWidth <= 768;
 
 if (isMobile) {
   // Mobile header scroll effect - works with global sticky header
   const header = document.querySelector('.header');
   
   // Add mobile-specific styling when global sticky-header class is added
   const observer = new MutationObserver(function(mutations) {
     mutations.forEach(function(mutation) {
       if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
         if (header.classList.contains('sticky-header')) {
           header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
         } else {
           header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
         }
       }
     });
   });
   
   observer.observe(header, { attributes: true });
   
   // Handle mobile viewport changes (address bar show/hide)
   let initialViewportHeight = window.innerHeight;
   window.addEventListener('resize', () => {
     if (Math.abs(window.innerHeight - initialViewportHeight) > 100) {
       // Address bar changed significantly, update after a delay
       setTimeout(() => {
         initialViewportHeight = window.innerHeight;
       }, 300);
     }
   });
   
   // Additional mobile header gap prevention
   // Force header to stay at top on mobile
   header.style.position = 'fixed';
   header.style.top = '0';
   header.style.left = '0';
   header.style.right = '0';
   header.style.zIndex = '1000';
   
   // Prevent any gap above header
   document.documentElement.style.scrollPaddingTop = '0';
   document.body.style.scrollPaddingTop = '0';
 }