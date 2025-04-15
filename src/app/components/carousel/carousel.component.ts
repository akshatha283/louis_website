import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-carousel',
  imports: [FormsModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  formData = {
    name: '',
    email: '',
    priceRange:'',
    quantity:'',
    message: '',
    options:''
  };

  sendEmail(): void {
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    };
    emailjs.send('service_fa20ueq', 'template_0eh9xiu', this.formData, 'NKt1aR0rAaseZCvlX')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send your message. Please try again later.');
      });
  }
}
