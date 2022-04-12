//Email form management

const serviceID = "service_jjxb9pf";
const templateID = "template_schlong";
const pubKey = "l1pn8-R9Sd7NG98DM";

$ = (id) => {return document.getElementById(id)};

class Email {
    constructor() {

        this.name = $('name');
        this.file = $('file');
        this.url = $('url');
        this.form = $('form');

        emailjs.init(pubKey);

        this.form.addEventListener('submit', (event)=>{event.preventDefault(); this.sendMail();});
    }

    sendMail() {

        let sentFile;
        if (this.file.files.length < 1) { //Check if there's a file
            sentFile = {size:0};
        } else {
            sentFile = this.file.files[0];
        }
        


        emailjs.sendForm(serviceID, templateID, this.form);

    }
}

new Email();