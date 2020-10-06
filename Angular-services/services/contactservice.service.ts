import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  varglobalshared="projet paiment";
  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
