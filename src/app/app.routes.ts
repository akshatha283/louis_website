import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HampersComponent } from './views/hampers/hampers.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    {path:'hampers' ,   component: HampersComponent}
];
