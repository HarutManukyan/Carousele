let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

btn1.addEventListener('click', next1)

function next1(){
    img1.classList.add('selected--img')
    img2.classList.remove('selected--img')
    img3.classList.remove('selected--img')

    btn1.classList.add('selected--btn')
    btn2.classList.remove('selected--btn')
    btn3.classList.remove('selected--btn')
}

btn2.addEventListener('click', next2)

function next2(){
    img2.classList.add('selected--img')
    img3.classList.remove('selected--img')
    img1.classList.remove('selected--img')

    btn2.classList.add('selected--btn')
    btn3.classList.remove('selected--btn')
    btn1.classList.remove('selected--btn')
}

btn3.addEventListener('click', next3)

function next3(){
    img3.classList.add('selected--img')
    img2.classList.remove('selected--img')
    img1.classList.remove('selected--img')

    btn3.classList.add('selected--btn')
    btn2.classList.remove('selected--btn')
    btn1.classList.remove('selected--btn')
}

let count = 0
setInterval(() => {
    count++    
    if(count == 4){
        count = 0
    }
        switch(count){
            case 1:
                img1.classList.add('selected--img')
                img2.classList.remove('selected--img')
                img3.classList.remove('selected--img')
            
                btn1.classList.add('selected--btn')
                btn2.classList.remove('selected--btn')
                btn3.classList.remove('selected--btn')
                break;
            case 2:
                img2.classList.add('selected--img')
                img3.classList.remove('selected--img')
                img1.classList.remove('selected--img')

                btn2.classList.add('selected--btn')
                btn3.classList.remove('selected--btn')
                btn1.classList.remove('selected--btn')
                break;
            case 3:
                img3.classList.add('selected--img')
                img2.classList.remove('selected--img')
                img1.classList.remove('selected--img')
            
                btn3.classList.add('selected--btn')
                btn2.classList.remove('selected--btn')
                btn1.classList.remove('selected--btn')
                break;  
        }
    
}, 2000);

