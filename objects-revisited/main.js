// creating the buisness object

const buisness = {
  opens: 'Mon-Fri',
  closes: '2:00 AM',
  totalEmployees: 4,
  daysOpen: ['Monday', 'Tuseday', 'Thursday', 'Friday'],
  employees: {
    john: {
      position: 'Owner',
      daysOfWeekWorking: [
        'Monday',
        'Tuesday',
        'Wendsday',
        'Thursday',
        'Friday',
      ],
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
};

// function 1
function addWeekends() {
  const newManagmentDays = ['Saturday', 'Sunday'];

  const getArrs = buisness.employees;

  for (let newSchedhule in getArrs) {
    // same as buisness.employees[0]
    getArrs[newSchedhule].daysOfWeekWorking.push('Saturday', 'Sunday');
    console.log(getArrs[newSchedhule].daysOfWeekWorking);
  }
}
addWeekends();

// API Call function/step 2

function addEmployees() {
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/users`, true);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const titles = ['Developer', 'Chef', 'Hookah Packer', 'Hacker'];
    // fullTime or not array
    const fullTime = [true, false];
    for (let i = 0; i <= 4; i++) {
      const randomPos = Math.floor(Math.random() * titles.length);
      // saturday and sunday work days

      const newManagmentDays = ['Saturday', 'Sunday'];

      // get random days from the buisness object
      const randomPosDays = Math.floor(
        Math.random() * buisness.daysOpen.length
      );

      // fulltime randomized
      const randomPosfullT = Math.floor(Math.random() * fullTime.length);

      xhr.response.forEach((res) => {
        const newEmps = (buisness.employees[res.name] = buisness.employees[i]);
        buisness.employees[res.name] = {
          position: titles[randomPos],
          daysOfWeekWorking: [buisness.daysOpen[randomPosDays]],
          isWorkingFullTime: fullTime[randomPosfullT],
        };

        //  total number of new employees

        //  buisness.totalEmployees = Object.keys(res).length
      });

      function deleteEmployee(employeeName) {
        for (let i in employeeName) {
          delete employeeName[i];
          return buisness.employees;
        }
      }
      console.log(deleteEmployee(buisness.employees));
    }
    // DOMCONTENTLOADED function/window

    // console.log(buisness.employees)
  });

  addEventListener('DOMContentLoaded', () => {
    const weekends = ['Saturday', 'Sunday'];

    const getArrs = buisness.employees;

    for (let newSchedhule in getArrs) {
      // same as buisness.employees[0]
      console.log(getArrs[newSchedhule]);
    }
  });

  xhr.send();
}

addEmployees();
