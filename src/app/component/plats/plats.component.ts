import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PlatService} from "../../services/plat.service";
import {PlatComponent} from "./plat/plat.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-plats',
  standalone: true,
  imports: [
    HttpClientModule,
    PlatComponent,
    NgForOf
  ],
  providers: [PlatService],
  templateUrl: './plats.component.html',
  styleUrl: './plats.component.css'
})
export class PlatsComponent implements OnInit {

  @Output() plats: any;
  constructor(private http:HttpClient, private platService: PlatService) { }

  ngOnInit(): void {
    this.platService.getAllPlats().subscribe((data) => {
      console.log(data);
      this.plats = data;
    });

  }

}
