// Sample Data
const jobsData = [
    {
        id: 1,
        logo: 'M',
        time: '2d ago',
        title: '14th & 15th March ...',
        company: 'Muthoot Fin...',
        rating: '3.7',
        location: 'Jalandhar, Mukerian...'
    },
    {
        id: 2,
        logo: 'HDB',
        time: '4d ago',
        title: 'Sales Executive',
        company: 'HDB Financi...',
        rating: '3.9',
        location: 'Mohali, Panchkula'
    },
    {
        id: 3,
        logo: 'DB',
        time: '22h ago',
        title: 'Senior Manager',
        company: 'Dainik Bhas...',
        rating: '4.2',
        location: 'Panchkula, Sonipat'
    },
    {
        id: 4,
        logo: 'TCS',
        time: '1h ago',
        title: 'Frontend Developer',
        company: 'Tata Consultancy...',
        rating: '4.0',
        location: 'Remote, Pune'
    }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobsData); // Initial load of all jobs
    
    // Event Delegation: We listen on the body level to handle all interactions
    document.body.addEventListener('click', handleInteractions);

    // Search Input Event
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', handleSearch);
    }

    // Close dropdowns if clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.icon-container')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});

// Render Jobs
function renderJobs(jobsArray) {
    const carousel = document.getElementById('jobsCarousel');
    if (!carousel) return;

    if (jobsArray.length === 0) {
        carousel.innerHTML = '<p style="padding: 20px; color: var(--text-gray);">No jobs found matching your search.</p>';
        return;
    }

    carousel.innerHTML = jobsArray.map(job => `
        <div class="job-card" data-action="view-job" data-id="${job.id}">
            <div class="job-header">
                <div class="company-logo">${job.logo}</div>
                <div class="post-time">${job.time}</div>
            </div>
            <h3 class="job-title">${job.title}</h3>
            <div class="company-name">${job.company} ★ ${job.rating}</div>
            <div class="job-meta">
                <span class="location-icon">📍</span> ${job.location}
            </div>
        </div>
    `).join('');
}

// Search Feature mapping Real-time
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredJobs = jobsData.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) || 
               job.company.toLowerCase().includes(searchTerm) ||
               job.location.toLowerCase().includes(searchTerm);
    });

    // Make sure we are on the 'Profile' tab to show results realistically
    const profileTab = document.querySelector('[data-tab="profile"]');
    if (profileTab && !profileTab.classList.contains('active')) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        profileTab.classList.add('active');
    }

    renderJobs(filteredJobs);
}

// Toast Notification System
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color: #4ade80;">✔</span> ${message}`;
    
    container.appendChild(toast);

    // Remove toast after animation finishes (3 seconds)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Centralized Event Handler using Delegation
function handleInteractions(e) {
    // Dropdown Toggles Structure Handling
    const toggler = e.target.closest('[data-action="toggle-dropdown"]');
    if (toggler) {
        const targetId = toggler.getAttribute('data-target');
        const targetMenu = document.getElementById(targetId);
        
        // Close others first
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu.id !== targetId) menu.classList.remove('show');
        });

        // Toggle requested
        if (targetMenu) {
            targetMenu.classList.toggle('show');
        }
        return; // Event handled
    }

    // Interactive Actions Handling
    const actionTarget = e.target.closest('[data-action]');
    if (actionTarget) {
        const action = actionTarget.getAttribute('data-action');

        switch (action) {
            case 'complete-profile':
                showToast('Redirecting to profile completion page...');
                break;
            
            case 'select-disability':
                // Toggle selection logic
                document.querySelectorAll('[data-action="select-disability"]').forEach(btn => {
                    btn.classList.remove('selected');
                });
                actionTarget.classList.add('selected');
                
                // Enable submit button
                const submitBtn = document.getElementById('submitDisability');
                if (submitBtn) {
                    submitBtn.disabled = false;
                }
                break;

            case 'submit-disability':
                showToast('Disability status submitted successfully!');
                actionTarget.disabled = true;
                document.querySelectorAll('[data-action="select-disability"]').forEach(btn => {
                    btn.classList.remove('selected');
                    btn.disabled = true; // Disable selections after submit
                });
                break;

            case 'create-resume':
                showToast('Opening Resume Builder sequence...');
                break;

            case 'opt-in-whatsapp':
                showToast('Success! You opted in for WhatsApp updates.');
                actionTarget.innerText = "Opted IN ✓";
                actionTarget.style.backgroundColor = "#25d366";
                break;

            case 'view-job':
                const jobName = actionTarget.querySelector('.job-title').innerText;
                showToast(`Opening details for ${jobName}`);
                break;

            case 'toast':
                // For simple elements that just want to trigger a generic toast (like dropdown items)
                const message = actionTarget.getAttribute('data-message');
                if (message) {
                    showToast(message);
                    // Also close dropdown if action was inside one
                    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
                }
                break;
        }
        return; // Event handled
    }

    // Tab Handling
    const tabTarget = e.target.closest('[data-tab]');
    if (tabTarget) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tabTarget.classList.add('active');
        
        const tabName = tabTarget.getAttribute('data-tab');
        
        if (tabName === 'preferences') {
            document.getElementById('jobsCarousel').innerHTML = '<p style="padding: 20px; color: var(--text-gray);">No jobs in preferences yet.</p>';
        } else {
            // Reset Search bar when switching back to profile
            const sb = document.querySelector('.search-bar');
            if (sb) sb.value = '';
            renderJobs(jobsData); // Show all profile based jobs
        }
    }
}
