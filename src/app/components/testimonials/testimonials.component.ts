import { AfterViewInit,Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-testimonials',
  imports: [],
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
}
