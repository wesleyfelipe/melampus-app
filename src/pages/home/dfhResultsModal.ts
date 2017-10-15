import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { DfhService } from '../services/dfhservice';

@Component({
  templateUrl: 'results.html'
})
export class DfhResultsModal {

   mensagemErro = null;
   resultadoAvaliacao = {};

   constructor(public viewCtrl: ViewController, private dfhService: DfhService)  {
   	this.getResultadoAvaliacao();
   }

   getResultadoAvaliacao(){
   	this.mensagemErro = this.dfhService.getMensagemErro();
   	this.resultadoAvaliacao = this.dfhService.getResultadoAvaliacao();
   	console.log(this.mensagemErro );
   }

   dismiss() {
     this.viewCtrl.dismiss();
   }
}
