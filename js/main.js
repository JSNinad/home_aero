// Trailer video

var vid = document.querySelector('iframe');
const trailer = document.querySelector('.trailer');


function toggleVideo(){
    if(!(trailer.classList.contains('active')))
    {
        vid.src="https://www.youtube.com/embed/3s9FAEonO2Y";
        trailer.classList.add('active');
    }
    else
    {
        vid.src="";
        trailer.classList.remove('active');
    }  
}

//Down Arrow

const arrow = document.getElementById("arrow");
arrow.style.visibility ='hidden';

setTimeout(() => {
    arrow.style.visibility = 'visible';
}, 10000);


//Email Capture

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHbJHvo4VXszJMmjv1Ur1dSHu2xtX5DSt8kFOhoPLKYgcIQrjcy9IGDSI5OmAXcgBQ/exec'
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
