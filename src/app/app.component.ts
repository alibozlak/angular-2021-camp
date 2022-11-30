import { Component } from '@angular/core';

@Component({  // ---> Bu class Kendi HTML'inin datasını yöneten yer demek
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user = "Ali Bozlak";
}
