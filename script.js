window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('header--open-menu');
    } else {
      document.body.classList.remove('header--open-menu');
    }
  });