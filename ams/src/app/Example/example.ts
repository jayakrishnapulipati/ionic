/**
 * Created by Sravani on 4/3/2017.
 */
    import{Component} from '@angular/core';
    import{AlertController} from 'ionic-angular';
    import{ActionSheetController} from 'ionic-angular';
    import{ModalController} from 'ionic-angular';
    import {TabsPage} from "../../pages/tabs/tabs";

    @Component({
      templateUrl:"example.html",
    })
    export class ExampleComponent {
      searchQuery: string = '';
      items1: string[];
      items: any;
      public name:any;
      public password:any;
      public gaming:any;
      public month:any;
      public year:any;
      constructor(public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController) {
        this.initializeItems();
      }

      showAlert() {
        let alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'your friend,sravani,just accepted your friend request!',
          buttons: ['OK']
        });
        alert.present();
      }

      presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
          title:'modify your album',
          buttons:[
            {
              text:'Destructive',
              role:'destructive',
              handler:()=>{
                console.log('Destructive Clicked');
              }
            },
            {
              text:'archive',
              handler:()=>{
                console.log('archive cliked');
            }
        },
            {
              text:'cancel',
              role:'cancle',
              handler:()=>{
                console.log('cancle clicked');
              }

            }
          ]
        });
        actionSheet.present();
      }
      presentModal() {
        let modal = this.modalCtrl.create(TabsPage );
        modal.present();
      }
      signup(){
        let alert=this.alertCtrl.create({
          title:'Login Details',
          subTitle:"username:" + this.name +"password:"+this.password,
          buttons:['OK']
        });
        alert.present();
      }

      initializeItems(){
        this.items1=[
          'Apple',
          'Ball',
          'bat',
          'Cat',
          'Dog',
          'Elephant',
          'frog',
          'Giraff',
          'Hippy',
          'Imp',
          'Jackel',
          'kobra',
          'Lion',
          'monkey',
        ];
      }
      getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items1 = this.items1.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      }
    }
