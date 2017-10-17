import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { ModalController } from 'ionic-angular';
import { DfhResultsModal } from '../home/dfhResultsModal';
import { DfhService } from '../services/dfhservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;
  genero = 'm';
  idade = 6;

  constructor(public modalCtrl: ModalController, private camera: Camera, private dfhService: DfhService) {

  }

 takePicture(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(JSON.stringify(err));
      });
  }

  showResults() {
    this.dfhService.avaliar(this.idade, this.genero, this.base64Image);
    let resultsModal = this.modalCtrl.create(DfhResultsModal);
    resultsModal.present();

  } 

}