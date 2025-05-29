// Mentor Discovery Component

export function createMentorSection() {
  const mentorHTML = `
    <section id="mentors" class="mentors-section">
      <div class="container">
        <div class="section-header">
          <h2>Connect with Industry Experts</h2>
          <p>Find mentors who can guide you toward your career goals and help you navigate your professional journey.</p>
        </div>

        <!-- Search and Filter -->
        <div class="mentor-search">
          <div class="search-bar">
            <input type="text" id="mentorSearch" placeholder="Search by industry, role, or expertise...">
            <button class="btn btn-primary">
              <i class="fas fa-search"></i> Search
            </button>
          </div>
          
          <div class="filter-tabs">
            <button class="filter-tab active" data-filter="all">All Mentors</button>
            <button class="filter-tab" data-filter="technology">Technology</button>
            <button class="filter-tab" data-filter="healthcare">Healthcare</button>
            <button class="filter-tab" data-filter="business">Business</button>
            <button class="filter-tab" data-filter="arts">Arts & Creative</button>
            <button class="filter-tab" data-filter="finance">Finance</button>
          </div>
        </div>

        <!-- Featured Mentors -->
        <div class="mentors-grid">
          <div class="mentor-card" data-category="technology">
            <div class="mentor-avatar">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face" alt="Sarah Chen" />
              <div class="mentor-status online"></div>
            </div>
            <div class="mentor-info">
              <h3>Sarah Chen</h3>
              <p class="mentor-title">Senior Software Engineer at Google</p>
              <p class="mentor-experience">8+ years in AI/ML</p>
              
              <div class="mentor-specialties">
                <span class="specialty-tag">Machine Learning</span>
                <span class="specialty-tag">Python</span>
                <span class="specialty-tag">Career Growth</span>
              </div>
              
              <div class="mentor-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>4.9 (127 reviews)</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>45 mentees</span>
                </div>
              </div>
              
              <div class="mentor-actions">
                <button class="btn btn-primary btn-full" onclick="connectWithMentor('sarah-chen')">
                  <i class="fas fa-comment"></i> Connect
                </button>
              </div>
            </div>
          </div>

          <div class="mentor-card" data-category="healthcare">
            <div class="mentor-avatar">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face" alt="Dr. Michael Rodriguez" />
              <div class="mentor-status busy"></div>
            </div>
            <div class="mentor-info">
              <h3>Dr. Michael Rodriguez</h3>
              <p class="mentor-title">Chief Medical Officer at HealthTech Inc</p>
              <p class="mentor-experience">15+ years in healthcare</p>
              
              <div class="mentor-specialties">
                <span class="specialty-tag">Medical Career</span>
                <span class="specialty-tag">Leadership</span>
                <span class="specialty-tag">Healthcare Innovation</span>
              </div>
              
              <div class="mentor-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>4.8 (89 reviews)</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>32 mentees</span>
                </div>
              </div>
              
              <div class="mentor-actions">
                <button class="btn btn-primary btn-full" onclick="connectWithMentor('michael-rodriguez')">
                  <i class="fas fa-comment"></i> Connect
                </button>
              </div>
            </div>
          </div>

          <div class="mentor-card" data-category="business">
            <div class="mentor-avatar">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" alt="Emma Thompson" />
              <div class="mentor-status online"></div>
            </div>
            <div class="mentor-info">
              <h3>Emma Thompson</h3>
              <p class="mentor-title">VP of Marketing at StartupCorp</p>
              <p class="mentor-experience">12+ years in marketing</p>
              
              <div class="mentor-specialties">
                <span class="specialty-tag">Digital Marketing</span>
                <span class="specialty-tag">Brand Strategy</span>
                <span class="specialty-tag">Startup Growth</span>
              </div>
              
              <div class="mentor-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>4.9 (156 reviews)</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>67 mentees</span>
                </div>
              </div>
              
              <div class="mentor-actions">
                <button class="btn btn-primary btn-full" onclick="connectWithMentor('emma-thompson')">
                  <i class="fas fa-comment"></i> Connect
                </button>
              </div>
            </div>
          </div>

          <div class="mentor-card" data-category="finance">
            <div class="mentor-avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="James Wilson" />
              <div class="mentor-status offline"></div>
            </div>
            <div class="mentor-info">
              <h3>James Wilson</h3>
              <p class="mentor-title">Investment Manager at Goldman Sachs</p>
              <p class="mentor-experience">10+ years in finance</p>
              
              <div class="mentor-specialties">
                <span class="specialty-tag">Investment Banking</span>
                <span class="specialty-tag">Financial Analysis</span>
                <span class="specialty-tag">Career Transition</span>
              </div>
              
              <div class="mentor-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>4.7 (93 reviews)</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>28 mentees</span>
                </div>
              </div>
              
              <div class="mentor-actions">
                <button class="btn btn-primary btn-full" onclick="connectWithMentor('james-wilson')">
                  <i class="fas fa-comment"></i> Connect
                </button>
              </div>
            </div>
          </div>

          <div class="mentor-card" data-category="arts">
            <div class="mentor-avatar">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Lisa Park" />
              <div class="mentor-status online"></div>
            </div>
            <div class="mentor-info">
              <h3>Lisa Park</h3>
              <p class="mentor-title">Creative Director at Design Studio</p>
              <p class="mentor-experience">9+ years in design</p>
              
              <div class="mentor-specialties">
                <span class="specialty-tag">UX/UI Design</span>
                <span class="specialty-tag">Creative Direction</span>
                <span class="specialty-tag">Portfolio Building</span>
              </div>
              
              <div class="mentor-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>4.8 (112 reviews)</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>53 mentees</span>
                </div>
              </div>
              
              <div class="mentor-actions">
                <button class="btn btn-primary btn-full" onclick="connectWithMentor('lisa-park')">
                  <i class="fas fa-comment"></i> Connect
                </button>
              </div>
            </div>
          </div>

          <div class="mentor-card" data-category="technology">
            <div class="mentor-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="David Kim" />
              <div class="mentor-status online"></div>
            </div>
            <div class="mentor-info">
              <h3>David Kim</h3>
              <p class="mentor-title">Engineering Manager at Microsoft</p>
              <p class="mentor-experience">11+ years in tech</p>
              
              <div class="mentor-specialties">
                <span class="specialty-tag">Software Engineering</span>
                <span class="specialty-tag">Team Leadership</span>
                <span class="specialty-tag">Tech Interviews</span>
              </div>
              
              <div class="mentor-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>4.9 (178 reviews)</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>72 mentees</span>
                </div>
              </div>
              
              <div class="mentor-actions">
                <button class="btn btn-primary btn-full" onclick="connectWithMentor('david-kim')">
                  <i class="fas fa-comment"></i> Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mentor-cta">
          <h3>Can't find the right mentor?</h3>
          <p>Browse our full directory of 500+ industry professionals across all fields.</p>
          <button class="btn btn-primary" onclick="showAllMentors()">
            <i class="fas fa-search"></i> Browse All Mentors
          </button>
        </div>
      </div>
    </section>
  `;

  return mentorHTML;
}

// Mentor interaction functions
export function initializeMentorSection() {
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

// Global functions for mentor interactions
window.connectWithMentor = function(mentorId) {
  if (!window.appState.isLoggedIn) {
    openLoginModal();
    return;
  }
  
  // Show connection modal or redirect to mentor profile
  alert(`Connecting with mentor: ${mentorId}. This would normally open a connection modal or redirect to the mentor's profile page.`);
};

window.showAllMentors = function() {
  if (!window.appState.isLoggedIn) {
    openLoginModal();
    return;
  }
  
  alert('This would redirect to a full mentor directory page with advanced search and filtering options.');
};