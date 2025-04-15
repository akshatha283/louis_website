import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { TurstedCompaniesComponent } from '../../components/tursted-companies/tursted-companies.component';
import { OurProcessComponent } from '../../components/our-process/our-process.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsHomePageComponent } from '../../components/products-home-page/products-home-page.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';


@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent,CarouselComponent, TurstedCompaniesComponent, OurProcessComponent, WhyUsComponent, FooterComponent, ProductsHomePageComponent, TestimonialsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
