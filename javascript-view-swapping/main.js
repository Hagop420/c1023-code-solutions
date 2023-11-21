const tabContainer = document.querySelector('.tab-container');
const allTabs = document.querySelectorAll('.tab');
const allView = document.querySelectorAll('.view');

console.log(allTabs);
console.log(allView);

tabContainer.addEventListener('click', (e) => {
  console.log(e.target.matches('.tab'));

  // looping over the tab elements with forEach
  allTabs.forEach((tab) => {
    if (e.target === tab) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }

    // step 2: only if the tab is clicked fire

    // getting the attr of the event.target

    const gettingAttr = e.target.getAttribute('data-view');

    allView.forEach((view) => {
      if (view.getAttribute('data-view') !== gettingAttr) {
        view.classList.add('hidden');
      } else {
        view.classList.remove('hidden');
      }
    });
  });
});
