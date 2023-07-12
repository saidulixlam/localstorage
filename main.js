const myForm = document.querySelector('#my-form');
//const input =myForm.getElementsByTagName(input);
//const msg = document.querySelector('.msg');
//const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    var nameInput = document.querySelector('#name');
    const name = nameInput.value;
    const numberInput=document.querySelector('#number');
    const number=numberInput.value;
    const emailInput = document.querySelector('#email');
    const email = emailInput.value;
    //creating object
    const obj={
        name,
        number,
        email
    };
    
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showInput(obj);
}

function showInput(obj) {
    const parent = document.getElementById('newlist');
    const li = document.createElement('li');
    li.style.fontWeight='bold';
    const show = document.createTextNode('Name : '+obj.name + ', Email : '+obj.email +', Phone number : '+ obj.number);
    li.appendChild(show);
    const btn=document.createElement('button');
    btn.style.margin='1rem';
    btn.style.padding='0.5rem';
    btn.style.borderRadius='4px';
    btn.appendChild(document.createTextNode('Delete'))
    li.appendChild(btn);
    parent.appendChild(li);

    
   
    btn.addEventListener('click',removeItem);
    function removeItem(){
       parent.removeChild(li);
       localStorage.removeItem(obj.email);
    }
}