/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

console.log(truncate(8, 'All Code All Day'));
