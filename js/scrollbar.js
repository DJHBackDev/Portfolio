window.addEventListener('wheel', function(e) {
    window.scrollBy(0, e.deltaY);
  });
  
  function toggleContactForm() {
    var x = document.getElementById("contactForm");
    if (x.style.maxHeight) {
      x.style.maxHeight = null;
    } else {
      x.style.maxHeight = x.scrollHeight + "px";
    }
  }