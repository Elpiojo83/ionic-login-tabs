import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-first-with-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }


}
