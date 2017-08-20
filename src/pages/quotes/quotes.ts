import { QuotesService } from './../../services/quotes';

import { Quote } from './../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import {AlertController, IonicPage,  NavController,  NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup : {category : string, quotes : Quote[], icon : string};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public quoteService : QuotesService
    ) {
  }

  // ionViewDidLoad (){
  //   this.quoteGroup = this.navParams.data;
  //  add elvis operator (?) in template to use this approach 
  // console.log(this.quoteGroup);
  // }
  
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote : Quote){
    const alert = this.alertCtrl.create({
      title : 'Add Quote',
      subTitle : 'Are U sure ?',
      message : 'Are u sure u want to add the quote? ',
      buttons :[
        {
          text : 'yes, go ahead',
          handler : () => {
            this.quoteService.addQuoteToFavorites(selectedQuote);
            console.log('OK');
          }
        },
        {
          text : 'no, I changed my mind!',
          handler : () => {
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }
}
