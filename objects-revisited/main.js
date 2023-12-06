const buisness = {
  opens: 'Mon-Fri',
  closes: '2:00 AM',
  totalEmployees: 4,
  daysOpen: ['Monday' , 'Tuseday' , 'Thursday' , 'Friday'],
  employees: {
    john: {
      position: 'Owner',
      daysOfWeekWorking: ['Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday'],
    },
    michael: {
      position: 'Clerk',
      daysOfWeekWorking: ['Monday', 'Wensday'],
    },
    shawn: {
      position: 'Developer',
      daysOfWeekWorking: ['Thursay', 'Tuesday'],
    },
    bob: {
      position: 'Accountant',
      daysOfWeekWorking: ['Monday', 'Wensday', 'Friday'],
    },
  },

}


// function 1
function addWeekends(){
  const newManagmentDays = ['Saturday', 'Sunday']



  buisness.daysOpen.push(...newManagmentDays)

  const getArrs = buisness.employees

  for(let newSchedhule in getArrs){
    getArrs[newSchedhule].daysOfWeekWorking.push('Saturday', 'Sunday')
    console.log(getArrs[newSchedhule].daysOfWeekWorking)
  }

}
console.log(addWeekends())



// API Call function



functgiion addEmployees(){
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/users` , true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.response)
    const titles = [
      'Developer',
      'Chef',
      'Hookah Packer',
      'Hacker'
    ]
    for(let i = 0; i<= 4 ; i++){
      buisness.employees = titles
      console.log(buisness)
    }

  });

  xhr.send();
}


addEmployees()
