import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/testpage/testpage.html'
})
export class TestPage {
    constructor(private navCtrl: NavController, navParams: NavParams) {
        // this.selectedItem = navParams.get('item');
    }
}