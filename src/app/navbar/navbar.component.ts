import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
      isloggin = false;

      logout () {
          this.isloggin = false


      } ;
      login () {
          this.isloggin = true


      };


}
