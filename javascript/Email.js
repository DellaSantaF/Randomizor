//Email form management

const serviceID = "service_jjxb9pf";
const templateID = "template_schlong";
const pubKey = "l1pn8-R9Sd7NG98DM";

$ = (id) => {return document.getElementById(id)};

class Email {
    constructor() {

        this.name = $('name');
        this.url = $('url');
        this.form = $('form');

        emailjs.init(pubKey);

        this.form.addEventListener('submit', (event)=>{event.preventDefault(); this.sendMail();});
    }

    sendMail() {

        //emailjs.sendForm(serviceID, templateID, this.form);

        alert('Successfully submitted');

        location.href = './index.html';

    }
}

new Email();