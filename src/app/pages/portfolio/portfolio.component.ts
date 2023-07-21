import { Component } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(public _items: InfopageService) { 

  }
}
