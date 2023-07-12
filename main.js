const myForm = document.querySelector('#my-form');


const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
   //getting name input value
    var nameInput = document.querySelector('#name');
    const name=nameInput.value;
   // console.log(name);
    //getting email input value
    const emailInput = document.querySelector('#email');
    const email=emailInput.value;
    //console.log(email);
    //storing in local storage
    // localStorage.setItem(new Date().getTime(),name+","+email);

    localStorage.setItem(email,name +","+" "+email);//email is variable so 
    // eamil is key here
    // localStorage.setItem('email',email);
    // console.log(localStorage.getItem('munna'));
    }