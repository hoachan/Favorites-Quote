import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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
    private modalCtrl : ModalController,
    private menuCtrl : MenuController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
   this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote : Quote){
    /**
     * Delete the unfavorite quote then view current app
     * 
     */
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove : boolean) => {
      console.log(remove);
      if (remove){
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote : Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    // this.quotes = this.quotesService.getFavoriteQuotes();
    const position = this.quotes.findIndex( (quoteElo : Quote) => {
      return quoteElo.id == quote.id;
    });

    this.quotes.splice(position, 1);
  }

  onOpenMenu(){
    this.menuCtrl.open();
  }
}
