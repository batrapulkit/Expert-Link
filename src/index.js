// CareerPath Platform - Main JavaScript File

// Import the main app controller
import { 
  initializeApp, 
  openLoginModal, 
  openRegisterModal, 
  closeModal, 
  scrollToSection, 
  showDashboard, 
  logout 
} from './components/app.js';

// DOM ready handler
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  initializeMentorFunctionality();
});

// Initialize mentor functionality
function initializeMentorFunctionality() {
  // Filter functionality
  const filterTabs = document.querySelectorAll('.filter-tab');
  const mentorCards = document.querySelectorAll('.mentor-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      
      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter mentor cards
      mentorCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Search functionality
  const searchInput = document.getElementById('mentorSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      mentorCards.forEach(card => {
        const mentorName = card.querySelector('h3').textContent.toLowerCase();
        const mentorTitle = card.querySelector('.mentor-title').textContent.toLowerCase();
        const specialties = Array.from(card.querySelectorAll('.specialty-tag'))
          .map(tag => tag.textContent.toLowerCase())
          .join(' ');
        
        const searchContent = `${mentorName} ${mentorTitle} ${specialties}`;
        
        if (searchContent.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// Mentor interaction functions
function connectWithMentor(mentorId) {
  if (!window.appState.isLoggedIn) {
    openLoginModal();
    return;
  }
  
  // Show success message for demo
  const mentorNames = {
    'sarah-chen': 'Sarah Chen',
    'michael-rodriguez': 'Dr. Michael Rodriguez', 
    'emma-thompson': 'Emma Thompson'
  };
  
  const mentorName = mentorNames[mentorId] || 'this mentor';
  
  // Create a modal-like notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    z-index: 3000;
    text-align: center;
    max-width: 400px;
    width: 90%;
  `;
  
  notification.innerHTML = `
    <div style="color: #10b981; font-size: 3rem; margin-bottom: 1rem;">
      <i class="fas fa-check-circle"></i>
    </div>
    <h3 style="margin-bottom: 1rem; color: #1e293b;">Connection Request Sent!</h3>
    <p style="color: #64748b; margin-bottom: 1.5rem;">
      Your connection request has been sent to ${mentorName}. They will review your profile and respond within 24 hours.
    </p>
    <button onclick="this.parentElement.remove()" style="background: #667eea; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; cursor: pointer; font-weight: 500;">
      Got it!
    </button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

function showAllMentors() {
  if (!window.appState.isLoggedIn) {
    openLoginModal();
    return;
  }
  
  // Show placeholder message
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    z-index: 3000;
    text-align: center;
    max-width: 400px;
    width: 90%;
  `;
  
  notification.innerHTML = `
    <div style="color: #667eea; font-size: 3rem; margin-bottom: 1rem;">
      <i class="fas fa-search"></i>
    </div>
    <h3 style="margin-bottom: 1rem; color: #1e293b;">Full Mentor Directory</h3>
    <p style="color: #64748b; margin-bottom: 1.5rem;">
      This would redirect to a comprehensive mentor directory with advanced search filters, industry categories, and detailed profiles.
    </p>
    <button onclick="this.parentElement.remove()" style="background: #667eea; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; cursor: pointer; font-weight: 500;">
      Close
    </button>
  `;
  
  document.body.appendChild(notification);
}

// Make functions globally available for onclick handlers
window.openLoginModal = openLoginModal;
window.openRegisterModal = openRegisterModal;
window.closeModal = closeModal;
window.scrollToSection = scrollToSection;
window.showDashboard = showDashboard;
window.logout = logout;
window.connectWithMentor = connectWithMentor;
window.showAllMentors = showAllMentors;