// initialize slideshow

// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false
const slideshow_container = document.querySelector(".testimonial-slider");
const slider = new Flickity(slideshow_container, {
  pageDots: false,
	wrapAround: true,
	autoPlay: false,
  cellAlign: 'left',
  pauseAutoPlayOnHover: false,
	// fullscreen: true,
});
