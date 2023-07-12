const myForm = document.querySelector('#my-form');
//const input =myForm.getElementsByTagName(input);
//const msg = document.querySelector('.msg');
//const userList = document.querySelector('#users');
var nameInput = document.querySelector('#name');
const numberInput=document.querySelector('#number');
const emailInput = document.querySelector('#email');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    const name = nameInput.value;
    
    const number=numberInput.value;
    
    const email = emailInput.value;
    //creating object
    const obj={
        name,
        number,
        email
    };
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showInput(obj);
    nameInput.value='';
    numberInput.value='';
    emailInput.value='';
}
function showInput(obj) {
    const parent = document.getElementById('newlist');
    const li = document.createElement('li');
    li.style.fontWeight='bold';
    const show = document.createTextNode('Name : '+obj.name + ', Email : '+obj.email +', Phone number : '+ obj.number);
    li.appendChild(show);

    const btn=document.createElement('button');
    btn.style.margin='0.2rem';
    btn.style.padding='0.2rem';
    btn.style.borderRadius='4px';
    btn.appendChild(document.createTextNode('Delete'));

    const editbtn=document.createElement('button');
    editbtn.style.margin='o.2rem';
    editbtn.style.padding='0.2rem';
    editbtn.style.borderRadius='4px';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(btn);
    li.appendChild(editbtn);
    parent.appendChild(li);

    btn.addEventListener('click',removeItem);
    function removeItem(){
       parent.removeChild(li);
       localStorage.removeItem(obj.email);
    }
    //edit button funtion
    editbtn.addEventListener('click',editFun);
    function editFun(){

    nameInput.value=obj.name;
    numberInput.value=obj.number;
    emailInput.value=obj.email;
    removeItem();

    }
}