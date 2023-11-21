// Targeting the chevron's of right even't handler
const chevronRights = document.querySelectorAll('i.fa-chevron-right')


const chevronLefts = document.querySelectorAll('i.fa-chevron-left')

// Img 1
const imgOne = document.querySelector('.one')




// getting all of the button's
const allBtns = document.querySelector('.center')

console.log(allBtns.children[0].classList.add('no-button-i-customizations'))




const btnOne = document.querySelector('.btn1');
btnOne.addEventListener('click' , () => {
  imgOne.src = './images/025.png'
})

const btnTwo = document.querySelector('.btn2');
btnTwo.addEventListener('click' , () => {
  imgOne.src = './images/039.png'
})


const btnThree = document.querySelector('.btn3');
btnThree.addEventListener('click' , () => {
  imgOne.src = './images/007.png'
})
const btnFour = document.querySelector('.btn4');
btnFour.addEventListener('click' , () => {
  imgOne.src = './images/001.png'
})




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
    allBtns.children[1].classList.add('no-button-i-customizations')
  }else{
    slidingPoint = 0;
    // allBtns.children[1].classList.add('dot')
    imgOne.setAttribute('src' , images[slidingPoint])
    clearInterval(clearCarousel)
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
  if(backwardPoint < images.length - 1){
    imgOne.setAttribute('src' , images[backwardPoint])
  }else{
    // slidingPoint = 0;
    imgOne.setAttribute('src' , images[backwardPoint])
    // clearInterval(clearCarousel)
  }
}





// Interval method


loopInterval()
