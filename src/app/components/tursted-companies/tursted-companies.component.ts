import { Component } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tursted-companies',

  templateUrl: './tursted-companies.component.html',
  styleUrl: './tursted-companies.component.scss',
  imports: [CommonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [  // When new image enters
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class TurstedCompaniesComponent {

  images = [
    "\cisco-2-logo-black-and-white.png",
    "\google-logo.png",
    "\aws-logo.png",
    "\databricks-logo.png",
    "\intel-logo.png",
    "\shell-logo.png",
    "\MRF-logo.png",
    "\meesho-logo.png",
    "\schuco-logo.png",
    "\WeWork-logo.png"
    // "\black-amazon-logo-removebg.png",
    // "\cisco-2-logo-black-and-white.png",
    // "\black-amazon-logo-removebg.png"
  ];

}
