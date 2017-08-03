console.log('Starting App');

setTimeout(() => { 
  console.log('Inside of callback');
}, 2000);

setTimeout(() => { 
  console.log('no time delay');
}, 0);
console.log('Finishing up');
