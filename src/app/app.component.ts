import {Component, OnChanges, Output, SimpleChanges} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {MenuComponent} from "./component/menu/menu.component";
import {CompteComponent} from "./component/compte/compte.component";
import {PlatsComponent} from "./component/plats/plats.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MenuComponent, CompteComponent, PlatsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IHM-Livraison';
  @Output() menu!: boolean;
  @Output() plats: boolean = true;

  constructor() {
  }





}
