import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../data/quote.interface';
import { Component } from '@angular/core';
import {ModalController, IonicPage,  NavController,  NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes : Quote[];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private quotesService : QuotesService,
    private modalCtrl : ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
   this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote : Quote){
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }
}
