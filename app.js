// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click',function(){ // anonimous Callback Function within Event listener peramiters
   heading.classList.add('red');
});
