document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navModal = document.querySelector('.nav-modal');
    const navItems = document.querySelectorAll('.nav-items div a');
  
    menuToggle.addEventListener('click', function() {
      navModal.classList.toggle('active');
      menuToggle.textContent = navModal.classList.contains('active') ? '✕' : '☰';
    });
  
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navModal.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  });



var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "Programmer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
  document.addEventListener("DOMContentLoaded", () => {
const skillIcons = document.querySelectorAll('.skill-icon');

skillIcons.forEach(icon => {
    const progress = parseInt(icon.getAttribute('data-progress'));
    const circle = icon.querySelector('.progress');
    const percentElement = icon.querySelector('.percent');
    const circumference = 2 * Math.PI * 45; 

    let currentProgress = 0;

    icon.addEventListener('mouseenter', () => {
        let currentOffset = circumference;
        circle.style.strokeDashoffset = currentOffset;
        percentElement.textContent = `0%`; 

        let interval = setInterval(() => {
            if (currentProgress < progress) {
                currentProgress++;
                let offset = circumference - (currentProgress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
                percentElement.textContent = `${currentProgress}%`;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });

    icon.addEventListener('mouseleave', () => {
        currentProgress = 0;
        percentElement.textContent = `0%`;
        circle.style.strokeDashoffset = circumference;
    });
});
});


const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rohillapriyanshu18@gmail.com",
        Password: "6620F61858EB038EF0F1286F450852B665A2",
        To: 'rohillapriyanshu18@gmail.com',
        From: "rohillapriyanshu18@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    );
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }else{
            errorTxtEmail.innerText = "Email Adress can't be blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
        

function checkInputs(){
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
             checkEmail();
        });

        item.addEventListener("keyup",()=>{
            if(item.value!=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();
    }
})