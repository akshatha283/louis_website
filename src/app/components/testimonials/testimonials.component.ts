import { CommonModule } from '@angular/common';
import { AfterViewInit,Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  // ngAfterViewInit() {
  //   const el = document.querySelector('#carouselTest');
  //   if (el) {
  //     new bootstrap.Carousel(el);
  //   }
  // }

  testimonials = [
    { image: '\vintage.png', text: '“Absolutely fantastic experience! We had a last-minute corporate event, and this team came through with beautiful, thoughtful gifts delivered on time”', name: 'Sunitha', title: 'Admin, Cisco' },
    { image: '\brown.png', text: '“Their pricing is unbeatable for the quality they offer. As a startup, budget matters—and they helped us impress our partners without breaking the bank!”', name: 'Rakesh', title: 'Admin, Elevate' },
    { image: '\vintage.png', text: '“From first contact to final delivery, it was smooth and efficient. The team genuinely cares and goes the extra mile to get it right. Love supporting small businesses that deliver big!”', name: 'Cara', title: 'Admin, Intel' },
    { image: '\vintage.png', text: '“We have worked with many gifting vendors, but none match the personal touch and professionalism of this women-led business. Every gift feels custom-made, and our clients love them.”', name: 'Latha', title: 'Admin,Google' },
    { image: '\vintage.png', text: '“When our usual supplier dropped the ball, this company stepped up. They handled our urgent order with grace and got everything to us in under 48 hours. Lifesavers!”', name: 'Eve', title: 'Admin, AWS' },
    { image: '\brown.png', text: '“What I love most is the creativity. Each gift was unique, elegant, and perfectly branded. Our employees and clients were delighted. Will order again!”', name: 'Dave', title: 'Admin, Databricks' },
    { image: '\brown.png', text: '“Professional, punctual, and personal—that’s how I’d describe them. It is clear that they value relationships, not just transactions. Great experience all around.”', name: 'Dave', title: 'Admin, MRF' },
    { image: '\brown.png', text: '“As a corporate admin, I’ve dealt with many vendors, but few are as responsive and flexible. They accommodated our custom requests with no fuss. Highly reliable.”', name: 'Dave', title: 'Admin, Shell' },
    { image: '\brown.png', text: '“Empowering to work with a women-owned business that’s setting new standards in corporate gifting. The team is talented, attentive, and truly passionate about what they do.”', name: 'Dave', title: 'Admin,Shuco International' },
  ];
  
  groupedTestimonials: any[][] = [];
  
  ngOnInit() {
    this.groupTestimonials();
  }
  
  groupTestimonials() {
    const chunkSize = window.innerWidth < 768 ? 1 : 3;
    for (let i = 0; i < this.testimonials.length; i += chunkSize) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + chunkSize));
    }
  }
  
}
