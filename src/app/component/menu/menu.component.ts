import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Input() buttonCliked = false;
  @Input() buttonClikedMenu = false;
  @Input() buttonClikedPlats = false;


  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    this.buttonCliked = !this.buttonCliked;
  }

  buttonClickMenu() {
    this.buttonClikedMenu = !this.buttonClikedMenu;

  }

  buttonClickPlats() {
    this.buttonClikedPlats = !this.buttonClikedPlats;

  }
}
