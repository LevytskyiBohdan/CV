let s2 = document.forms['s2'];
let s3 = document.forms['s3'];
let singOut = document.querySelector('.singOut');
let wrapperUser = document.querySelector('.wrapperUser');
let wrapper = document.querySelector('.wrapper');

let querySel = (x) => document.querySelector(x);

s2.checkbox.addEventListener('click', function () {
    if(s2.checkbox.checked == true){
        s3.button.disabled = false;
        s3.button.style.backgroundColor = '#28a844';
    } else {
        s3.button.disabled = true;
        s3.button.style.backgroundColor = '#71c483';
    }
})





s3.button.addEventListener('click', function () {
    console.log(s2.sex.value);
    wrapperUser.style.display = 'block';
    wrapper.style.display = 'none';
    querySel('.name').innerText = s2.fn.value + ' ' + s2.ln.value;
    querySel('.email').innerText = s2.em.value
    querySel('.position').innerText = s2.position.value;
    if(s2.sex.value=='man'){
        querySel('img').setAttribute('src', 'images/person-male.png');
    } else if (s2.sex.value=='woman'){
        querySel('img').setAttribute('src', 'images/profile-clipart-profile-icon-728502-3571937.png');
    }


})
singOut.addEventListener('click', function () {
    wrapperUser.style.display = 'none';
    wrapper.style.display = 'block';
    s2.fn.value = '';
    s2.ln.value = '';
    s2.position.value = 'Chose...';
    for (let i=0; i<s2.sex.length; i++){
        s2.sex[i].checked = false;
    }
    s2.checkbox.checked = false;
})