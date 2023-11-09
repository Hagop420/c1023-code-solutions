const taskEvent = document.querySelector('.task-list');

taskEvent.addEventListener('click', (e) => {
  // console.log('event.target:', e.target);
  console.log(`e.target.tagName: ${e.target.tagName}`);

  // console.log(e.target.nodeName)

  if (e.target.tagName === 'BUTTON') {
    const cl = e.target.closest('.task-list-item');
    cl.remove();
  }
});
// git comment for pushing purposes
