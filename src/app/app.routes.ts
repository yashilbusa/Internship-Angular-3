import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';

export const routes: Routes = [
    { path: 'home', title:'Home', component: HomeComponent },
    { path: 'about',title:'About', component: AboutComponent },
    { path: 'contact', title:'Contact', component: ContactComponent },
    { path: 'account', title:'Account', component: AccountComponent },
    { path: 'account/:id', component: AccountDetailComponent },
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: '**', title:'Page Not Found', component: PageNotFoundComponent }
];