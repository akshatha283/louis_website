import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showSubNavApparel = false;
  showSubNavGallery = false;
  showSubNavTech = false;
  showSubNavOffice = false ;
  showSubNavBags = false;
  showSubNavHomeGarden = false;
  showSubNavWellness = false;
  showSubNavDrinkware = false ;
}
