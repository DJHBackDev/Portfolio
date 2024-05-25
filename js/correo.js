const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ct9dv3r';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Submit';
      alert('Mensaje enviado Correctamente');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});