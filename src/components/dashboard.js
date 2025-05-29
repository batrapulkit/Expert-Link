// Student Dashboard Component

export function createDashboard() {
  const dashboardHTML = `
    <div class="dashboard-container">
      <!-- Dashboard Header -->
      <div class="dashboard-header">
        <div class="container">
          <div class="user-welcome">
            <h1>Welcome back, <span id="userNameDisplay">[Student Name]</span>!</h1>
            <p class="user-tagline">Ready to take the next step in your career journey?</p>
          </div>
          
          <div class="quick-stats">
            <div class="stat-card">
              <div class="stat-number">3</div>
              <div class="stat-label">Active Mentors</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">7</div>
              <div class="stat-label">Applications</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">12</div>
              <div class="stat-label">Resources Saved</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard Navigation -->
      <div class="dashboard-nav">
        <div class="container">
          <div class="nav-tabs">
            <button class="nav-tab active" data-tab="overview">
              <i class="fas fa-tachometer-alt"></i> Overview
            </button>
            <button class="nav-tab" data-tab="mentors">
              <i class="fas fa-user-friends"></i> My Mentors
            </button>
            <button class="nav-tab" data-tab="opportunities">
              <i class="fas fa-briefcase"></i> Opportunities
            </button>
            <button class="nav-tab" data-tab="resources">
              <i class="fas fa-graduation-cap"></i> Resources
            </button>
            <button class="nav-tab" data-tab="profile">
              <i class="fas fa-user"></i> Profile
            </button>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <div class="container">
          <!-- Overview Tab -->
          <div id="overview-tab" class="tab-content active">
            <div class="dashboard-grid">
              <!-- Career Progress -->
              <div class="dashboard-card">
                <div class="card-header">
                  <h3><i class="fas fa-chart-line"></i> Career Progress</h3>
                </div>
                <div class="card-content">
                  <div class="progress-item">
                    <span class="progress-label">Profile Completion</span>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 85%"></div>
                    </div>
                    <span class="progress-value">85%</span>
                  </div>
                  
                  <div class="progress-item">
                    <span class="progress-label">Goal Clarity</span>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 60%"></div>
                    </div>
                    <span class="progress-value">60%</span>
                  </div>
                  
                  <div class="progress-item">
                    <span class="progress-label">Network Building</span>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 40%"></div>
                    </div>
                    <span class="progress-value">40%</span>
                  </div>
                </div>
              </div>

              <!-- Recent Activity -->
              <div class="dashboard-card">
                <div class="card-header">
                  <h3><i class="fas fa-clock"></i> Recent Activity</h3>
                </div>
                <div class="card-content">
                  <div class="activity-item">
                    <div class="activity-icon">
                      <i class="fas fa-user-plus"></i>
                    </div>
                    <div class="activity-details">
                      <div class="activity-title">Connected with Sarah Johnson</div>
                      <div class="activity-time">2 hours ago</div>
                    </div>
                  </div>
                  
                  <div class="activity-item">
                    <div class="activity-icon">
                      <i class="fas fa-bookmark"></i>
                    </div>
                    <div class="activity-details">
                      <div class="activity-title">Saved Software Engineering Course</div>
                      <div class="activity-time">5 hours ago</div>
                    </div>
                  </div>
                  
                  <div class="activity-item">
                    <div class="activity-icon">
                      <i class="fas fa-paper-plane"></i>
                    </div>
                    <div class="activity-details">
                      <div class="activity-title">Applied to Google Internship</div>
                      <div class="activity-time">1 day ago</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Recommended Actions -->
              <div class="dashboard-card">
                <div class="card-header">
                  <h3><i class="fas fa-lightbulb"></i> Recommended Actions</h3>
                </div>
                <div class="card-content">
                  <div class="recommendation-item">
                    <div class="rec-icon">
                      <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="rec-content">
                      <div class="rec-title">Schedule a session with your mentor</div>
                      <div class="rec-desc">It's been 2 weeks since your last mentoring session</div>
                      <button class="btn btn-sm btn-primary">Schedule Now</button>
                    </div>
                  </div>
                  
                  <div class="recommendation-item">
                    <div class="rec-icon">
                      <i class="fas fa-edit"></i>
                    </div>
                    <div class="rec-content">
                      <div class="rec-title">Complete your profile</div>
                      <div class="rec-desc">Add your skills and experience to get better matches</div>
                      <button class="btn btn-sm btn-primary">Update Profile</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Upcoming Events -->
              <div class="dashboard-card">
                <div class="card-header">
                  <h3><i class="fas fa-calendar"></i> Upcoming Events</h3>
                </div>
                <div class="card-content">
                  <div class="event-item">
                    <div class="event-date">
                      <div class="event-day">15</div>
                      <div class="event-month">Dec</div>
                    </div>
                    <div class="event-details">
                      <div class="event-title">Tech Career Fair</div>
                      <div class="event-time">2:00 PM - 6:00 PM</div>
                      <div class="event-location">Virtual Event</div>
                    </div>
                  </div>
                  
                  <div class="event-item">
                    <div class="event-date">
                      <div class="event-day">18</div>
                      <div class="event-month">Dec</div>
                    </div>
                    <div class="event-details">
                      <div class="event-title">Mentoring Session with John Doe</div>
                      <div class="event-time">3:00 PM - 4:00 PM</div>
                      <div class="event-location">Video Call</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Other tab contents will be added in subsequent components -->
          <div id="mentors-tab" class="tab-content">
            <div class="coming-soon">
              <i class="fas fa-tools"></i>
              <h3>Mentors Dashboard Coming Soon</h3>
              <p>We're building an amazing experience for you to connect with your mentors.</p>
            </div>
          </div>

          <div id="opportunities-tab" class="tab-content">
            <div class="coming-soon">
              <i class="fas fa-tools"></i>
              <h3>Opportunities Dashboard Coming Soon</h3>
              <p>Job and internship listings will be available here soon.</p>
            </div>
          </div>

          <div id="resources-tab" class="tab-content">
            <div class="coming-soon">
              <i class="fas fa-tools"></i>
              <h3>Resources Dashboard Coming Soon</h3>
              <p>Your personalized learning resources will appear here.</p>
            </div>
          </div>

          <div id="profile-tab" class="tab-content">
            <div class="coming-soon">
              <i class="fas fa-tools"></i>
              <h3>Profile Settings Coming Soon</h3>
              <p>Manage your profile and preferences here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return dashboardHTML;
}

// Dashboard interaction handlers
export function initializeDashboard() {
  // Tab switching functionality
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs and contents
      navTabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const targetContent = document.getElementById(`${targetTab}-tab`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Update user name in dashboard
  const userNameDisplay = document.getElementById('userNameDisplay');
  if (userNameDisplay && window.appState.currentUser) {
    userNameDisplay.textContent = window.appState.currentUser.name;
  }
}