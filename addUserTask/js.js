
let f1 = document.forms['f1'];
let tbody = document.querySelector('tbody');
let thead = document.querySelector('thead>tr');
let b = 0;
let empty = [];
let alert = document.querySelector('.alert');
f1.btn.addEventListener('click', function () {
    check(f1);
    if(empty[0]==true&&empty[1]==true&&empty[2]==true){
        empty[0] = false;
        empty[1] = false;
        empty[2] = false;
        let trTag = document.createElement('tr');
        let tdTag = document.createElement('td');
        let thTag = document.createElement('th');
        thTag.innerText = '*';
        thTag.setAttribute('scope', 'row')
        trTag.appendChild(thTag);

        tdTag = document.createElement('td');
        tdTag.innerText = f1.login.value;
        trTag.appendChild(tdTag);

        tdTag = document.createElement('td');
        tdTag.innerText = f1.password.value;
        trTag.appendChild(tdTag);

        tdTag = document.createElement('td');
        tdTag.innerText = f1.email.value;
        trTag.appendChild(tdTag);

        tdTag = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.setAttribute('type', 'button')
        editBtn.setAttribute('class', 'btn btn-warning');
        editBtn.innerText = 'edit';
        tdTag.appendChild(editBtn);
        trTag.appendChild(tdTag);

        tdTag = document.createElement('td');
        let delBtn = document.createElement('button');
        delBtn.setAttribute('type', 'button')
        delBtn.setAttribute('class', 'btn btn-danger');
        delBtn.innerText = 'delete';
        tdTag.appendChild(delBtn);
        trTag.appendChild(tdTag);

        tbody.appendChild(trTag);

        f1.login.value = '';
        f1.password.value = '';
        f1.email.value = '';

        delBtn.addEventListener('click', function () {
            tdTag.parentNode.remove();
            countElements();
            value();
        })

        editBtn.addEventListener('click',function () {
            value();
            b = editBtn.value;
            f1.login.value = tbody.children[b].children[1].innerText;
            f1.password.value = tbody.children[b].children[2].innerText;
            f1.email.value = tbody.children[b].children[3].innerText;
            f1.btn.style.display = 'none';
            f1.btnEdit.style.display = 'block';
        })
    }
    countElements();
    value();
})
f1.btnEdit.addEventListener('click', function () {
    check(f1);
    if (empty[0]==true&&empty[1]==true&&empty[2]==true){
        empty[0] = false;
        empty[1] = false;
        empty[2] = false;
        tbody.children[b].children[1].innerText = f1.login.value;
        tbody.children[b].children[2].innerText = f1.password.value;
        tbody.children[b].children[3].innerText  = f1.email.value;
        f1.btn.style.display = 'block';
        f1.btnEdit.style.display = 'none';
        f1.reset();
    } else {

    }
})
function value() {
    for (let i=0; i<tbody.children.length; i++){
        tbody.children[i].children[4].children[0].value = i;
        console.log(tbody.children[i].children[4].children[0]);
    }
}
function countElements() {
    if (tbody.children.length>0){
        for (let i = 0; i < tbody.children.length; i++) {
            tbody.children[i].children[0].innerText = i + 1;
        }
    }
}
function check(x) {
    for (let i=0; i<x.children.length-2; i++){
        if(x.children[i].children[1].value != ''){
            empty[i] = true;
        } else {
            x.children[i].children[1].style.borderColor = '#f5c6cb';
            x.children[i].children[1].style.backgroundColor = '#f8d7da';
            x.children[i].children[1].style.transition = 'all 0.5s';
            alert.style.transition = 'all 2s';
            alert.style.display = 'block';
            empty[0] = false;
            empty[1] = false;
            empty[2] = false;

            let interval =  setTimeout(function () {
                console.log('1');
                x.children[i].children[1].style.borderColor = '';
                x.children[i].children[1].style.backgroundColor = '';
                alert.style.display = 'none';
            },2000);
        }
        console.log(empty[i]);
    }
}
//
//
//
//
//
//
//
//
//
//
// let users = [];
// let f1 = document.forms['f1'];
// let tbody = document.querySelector('tbody');
// let thead = document.querySelector('thead>tr')
// let a = 0;
// let b = 0;
// f1.btn.addEventListener('click', function () {
//     let newUser = {
//         userName: f1.login.value,
//         userPass: f1.password.value,
//         userEmail: f1.email.value
//     }
//     users.push(newUser);
//     f1.login.value = '';
//     f1.password.value = '';
//     f1.email.value = '';
//     let indexOfElement = users.length-1;
//
//     let trTag = document.createElement('tr');
//     let tdTag = document.createElement('td');
//     let thTag = document.createElement('th');
//     thTag.innerText = '*';
//     thTag.setAttribute('scope', 'row')
//     trTag.appendChild(thTag);
//
//     tdTag = document.createElement('td');
//     tdTag.innerText = newUser.userName;
//     trTag.appendChild(tdTag);
//
//     tdTag = document.createElement('td');
//     tdTag.innerText = newUser.userPass;
//     trTag.appendChild(tdTag);
//
//     tdTag = document.createElement('td');
//     tdTag.innerText = newUser.userEmail;
//     trTag.appendChild(tdTag);
//
//     tdTag = document.createElement('td');
//     let editBtn = document.createElement('button');
//     editBtn.setAttribute('type', 'button')
//     editBtn.setAttribute('class', 'btn btn-warning');
//     editBtn.innerText = 'edit';
//     editBtn.setAttribute('value', a);
//     a++;
//     tdTag.appendChild(editBtn);
//     trTag.appendChild(tdTag);
//
//     tdTag = document.createElement('td');
//     let delBtn = document.createElement('button');
//     delBtn.setAttribute('type', 'button')
//     delBtn.setAttribute('class', 'btn btn-danger');
//     delBtn.innerText = 'delete';
//     tdTag.appendChild(delBtn);
//     trTag.appendChild(tdTag);
//
//     tbody.appendChild(trTag);
//
//     countElements();
//
//     delBtn.addEventListener('click', function () {
//         delete users[indexOfElement];
//         tdTag.parentNode.remove();
//         countElements();
//         value();
//     })
//
//     editBtn.addEventListener('click',function () {
//         value();
//         b = editBtn.value;
//         f1.login.value = users[indexOfElement].userName;
//         f1.password.value = users[indexOfElement].userPass;
//         f1.email.value = users[indexOfElement].userEmail;
//         f1.btn.style.display = 'none';
//         f1.btnEdit.style.display = 'block';
//     })
//     f1.btnEdit.addEventListener('click', function () {
//         users[indexOfElement].userName = f1.login.value;
//         users[indexOfElement].userPass = f1.password.value;
//         users[indexOfElement].userEmail = f1.email.value;
//         f1.btn.style.display = 'block';
//         f1.btnEdit.style.display = 'none';
//         f1.login.value = tbody.children[b].children[1].innerText;
//         f1.password.value = tbody.children[b].children[2].innerText;
//         f1.email.value = tbody.children[b].children[3].innerText;
//         tbody.children[b].children[1].innerText = users[indexOfElement].userName;
//         tbody.children[b].children[2].innerText = users[indexOfElement].userPass;
//         tbody.children[b].children[3].innerText = users[indexOfElement].userEmail;
//         // f1.reset();
//         console.log(users[indexOfElement].userName);
//         console.log(tbody.children[b]);
//     })
//     function value() {
//         for (let i=0; i<tbody.children.length; i++){
//             tbody.children[i].children[4].children[0].value = i;
//             console.log(tbody.children[i].children[4].children[0]);
//         }
//     }
//     value();
// })
//
// function countElements() {
//     if (tbody.children.length>0){
//         for (let i = 0; i < tbody.children.length; i++) {
//             tbody.children[i].children[0].innerText = i + 1;
//         }
//     }
// }
