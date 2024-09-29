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


const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "priyanshukotiya4555@gmail.com",
        Password: "46A3735819FDBE13511ED2504921196F8190",
        To: 'priyanshukotiya4555@gmail.com',
        From: "priyanshukotiya4555@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    let allValid = true;
    let errorMessage = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    for (const item of items) {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            allValid = false;

            // Customize error message based on the field
            switch (item.id) {
                case "name":
                    errorMessage += "Full Name can't be blank.\n";
                    break;
                case "email":
                    errorMessage += "Email Address can't be blank.\n";
                    break;
                case "phone":
                    errorMessage += "Phone Number can't be blank.\n";
                    break;
                case "subject":
                    errorMessage += "Subject can't be blank.\n";
                    break;
                case "message":
                    errorMessage += "Message can't be blank.\n";
                    break;
            }
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

    // Check email format
    if (email.value.trim() !== "" && !emailPattern.test(email.value.trim())) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        allValid = false;
        errorMessage += "Please enter a valid email address.\n";
    } else if (email.value.trim() !== "") {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

    // Check phone format
    if (phone.value.trim() !== "" && !phonePattern.test(phone.value.trim())) {
        phone.classList.add("error");
        phone.parentElement.classList.add("error");
        allValid = false;
        errorMessage += "Please enter a valid phone number\n";
    } else if (phone.value.trim() !== "") {
        phone.classList.remove("error");
        phone.parentElement.classList.remove("error");
    }

    if (!allValid) {
        Swal.fire({
            title: "Error!",
            text: errorMessage,
            icon: "error"
        });
    }

    return allValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkInputs()) {
        sendEmail();
    }
});
