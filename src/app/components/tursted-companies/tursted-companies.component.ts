import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tursted-companies',

  templateUrl: './tursted-companies.component.html',
  styleUrl: './tursted-companies.component.scss',
  imports: [],
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
    "\black-amazon-logo-removebg.png",
    "\cisco-2-logo-black-and-white.png",
    "\black-amazon-logo-removebg.png",
  ];

}
