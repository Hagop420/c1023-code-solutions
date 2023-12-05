// Set the interval to 3 seconds (3000 milliseconds)
const myCarouselElement = document.querySelector('#carouselExampleIndicators');
document.addEventListener('DOMContentLoaded', function () {

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,
    touch: true
});
})
