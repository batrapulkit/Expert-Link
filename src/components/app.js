// Main Application Controller

// Global state management
window.appState = {
  currentUser: null,
  isLoggedIn: false,
  userType: null
};

// Initialize application
export function initializeApp() {
  // Check if user is already logged in (localStorage)
  const savedUser = localStorage.getItem('careerpath_user');
  if (savedUser) {
    window.appState.currentUser = JSON.parse(savedUser);
    window.appState.isLoggedIn = true;
    updateUIForLoggedInUser();
  }
  
  setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
  // Modal event listeners - only close if clicking on the modal backdrop
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // Form submissions
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }

  // Career clarity radio buttons
  const careerClarityRadios = document.querySelectorAll('input[name="careerClarity"]');
  careerClarityRadios.forEach(radio => {
    radio.addEventListener('change', handleCareerClarityChange);
  });

  // User type radio buttons
  const userTypeRadios = document.querySelectorAll('input[name="userType"]');
  userTypeRadios.forEach(radio => {
    radio.addEventListener('change', handleUserTypeChange);
  });
}

// Modal functions
export function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

export function openRegisterModal() {
  document.getElementById('registerModal').style.display = 'block';
}

export function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Handle login form submission
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Simulate login process
  setTimeout(() => {
    // For demo purposes, accept any email/password combination
    const user = {
      email: email,
      name: email.split('@')[0], // Use email prefix as name
      type: 'student', // Default to student
      loginTime: new Date().toISOString()
    };
    
    window.appState.currentUser = user;
    window.appState.isLoggedIn = true;
    localStorage.setItem('careerpath_user', JSON.stringify(user));
    
    closeModal('loginModal');
    updateUIForLoggedInUser();
    showSuccessMessage('Welcome back! Redirecting to your dashboard...');
    
    // Redirect to dashboard after a brief delay
    setTimeout(() => {
      showDashboard();
    }, 2000);
  }, 1000);
}

// Handle registration form submission
function handleRegister(event) {
  event.preventDefault();
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const userType = document.querySelector('input[name="userType"]:checked').value;
  
  let additionalData = {};
  
  if (userType === 'student') {
    const careerClarity = document.querySelector('input[name="careerClarity"]:checked')?.value;
    additionalData.careerClarity = careerClarity;
    
    if (careerClarity === 'clear') {
      additionalData.specificGoal = document.getElementById('specificGoal').value;
    } else if (careerClarity === 'uncertain') {
      const selectedIndustries = Array.from(document.getElementById('industryInterest').selectedOptions)
        .map(option => option.value);
      additionalData.interestedIndustries = selectedIndustries;
    }
  }
  
  // Simulate registration process
  setTimeout(() => {
    const user = {
      name: name,
      email: email,
      type: userType,
      registrationTime: new Date().toISOString(),
      ...additionalData
    };
    
    window.appState.currentUser = user;
    window.appState.isLoggedIn = true;
    localStorage.setItem('careerpath_user', JSON.stringify(user));
    
    closeModal('registerModal');
    updateUIForLoggedInUser();
    showSuccessMessage('Account created successfully! Welcome to CareerPath!');
    
    // Redirect to onboarding/dashboard after a brief delay
    setTimeout(() => {
      if (userType === 'student') {
        showStudentOnboarding();
      } else {
        showProfessionalOnboarding();
      }
    }, 2000);
  }, 1000);
}

// Handle career clarity change
function handleCareerClarityChange(event) {
  const value = event.target.value;
  const specificGoalSection = document.getElementById('specificGoalSection');
  const industryInterestSection = document.getElementById('industryInterestSection');
  
  if (value === 'clear') {
    specificGoalSection.classList.remove('hidden');
    industryInterestSection.classList.add('hidden');
  } else if (value === 'uncertain') {
    specificGoalSection.classList.add('hidden');
    industryInterestSection.classList.remove('hidden');
  }
}

// Handle user type change
function handleUserTypeChange(event) {
  const value = event.target.value;
  const careerGoalSection = document.getElementById('careerGoalSection');
  
  if (value === 'student') {
    careerGoalSection.classList.remove('hidden');
  } else {
    careerGoalSection.classList.add('hidden');
  }
}

// Update UI for logged-in user
function updateUIForLoggedInUser() {
  const authButtons = document.querySelector('.auth-buttons');
  if (authButtons && window.appState.currentUser) {
    authButtons.innerHTML = `
      <span style="color: white; margin-right: 1rem;">Welcome, ${window.appState.currentUser.name}!</span>
      <button class="btn btn-secondary" onclick="showDashboard()">
        <i class="fas fa-tachometer-alt"></i> Dashboard
      </button>
      <button class="btn btn-primary" onclick="logout()">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    `;
  }
}

// Logout function
export function logout() {
  window.appState.currentUser = null;
  window.appState.isLoggedIn = false;
  localStorage.removeItem('careerpath_user');
  
  // Reset auth buttons
  const authButtons = document.querySelector('.auth-buttons');
  if (authButtons) {
    authButtons.innerHTML = `
      <button class="btn btn-secondary" onclick="openLoginModal()">
        <i class="fas fa-sign-in-alt"></i> Sign In
      </button>
      <button class="btn btn-primary" onclick="openRegisterModal()">
        <i class="fas fa-user-plus"></i> Get Started
      </button>
    `;
  }
  
  showSuccessMessage('You have been logged out successfully.');
  
  // Redirect to home page
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}

// Show success message
function showSuccessMessage(message) {
  // Create and show a temporary success message
  const messageDiv = document.createElement('div');
  messageDiv.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 3000;
    animation: slideIn 0.3s ease-out;
  `;
  messageDiv.textContent = message;
  
  // Add animation keyframes
  if (!document.getElementById('successAnimation')) {
    const style = document.createElement('style');
    style.id = 'successAnimation';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(messageDiv);
  
  // Remove message after 3 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// Smooth scroll to section
export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Dashboard functions
export function showDashboard() {
  if (!window.appState.isLoggedIn) {
    openLoginModal();
    return;
  }
  
  // Import dashboard component dynamically
  import('./dashboard.js').then(module => {
    const { createDashboard, initializeDashboard } = module;
    
    // Replace main content with dashboard
    const main = document.querySelector('.main');
    main.innerHTML = createDashboard();
    
    // Initialize dashboard functionality
    initializeDashboard();
    
    // Update page title
    document.title = 'Dashboard - CareerPath';
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    showSuccessMessage('Welcome to your dashboard!');
  }).catch(error => {
    console.error('Error loading dashboard:', error);
    showSuccessMessage('Dashboard loading... Please try again.');
  });
}

function showStudentOnboarding() {
  showSuccessMessage('Setting up your personalized experience...');
  
  // After a brief delay, show the dashboard
  setTimeout(() => {
    showDashboard();
  }, 2000);
}

function showProfessionalOnboarding() {
  showSuccessMessage('Creating your mentor profile...');
  
  // After a brief delay, show a mentor-specific dashboard (for now, same as student)
  setTimeout(() => {
    showDashboard();
  }, 2000);
}