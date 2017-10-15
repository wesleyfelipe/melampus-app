import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

import { ModalController } from 'ionic-angular';
import { DfhResultsModal } from '../home/dfhResultsModal';
import { DfhService } from '../services/dfhservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DfhService]
})
export class HomePage {

  public base64Image: string;
  genero = 'm';
  idade = 6;

  constructor(public modalCtrl: ModalController, private camera: Camera, private imagePicker: ImagePicker, private base64: Base64, private dfhService: DfhService) {

  }

 takePicture(){
    const options: CameraOptions = {
      quality: 100,
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

  getFromGallery(){
    const options: ImagePickerOptions = {
          maximumImagesCount: 1
        }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {

        this.base64Image = results[i];

          //this.base64.encodeFile(results[i]).then((base64File: string) => {
          //  this.base64Image = 'data:image/jpeg;base64,' + base64File;
          //}, (err) => {
          //  console.log(err);
          //});
      }
    }, (err) => { 
      console.log(JSON.stringify(err));
    });
  }

  showResults() {
    this.dfhService.setAvaliado(this.idade, this.genero);
    let resultsModal = this.modalCtrl.create(DfhResultsModal);
    resultsModal.present();
  } 

}