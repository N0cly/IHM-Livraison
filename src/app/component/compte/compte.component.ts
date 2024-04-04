import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {

  buttonAccount = false;

  constructor() { }

  ngOnInit(): void {
  }

  accountClick() {
    this.buttonAccount = !this.buttonAccount;
  }
}
