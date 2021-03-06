import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import {AmsService} from "../../app/services/ams.service";
import{ViewController} from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html',
  providers:[AmsService]
})
export class TabsPage {
items:any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = SettingsPage;
  constructor(public viewCtrl:ViewController) {
   /* this.getPosts('sports',7);*/
  }
  /*getPosts(category, limit) {
    alert("in post");
    this.amsService.getPots(category, limit).subscribe(response => {
      console.log(response);
      this.items = response.data.children;

    })
  }*/
dismiss(){
    this.viewCtrl.dismiss();
}

}
