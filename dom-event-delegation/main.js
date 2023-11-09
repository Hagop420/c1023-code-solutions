const taskEvent = document.querySelector('.task-list');

taskEvent.addEventListener('click', (e) => {
  console.log('event.target:', e.target);
  console.log(`e.target.tagName: ${e.target.tagName}`);

  const btnAll = document.querySelectorAll('button');
  btnAll.forEach((btn) => {
    const cl = e.target.closest('.task-list-item');
    if (e.target === btn) {
      btn.previousElementSibling.parentNode.remove();
      // btn.remove()
      console.log('Closest item:', cl);
    }
  });
});
