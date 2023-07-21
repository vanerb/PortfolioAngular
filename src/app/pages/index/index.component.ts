import { Component } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
    constructor(public _infopageService: InfopageService) { 

      //Read the file JSON

      
    }


}
