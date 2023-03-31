async function downloadImages() {
    const selector = document.getElementById('selector').value;
    const search = document.getElementById('search').value;
    const replace = document.getElementById('replace').value;
  
    const images = document.querySelectorAll(selector);
  
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const src = image.getAttribute('src');
      const newSrc = src.replace(search, replace);
      image.setAttribute('src', newSrc);
  
      const link = document.createElement('a');
      link.setAttribute('href', newSrc);
      link.setAttribute('download', '');
      link.style.display = 'none';
      document.body.appendChild(link);
  
      const timeout = Math.floor(Math.random() * 4000) + 1000;
      await new Promise(resolve => setTimeout(resolve, timeout));
      link.click();
      document.body.removeChild(link);
    }
  }
  
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      file: 'content.js'
    });
  });