import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfopageService {

  info: InfoPage = {};
  charged = false;
  itemsPortfolio: any[] = [];
  constructor(private http: HttpClient) {
    this.chargeInfo();
    this.chargeItems();
  }


  private chargeInfo() {
    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPage) => {
     
      this.charged = true;
      this.info = resp;
    })
  }

  private chargeItems(){
    this.http.get('https://portfolioangular-11749-default-rtdb.europe-west1.firebasedatabase.app/portfolioitems.json').subscribe((resp: any) => {
     
      this.charged = true;
      this.itemsPortfolio = resp;

      
    })
  }

  getItem(id: string) {
    return this.http.get(`https://portfolioangular-11749-default-rtdb.europe-west1.firebasedatabase.app/portfolioitems/${id}.json`)
  }
}


