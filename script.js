let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// function emailSend(){
//     let Username = document.getElementById('name').value;
//     let phone = document.getElementById('phone').value;
//     let email = document.getElementById('email').value;
//     let body = document.getElementById('body').value;
//     let emailsubject = document.getElementById('emailsubject').value;

//     let message = body+
//     "<br>Name"+Username+
//     "<br> Phone" + phone+
//     "<br> Email" + email;

// Email.send({
//     Host : "smtp.mailendo.com",
//     Username : "chaudharydevesh704@gmail.com",
//     Password : "C0A1494B5E5BFAA700151B3C2370BCB1CB8D",
//     To : 'chaudharydevesh704@gmail.com',
//     From : email,
//     Subject : emailsubject,
//     Body : "message"
// }).then(
//   message => alert(message)
// );
// }