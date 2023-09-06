
  //COFFEE PRODUCTS SLIDER
  let sliderIndex = 0;
  const sliderItems = document.querySelectorAll('.slider-item');
  const totalSliderItems = sliderItems.length;
  
  function moveSlider(newIndex) {
      sliderItems[0].parentNode.style.transform = `translateX(-${newIndex * 100}%)`;
      sliderIndex = newIndex;
  }
  
  document.querySelector('.slider-arrow-left').addEventListener('click', function(event) {
      event.preventDefault();
      moveSlider((sliderIndex - 1 + totalSliderItems) % totalSliderItems);
  });
  
  document.querySelector('.slider-arrow-right').addEventListener('click', function(event) {
      event.preventDefault();
      moveSlider((sliderIndex + 1) % totalSliderItems);
  });
  
  // the image change automatically every 3 seconds
  setInterval(function() {
      moveSlider((sliderIndex + 1) % totalSliderItems);
  }, 3000);
   