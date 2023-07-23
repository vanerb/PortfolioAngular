import { Component } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  urllogo:string = "assets/img/ui/logo.png";
  constructor(public _infoPageService: InfopageService) { 
          
  }
}
