import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'gift-cards', component: GiftCardsComponent },
    { path: 'special-offers', component: SpecialOffersComponent },
    { path: 'contact', component: ContactComponent },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SrbRoutingModule { }
