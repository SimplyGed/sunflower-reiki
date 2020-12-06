import { Component } from '@angular/core';

@Component({
  selector: 'srb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
}
