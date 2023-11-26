
// // API key for all API calls for NASA website API GET'S


// const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';


// function nasaImages() {

//   const xhr = new XMLHttpRequest();
//     // Include the API key in the URL
//   xhr.open('GET', `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}`);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//   });

//   xhr.send();

// }
// // nasaImages()



// // Listening for AJAX call 2


// function astonomy_of_the_day_API() {
//   const xhr = new XMLHttpRequest();
//   // Include the API key in the URL
//   xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}` , true);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//   });

//   xhr.send();
// }

// // astonomy_of_the_day_API()




// // Listening for AJAX call 2


// function zoomerAPI() {
//   const xhr = new XMLHttpRequest();
//   // Include the API key in the URL
//   xhr.open('GET', `https://trek.nasa.gov/tiles/apidoc/trekAPI.html?body=moon` , true);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr);
//   });

//   xhr.send();
// }

// zoomerAPI()


const carousel_item_active = document.querySelector('.AJAX-img-div-one')
const carousel_item_two = document.querySelector('.AJAX-img-div-two')




// const main_API_img = document.querySelector('.mainImg')
// const main_api_img_description = document.querySelector('.explanation')


function NASA_Api_planets_parsing(whatyougot){
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av&date=2010-5-22' , true)
  xhr.responseType = 'json'
  xhr.addEventListener('load' , () => {
    console.log(xhr.status)
    console.log(xhr.response)

const createImgTag = document.createElement('img')
    createImgTag.setAttribute('src', xhr.response.hdurl)

console.log(createImgTag)

createImgTag.className = 'main_api_img_styling'
carousel_item_active.appendChild(createImgTag)


// Description of the main API head image
// main_API_img.textContent =  xhr.response.explanation

  })




  // AJAX Image pull 2

  // API request creation with XMLHTTPrequest
  const xhr2 = new XMLHttpRequest()
  xhr2.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av&date=2019-07-22', true)
  xhr2.responseType = 'json'
  xhr2.addEventListener('load', () => {
    console.log(xhr2.status)
    console.log(xhr2.response)

    const Ajax_img_two = document.createElement('img')
    Ajax_img_two.setAttribute('src', xhr2.response.hdurl)
    Ajax_img_two.className = 'main_api_img_styling'
    carousel_item_two.appendChild(Ajax_img_two)



    // Description of the main API head image
    // main_API_img.textContent =  xhr2.response.explanation

  })


  xhr.send()
  xhr2.send()
}

NASA_Api_planets_parsing()
