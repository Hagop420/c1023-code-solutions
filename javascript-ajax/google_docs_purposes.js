// API Key for global usages
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av'



function nasaImages() {




  // Astronomy Picrure of the day API Pull
  const xhr = new XMLHttpRequest();

    // Include the API key in the URL
  xhr.open('GET', `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}` , true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });

xhr.send()
}
nasaImages()




function astoidsHereFunction(){
  // Images/Facts about astroids API Pull
  const xhr = new XMLHttpRequest();
  // Include the API key in the URL
  xhr.open('GET', `https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKey}` , true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });

  xhr.send()
}

astoidsHereFunction()




function weatherConditionsSpace(){
  // Images/Facts about astroids API Pull
  const xhr = new XMLHttpRequest();
  // Include the API key in the URL
  xhr.open('GET', `https://api.nasa.gov/DONKI/CME?api_key=${apiKey}` , true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });

  xhr.send()
}

weatherConditionsSpace()




function mapOfSpace(){
  // Images/Facts about astroids API Pull
  const xhr = new XMLHttpRequest();
  // Include the API key in the URL
  xhr.open('GET', `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}` , true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });

  xhr.send()
}

mapOfSpace()
