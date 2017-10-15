import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'results.html'}
)
export class DfhResultsModal {

   constructor(public viewCtrl: ViewController) {

   }

   dismiss() {
     this.viewCtrl.dismiss();
   }
}
