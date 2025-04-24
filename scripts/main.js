function toggleDropdown(id) {
    let element = document.getElementById(id);
    if (element.style.maxHeight) {
      element.style.maxHeight = null;
    } else {
      element.style.maxHeight = element.scrollHeight + "px";
    }
  }
  
  function closePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
  }
  
  window.onload = function () {
    setTimeout(function () {
      document.getElementById('welcomePopup').style.display = 'flex';
    }, 500);
  };
  