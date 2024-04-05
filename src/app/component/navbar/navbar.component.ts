import { Component } from '@angular/core';
import {CompteComponent} from "../compte/compte.component";
import {MenuComponent} from "../menu/menu.component";
import {PlatsComponent} from "../plats/plats.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CompteComponent,
    MenuComponent,
    PlatsComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
