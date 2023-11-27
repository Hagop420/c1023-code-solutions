// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av'

const carousel_item_active = document.querySelector('.AJAX-img-div-one')
const carousel_item_two = document.querySelector('.AJAX-img-div-two')
const carousel_item_three = document.querySelector('.AJAX-img-div-three')
const carousel_item_four = document.querySelector('.AJAX-img-div-four')
const carousel_item_five = document.querySelector('.AJAX-img-div-five')
const carousel_item_six = document.querySelector('.AJAX-img-div-six')





// Image carousel/API dates
const date1 = '2020-02-28'
const date2 = '2023-01-07'
const date3 = '2015-01-02'
const date4 = '2018-08-22'
const date5 = '2008-08-22'
const date6 = '2002-08-22'

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
  xhr3.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date3}`, true)
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





  // AJAX Pull for carousel four image

  // API request creation with XMLHTTPrequest
  const xhr4 = new XMLHttpRequest()
  xhr4.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date4}`, true)
  xhr4.responseType = 'json'
  xhr4.addEventListener('load', () => {
    console.log(xhr4.status)
    console.log(xhr4.response)

    const AJAX_image_four = document.createElement('img')
    AJAX_image_four.setAttribute('src', xhr4.response.hdurl)
    AJAX_image_four.setAttribute('title', xhr4.response.explanation)
    AJAX_image_four.className = 'main_api_img_styling'
    carousel_item_four.appendChild(AJAX_image_four)

  })




  // AJAX Pull for carousel five image

  // API request creation with XMLHTTPrequest
  const xhr5 = new XMLHttpRequest()
  xhr5.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date5}`, true)
  xhr5.responseType = 'json'
  xhr5.addEventListener('load', () => {
    console.log(xhr5.status)
    console.log(xhr5.response)

    const AJAX_image_five = document.createElement('img')
    AJAX_image_five.setAttribute('src', xhr5.response.hdurl)
    AJAX_image_five.setAttribute('title', xhr5.response.explanation)
    AJAX_image_five.className = 'main_api_img_styling'
    carousel_item_five.appendChild(AJAX_image_five)

  })




  // AJAX Pull for carousel six image

  // API request creation with XMLHTTPrequest
  const xhr6 = new XMLHttpRequest()
  xhr6.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date6}`, true)
  xhr6.responseType = 'json'
  xhr6.addEventListener('load', () => {
    console.log(xhr6.status)
    console.log(xhr6.response)

    const AJAX_image_six = document.createElement('img')
    AJAX_image_six.setAttribute('src', xhr6.response.hdurl)
    AJAX_image_six.setAttribute('title', xhr6.response.explanation)
    AJAX_image_six.className = 'main_api_img_styling'
    carousel_item_six.appendChild(AJAX_image_six)

  })



  xhr.send()
  xhr2.send()
  xhr3.send()
  xhr4.send()
  xhr5.send()
  xhr6.send()
}

NASA_Api_planets_parsing()
