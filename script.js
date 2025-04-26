// Toggle sidebar
document.querySelector('.menu-icon').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    if (sidebar.style.width === '0px') {
      sidebar.style.width = '240px';
      content.style.marginLeft = '240px';
      content.style.width = 'calc(100% - 240px)';
    } else {
      sidebar.style.width = '0px';
      content.style.marginLeft = '0';
      content.style.width = '100%';
    }
  });
  
  // Handle video card clicks
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    card.addEventListener('click', function() {
      alert('Video player functionality would be implemented here!');
    });
  });
  
  // Handle search form submission
  document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.querySelector('.search-input').value;
    alert(`You searched for: ${searchTerm}`);
  });