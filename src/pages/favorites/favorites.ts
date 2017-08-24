import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams} from 'ionic-angular';

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
    private settingsService : SettingsService,
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

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
