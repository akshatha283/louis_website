import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  formData = {
    name: '',
    email: '',
    topic: '',
    message: ''
  };

  sendEmail(): void {
  //   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.formData, 'YOUR_USER_ID')
  //     .then((response: EmailJSResponseStatus) => {
  //       console.log('Email sent successfully!', response.status, response.text);
  //       alert('Your message has been sent!');
  //     })
  //     .catch((error) => {
  //       console.error('Failed to send email:', error);
  //       alert('Failed to send your message. Please try again later.');
  //     });
  }
}
