let formData = document.querySelector('.form')
let submitButton = document.querySelector(".button")
let error = document.querySelectorAll('.error-message')
let empty = document.querySelectorAll('.empty-field')
let showpasswordBtn = document.querySelector('.btn')
let firstName , lastName , email , password ; 
let fnTarget,lnTarget,emailTarget,pwdTarget
let fnFlag, lnFlag, eFlag, pwdFlag
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of error){
    errorMessage.classList.add("d-none")
}
for(let emptyField of empty){
    emptyField.classList.add("d-none")
}

formData.addEventListener("keyup", (event)=>{
    event.preventDefault()
    // console.log()
    field = event.target.dataset.key

    switch (field) {
        case "firstName":
            firstName = event.target.value
            fnTarget = event.target
            break;
        case "lastName":
            lastName = event.target.value
            lnTarget = event.target

            break;
        case "email":
            email = event.target.value
            emailTarget = event.target

            break;
        case "password":
            password = event.target.value
            pwdTarget = event.target

            break;
        default:
            firstName = lastName = email = password
            break;
    }
})

submitButton.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log(firstName,lastName,email,password);

    if(firstName){
        empty[0].classList.add("d-none")

        if(!nameRegex.test(firstName)){
            error[0].classList.remove("d-none")
            fnTarget.classList.add('error')
            fnFlag = false
            // console.log('name must containe alphabets');
        }
        else{
            error[0].classList.add("d-none")
            fnTarget.classList.remove('error')
            fnFlag = true


            // console.log('good to go');
        } 
    }
    else{
        empty[0].classList.remove("d-none")
        console.log('please fll the files');
    }

    if(lastName){
        empty[1].classList.remove("d-none")

        if(!nameRegex.test(lastName)){
            error[1].classList.remove("d-none")
            lnTarget.classList.add('error')
            lnFlag = false

            // console.log('name must containe alphabets');
        }
        else{
            error[1].classList.add("d-none")
            lnTarget.classList.remove('error')
            lnFlag = true

            // console.log('good to go');
        } 
    }
    else{
        empty[1].classList.remove("d-none")
        console.log('please fll the files');
    }

    if(email){
        empty[2].classList.add("d-none")

        if(!emailRegex.test(email)){
            error[2].classList.remove("d-none")
            emailTarget.classList.add('error')
            eFlag = false

            // console.log('invalid email');
        }
        else{
            error[2].classList.add("d-none")
            emailTarget.classList.remove('error')
            console.log('good to go');
            eFlag = true

        } 
    }
    else{
        empty[2].classList.remove("d-none")
        console.log('please fll the files');
    }
    if(password){

        empty[3].classList.add("d-none")
        if(!passwordRegex.test(password)){
            error[3].classList.remove("d-none")
            pwdTarget.classList.add('error')
            pwdFlag = false

            // console.log('invalid password');
        }
        else{
            error[3].classList.add("d-none")
            pwdTarget.classList.remove('error')
            pwdFlag = true
            console.log('good to go');
        } 
    }
    else{
        empty[3].classList.remove("d-none")
        console.log('please fll the files');
    }
    if(fnFlag && lnFlag && eFlag && pwdFlag){
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "./success.html"
    }
})

showpasswordBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    if(pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type","password")
    }
    else{
        pwdTarget.setAttribute("type","text")
    }
})