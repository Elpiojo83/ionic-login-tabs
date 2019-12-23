import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs-wrapper.page.html',
  styleUrls: ['./tabs-wrapper.page.scss'],
})
export class TabsWrapperPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    return this.navCtrl.navigateRoot('/login');
  }

}
