import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SignalComponent } from './signal/signal.component';
import { ServiceComponenetComponent } from './service-componenet/service-componenet.component';

export const routes: Routes = [
    { path: '', title:'Home', component: HomeComponent },
    { path: 'about',title:'About', component: AboutComponent },
    { path: 'contact', title:'Contact', component: ContactComponent },
    { path: 'account', title:'Account', loadComponent: () => import('./account/account.component').then((c) => c.AccountComponent)},
    { path: 'tdf', title:'Template Driven Form', component: TemplateFormComponent },
    { path: 'rf', title:'Reactive Form', component: ReactiveFormComponent },
    { path: 'signal', component: SignalComponent },
    { path: 'sc', component: ServiceComponenetComponent },
    { path: 'account/:id', component: AccountDetailComponent },

    // { path: '', redirectTo:'home', pathMatch:'full'},
    { path: '**', title:'Page Not Found', component: PageNotFoundComponent }

];