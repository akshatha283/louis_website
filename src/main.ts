import { bootstrapApplication } from '@angular/platform-browser';
// import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()] // Add this line
})
  .catch((err) => console.error(err));
