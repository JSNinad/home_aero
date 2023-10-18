

//Down Arrow

const arrow = document.getElementById("arrow");
arrow.style.visibility ='hidden';

setTimeout(() => {
    arrow.style.visibility = 'visible';
}, 10000);


//Email Capture

const scriptURL = 'https://script.google.com/macros/s/AKfycbwLbunOS5RwEjG5sEk5oOK4JZCvjJtaUj1DacrsAbuZQ2zPlYqKsA6JG-8ZA1wOvlYdbg/exechttps://script.google.com/macros/s/AKfycbyOsMkGK2yqpYpYK5t1GN8-GWH1rA5si_pH39bEB6rhZOydKnRQF0OoBcWQyuSeBErY/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

//Preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

const eventDetails = document.getElementById('eventDetails');
const card = document.querySelector('.card');

// Toggle the "show" class on the event details
card.addEventListener('mouseenter', () => {
  eventDetails.classList.add('show');
});

card.addEventListener('mouseleave', () => {
  eventDetails.classList.remove('show');
});


