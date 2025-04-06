document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector('.sideangle-class');

    function handleScroll() {
      const rect = target.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.85;

      if (rect.top < triggerPoint) {
        target.classList.add('slide-in');
        window.removeEventListener('scroll', handleScroll); // Optional: remove once shown
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case it's already in view
  });