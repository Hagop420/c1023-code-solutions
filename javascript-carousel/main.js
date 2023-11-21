// Targeting the chevron's of right even't handler
const chevronRights = document.querySelector('i.fa-chevron-right')


const chevronLefts = document.querySelector('i.fa-chevron-left')

// Img 1
const imgOne = document.querySelector('.one')




const btnDef = document.querySelector('.default-btn')
// getting all of the button's


// const btnOne = document.querySelector('.btn1');
// btnOne.addEventListener('click' , () => {
//   imgOne.src = './images/025.png'
// })

// const btnTwo = document.querySelector('.btn2');
// btnTwo.addEventListener('click' , () => {
//   imgOne.src = './images/039.png'
// })


// const btnThree = document.querySelector('.btn3');
// btnThree.addEventListener('click' , () => {
//   imgOne.src = './images/007.png'
// })
// const btnFour = document.querySelector('.btn4');
// btnFour.addEventListener('click' , () => {
//   imgOne.src = './images/001.png'
// })




let slidingPoint = 0




// For chevron right arrow
function loopInterval(){


  chevronRights.addEventListener('click' , () => {
  intervalLooping()




})
}





// backward chevron is clicke'd fire off this event handler


  chevronLefts.addEventListener('click' , () => {
backwardArr()
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
        btnDef.classList.remove('clr')

    // allBtns.children[1].classList.add('no-button-i-customizations')
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
  if(backwardPoint < images.length){
    imgOne.setAttribute('src' , images[backwardPoint])
  }else{
    slidingPoint = 0;
    imgOne.setAttribute('src' , images[backwardPoint])
    clearInterval(clearCarousel)
  }
}





// Interval method


loopInterval()



// looping on the radio FA icon's

const allBtns = document.querySelectorAll('.fa-solid')

allBtns.forEach(btnEl => {
  btnEl.addEventListener('click' , () => {
    intervalLooping()
    btnEl.classList.add('no-button-i-customizations')
        // clearInterval(clearCarousel)

  })
})
