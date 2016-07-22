import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/test-select/test-select.html'
})
export class TestSelect {
    constructor(private navCtrl: NavController, navParams: NavParams) {
        // this.selectedItem = navParams.get('item');
    }
}