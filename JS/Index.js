



let Menupilihan= document.querySelector(".Pilihan");
let hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active")
    Menupilihan.classList.toggle("Menupilihan");
   

});
const hilang=document.getElementById("about")
hilang.addEventListener("click", function ( ) {

    hamburger.setAttribute(this.classList.remove)
    
})

// Dalam rangka untuk membuat lapoeran maka diperlukan infrmasi akuntasi keuangan dalam rangka mempertanggung jawabkan 
// untuk pihak luar akuntansi management 
// Pure provit organisasion,
// Non provit organiassion dengan maksud melayani masyarakat agar masyarakat terpenuhi kebutuhannya 

const ketikan = new Typed(".mengetik", {
    strings: ["Frontend Website Developer", "Ui/UX Designer",  "Public Administration Student"],
    typeSpeed: 130, 
    backSpeed: 100,  
    startDelay: 1000, 
    backDelay: 3000,  
    loop: true, 
});
const Skills =document.getElementById("Skills");
Skills.addEventListener("Click", function () {
        const Skills2=document.getElementById("Skills2")
    Skills.scrollIntoView(Skills2.style.transition("2s"));
    
})

const about =document.getElementById("about");
about.addEventListener("Click", function () {
        const About=document.getElementById("About")
    about.scrollIntoView(About);
    
})

const send = require('gmail-send')({
    user: 'muhammadilhamalmubarok5@gmail.com',
    pass: 'ILHAM090408',
    to: 'ppushmy@gmail.com',
    subject: 'Test Subject',
    html: '<p>Ini adalah <strong>konten HTML</strong> dari email.</p>',
  });
  
  send({}, function (error, result, fullResult) {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', result);
    }
  });
  