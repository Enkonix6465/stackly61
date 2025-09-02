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


