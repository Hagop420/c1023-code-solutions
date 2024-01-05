const handleClick = (e) => {
  console.log('button clicked!');
  console.log('event:', e);
  console.log('event.target:', e.target);
};

document.querySelector('.click-button').addEventListener('click', handleClick);

const handleMouseover = (e) => {
  console.log('button hovered!');
  console.log('event:', e);
  console.log('event.target:', e.target);

  // const over =
};

document
  .querySelector('.hover-button')
  .addEventListener('mouseover', handleMouseover);

const handleDoubleClick = (e) => {
  console.log('button double-clicked');
  console.log('event:', e);
  console.log('event.target:', e.target);

  // const over =
};

document
  .querySelector('.double-click-button')
  .addEventListener('dblclick', handleDoubleClick);
