import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TurstedCompaniesComponent } from './components/tursted-companies/tursted-companies.component';
import { OurProcessComponent } from './components/our-process/our-process.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet,CarouselComponent, TurstedCompaniesComponent, OurProcessComponent, WhyUsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'louis-website';
}
