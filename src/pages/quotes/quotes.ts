import { Quote } from './../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup : {category : string, quotes : Quote[], icon : string};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad (){
  //   this.quoteGroup = this.navParams.data;
  //  add elvis operator (?) in template to use this approach 
  // console.log(this.quoteGroup);
  // }
  
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
}
