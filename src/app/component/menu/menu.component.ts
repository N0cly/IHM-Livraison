import { Component } from '@angular/core';
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

  buttonCliked = false;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    this.buttonCliked = !this.buttonCliked;
  }
}
