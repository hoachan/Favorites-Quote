import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import {Toggle, IonicPage,  NavController,  NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    private settingsService : SettingsService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle){
    // console.log(toggle);
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
