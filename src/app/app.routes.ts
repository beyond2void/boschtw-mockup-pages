import { Routes } from '@angular/router';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'boschtw', component: LoginComponent },
    { path: 'company-info', component: CompanyInfoComponent},
];
