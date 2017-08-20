import { Component } from '@angular/core';
import {ViewController, IonicPage,  NavController,  NavParams} from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  onClose(){
    //model view will be closed
    this.viewCtrl.dismiss();
  }
}
