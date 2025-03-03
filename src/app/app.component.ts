import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TurstedCompaniesComponent } from './components/tursted-companies/tursted-companies.component';
import { OurProcessComponent } from './components/our-process/our-process.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,CarouselComponent, TurstedCompaniesComponent, OurProcessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'louis-website';
}
