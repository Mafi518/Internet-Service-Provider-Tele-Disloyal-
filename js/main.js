$(document).ready(function () {
    $('.offer-list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

    function validateId() {
        if(this.value.trim() === '') {
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Данное поле не может быть пустым'
            return 1
        } else if (this.value.trim().length !== 11) {
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Данное поле должно состоять из 11 символов'
            return 1
        } else if (!this.value.trim().match(/^[0-9]+$/)){
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Данное поле может содержать только цифры'
            return 1
        } else {
            this.style.borderBottom = '2px solid green'
            this.previousElementSibling.innerHTML = ''
            return 2
        }
    }

    function validatePassword() {
        if(this.value.trim() === '') {
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Данное поле не может быть пустым'
            return 1
            console
        } else if (this.value.trim().length !== 11) {
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Данное поле должно состоять из 11 символов'
            return 1
        } else {
            this.style.borderBottom = '2px solid green'
            this.previousElementSibling.innerHTML = ''
            return 2
        }
    }
    
    function validatePhone() {
        if(this.value.trim() === '') {
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Данное поле не может быть пустым'
            return false
        } else if (this.value.trim().length !== 11) {
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Телефон состоит из 11 цифр, включая 7'
            return false
        } else if (!this.value.trim().match(/^[0-9]+$/)){
            this.style.borderBottom = '2px solid tomato'
            this.previousElementSibling.innerHTML = 'Телефон состоит только из цифр'
            return false
        } else {
            this.style.borderBottom = '2px solid green'
            this.previousElementSibling.innerHTML = ''
        }
    }

    document.querySelector('#autorization').addEventListener('click', function () {

        let formBG = document.createElement('div')
        formBG.className = 'form-bg'
        document.body.insertAdjacentElement('afterbegin', formBG)
    
        form = document.createElement('form')
        form.className = 'autorization-form'
        form.innerHTML = '<div class="title">Личный кабинет</div><img src="img/form-top-bg.svg" alt=""><span class="error-text"></span><input type="text" placeholder="Идентификатор" name="Идентификатор" id="ID"><span class="error-text"></span><input type="password" placeholder="Пароль" name="Пароль" id="password"><a class="forget" href="#">Забыли пароль?</a><a class="autorization-button" href="personal-room.html">Авторизоваться</a><a href="privacy-policy.html">Политика конфиденциальности</a>'
        document.body.appendChild(form)

        let idField = document.querySelector('#ID').addEventListener('focusout', validateId)

        let passField = document.querySelector('#password').addEventListener('focusout', validatePassword)
    
        document.querySelector('.forget').onclick = function () {
            let forgetForm = document.createElement('form')
            forgetForm.className = 'forget-form'
            forgetForm.innerHTML = '<div class="title">Забыли пароль?</div><img src="img/form-top-bg.svg" alt=""><span class="error-text"></span><input type="text" placeholder="Идентификатор" name="Идентификатор" id="forgetID"><span class="error-text"></span><input type="text" placeholder="Номер телефона" name="Телефон" id="phone"><button class="forget-button">Восстановить</button><a href="privacy-policy.html">Политика конфиденциальности</a>' 
            document.body.appendChild(forgetForm)
            form.classList.toggle('hidden')
    
            formBG.addEventListener('click', function (){
                document.body.removeChild(forgetForm)
            })

            let forgetIdField = document.querySelector('#forgetID').addEventListener('focusout', validateId)

            let phoneField = document.querySelector('#phone').addEventListener('focusout', validatePhone)
    
            document.querySelector('.forget-button').onclick = function () {
                let forgetSuccessfully = document.createElement('div')
                forgetSuccessfully.className = 'forget-successfully'
                forgetSuccessfully.innerHTML = '<div class="title">Проверьте свой номер телефона</div><span>окно закроется автоматически через 5 секунд</span>'
                document.body.appendChild(forgetSuccessfully)
                forgetForm.classList.toggle('hidden')
    
                setTimeout(function() {
                    document.body.removeChild(forgetSuccessfully)
                    document.body.removeChild(form)
                    document.body.removeChild(forgetForm)
                    document.body.removeChild(formBG)
                }, 5000);
            }
        }
    
        formBG.addEventListener('click', function (){
            document.body.removeChild(formBG)
            document.body.removeChild(form)
        })
    })

// function mouseDownAnimate(){
//     let mouseDown = document.querySelector('.mouse-down')
//     setInterval(() => {
//         mouseDown.style.bottom = '30px'
//     }, 600);
//     setInterval(() => {
//         mouseDown.style.bottom = '0px'
//     }, 1200);
// }

// mouseDownAnimate()
