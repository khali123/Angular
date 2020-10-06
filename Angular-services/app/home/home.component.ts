import { Component, OnInit } from '@angular/core';
import {ContactserviceService} from "../../services/contactservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todaydate;
  constructor(private myservice: ContactserviceService) {}


  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
  }

}
