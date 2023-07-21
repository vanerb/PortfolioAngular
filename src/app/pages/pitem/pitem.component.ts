import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDescription } from 'src/app/interfaces/item-description.interface';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-pitem',
  templateUrl: './pitem.component.html',
  styleUrls: ['./pitem.component.css']
})
export class PitemComponent {
    item: ItemDescription= {};

    constructor(private route: ActivatedRoute, public itemService: InfopageService) { 

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.itemService.getItem(params['id']).subscribe((item: ItemDescription) => {
            this.item = item;
        });
      });
    }
}
