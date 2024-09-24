function toggleFaq(index) {
    // Get all the faq items
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, i) => {
      const answer = item.querySelector('.faq-answer');
      const question = item.querySelector('.faq-question');
  
      if (i === index) {
        // Toggle current answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          question.classList.remove('active');
        } else {
          answer.style.display = 'block';
          question.classList.add('active');
        }
      } else {
        // Hide other answers
        answer.style.display = 'none';
        question.classList.remove('active');
      }
    });
  }
  

  function showContent(tab) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.hAbout');
    tabs.forEach(tabElement => tabElement.classList.remove('active'));
  
    // Hide all content
    const contents = document.querySelectorAll('.content > div');
    contents.forEach(contentElement => contentElement.style.display = 'none');
  
    // Show selected content
    document.getElementById(tab).style.display = 'block';
  
    // Add active class to clicked tab
    event.currentTarget.classList.add('active');
  }
  
  // Show About Me content by default on page load
  document.getElementById('about').style.display = 'block';
  