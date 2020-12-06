import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SrbRoutingModule } from './srb-routing.module';
import { SrbComponent } from './srb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    SrbComponent,
    ServicesComponent,
    HomeComponent,
    GiftCardsComponent,
    SpecialOffersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SrbRoutingModule
  ],
  providers: [],
  bootstrap: [SrbComponent]
})
export class SrbModule { }
