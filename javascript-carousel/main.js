// Targeting the chevron's of right even't handler
const chevronRights = document.querySelectorAll('i.fa-chevron-right')


const chevronLefts = document.querySelectorAll('i.fa-chevron-left')

// Img 1
const imgOne = document.querySelector('.one')





let slidingPoint = 0




// For chevron right arrow
function loopInterval(){

chevronRights.forEach(chevronR => {
  chevronR.addEventListener('click' , () => {
intervalLooping()
})



})
}





// backward chevron is clicke'd fire off this event handler

chevronLefts.forEach(chevronL => {
  chevronL.addEventListener('click' , () => {
backwardArr()
})



})





const clearCarousel = setInterval(intervalLooping, 300);

function intervalLooping(){
  slidingPoint++
    const images = ['./images/025.png' ,
    './images/039.png', './images/007.png' ,
    './images/001.png' , './images/004.png' ,
    './images/007.png' , './images/025.png']


      // 0 < 2    //true
      // console.log(slidingPoint ===  images.length - 2)
  if(slidingPoint < images.length){
    imgOne.setAttribute('src' , images[slidingPoint])
  }else{
    clearInterval(clearCarousel)
    slidingPoint = 0;
    imgOne.setAttribute('src' , images[slidingPoint])
  }
}



let backwardPoint = 1

function backwardArr(){
  backwardPoint--

    const images = ['./images/025.png' ,
    './images/039.png', './images/007.png' ,
    './images/001.png' , './images/004.png' ,
    './images/007.png' , './images/025.png']


      // 0 < 2    //true
      // console.log(slidingPoint ===  images.length - 2)
  if(backwardPoint < images.length){
    imgOne.setAttribute('src' , images[backwardPoint])
  }else{
        clearInterval(clearCarousel)
    slidingPoint = 0;
    imgOne.setAttribute('src' , images[backwardPoint])
  }
}





// Interval method


loopInterval()
