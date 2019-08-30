    let addBtn = document.querySelector('input[type=button]');
    let inpWord = document.querySelector('input[type=text]');
    let textarea = document.querySelector('textarea');
    let words = document.querySelector('.words');
    let censor = document.querySelector('button');
    console.log(addBtn,inpWord,textarea,words,censor);

    let pT = document.createElement('p');
    words.appendChild(pT);

    addBtn.addEventListener('click', function () {
        pT.innerHTML += inpWord.value + ' ';
        console.log(inpWord.value)
    })

    censor.addEventListener('click', function () {
        // let arr = pT.innerHTML.split(' ');
        //
        // for (let i=0; i<arr.length; i++){
        //     let bool = true;
        //     while (bool){
        //         let a = '';
        //         for (let j = 0; j < arr[i].length; j++) {
        //             a += '*';
        //         }
        //         textarea.value = textarea.value.replace(arr[i], a);
        //
        //         if (textarea.value.endsWith(arr[i])==false) {
        //             bool = false;
        //         }
        //     }
        //
        // }




        let arr = pT.innerHTML.split(' ');
        let arrTextarea = textarea.value.split(' ');
        for (let i=0; i<arr.length; i++){
            for (let j=0; j<arrTextarea.length; j++){
                arrTextarea[j] = arrTextarea[j].toLowerCase();
                arr[i] = arr[i].toLowerCase();

                if (arrTextarea[j] == arr[i]){
                    let a = '';
                    for (let k=0; k<arrTextarea[j].length; k++){
                        a += '*';
                    }
                    arrTextarea[j] = a;
                }
            }
        }
        textarea.value = arrTextarea.join(' ');
    })
