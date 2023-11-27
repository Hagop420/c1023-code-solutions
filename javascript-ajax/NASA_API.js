// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av'

const carousel_item_active = document.querySelector('.AJAX-img-div-one')
const carousel_item_two = document.querySelector('.AJAX-img-div-two')
const carousel_item_three = document.querySelector('.AJAX-img-div-three')





// Image carousel/API dates
const date1 = '2020-02-28'
const date2 = '2023-01-07'
const date3 = '2018-08-22'

function NASA_Api_planets_parsing(whatyougot){
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date1}` , true)
  xhr.responseType = 'json'
  xhr.addEventListener('load' , () => {
    console.log(xhr.status)
    console.log(xhr.response)

const createImgTag = document.createElement('img')
createImgTag.setAttribute('src', xhr.response.hdurl)
createImgTag.setAttribute('title', xhr.response.explanation)
createImgTag.className = 'main_api_img_styling'
carousel_item_active.appendChild(createImgTag)

  })




  // AJAX Image pull 2

  // API request creation with XMLHTTPrequest
  const xhr2 = new XMLHttpRequest()
  xhr2.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date2}`, true)
  xhr2.responseType = 'json'
  xhr2.addEventListener('load', () => {
    console.log(xhr2.status)
    console.log(xhr2.response)

    const Ajax_img_two = document.createElement('img')
    Ajax_img_two.setAttribute('src', xhr2.response.hdurl)
    Ajax_img_two.setAttribute('title', xhr2.response.explanation)
    Ajax_img_two.className = 'main_api_img_styling'
    carousel_item_two.appendChild(Ajax_img_two)

  })




  // AJAX Pull for carousel three image

  // API request creation with XMLHTTPrequest
  const xhr3 = new XMLHttpRequest()
  xhr3.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date2}`, true)
  xhr3.responseType = 'json'
  xhr3.addEventListener('load', () => {
    console.log(xhr3.status)
    console.log(xhr3.response)

    const AJAX_image_three = document.createElement('img')
    AJAX_image_three.setAttribute('src', xhr3.response.hdurl)
    AJAX_image_three.setAttribute('title', xhr3.response.explanation)
    AJAX_image_three.className = 'main_api_img_styling'
    carousel_item_three.appendChild(AJAX_image_three)

  })



  xhr.send()
  xhr2.send()
  xhr3.send()
}

NASA_Api_planets_parsing()
