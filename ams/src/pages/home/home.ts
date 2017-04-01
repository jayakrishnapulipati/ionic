import { Component } from '@angular/core';
import { AmsService } from '../../app/services/ams.service';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items: any;
  constructor(public navCtrl: NavController, public amsService: AmsService) {

  }

  ngOnInit() {
    this.getPosts('sports', 5);
  }

  getPosts(category, limit) {
    this.amsService.getPots(category, limit).subscribe(response => {
      console.log(response);
      this.items = response.data.children;
      
    })
  }

  showMoreInfo(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    })
  }
}
