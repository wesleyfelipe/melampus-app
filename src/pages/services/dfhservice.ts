
import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

@Injectable()
export class DfhService {  
  
    idade = null;
    genero = null;
    base64Image : string;
    resultadoAvaliacao = {};
    mensagemErro: string;

    constructor(private transfer: FileTransfer) {

    }
  
    setAvaliado(idade, genero, base64Image){
        this.idade = idade;
        this.genero = genero;
        this.base64Image = base64Image;
    }

    getBase64Image(){
        return this.base64Image;
    }

    getIdade(){
        return this.idade;
    }

    getGenero(){
        return this.genero;
    }

    getMensagemErro(){
        return this.mensagemErro;
    }

    getResultadoAvaliacao(){
        return this.resultadoAvaliacao;
    }

    callEcDfhF912Api(image){
        let fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
             fileKey: 'file',
             fileName: 'name.jpg',
             chunkedMode: false
          }

          //encodeURI('http://192.168.1.5:5000/ec-dfh-f-9-12')
            
        console.log("Call API")

        let path = encodeURI('http://192.168.1.5:5000/ec-dfh-f-9-12');
        console.log(path)

        fileTransfer.upload(image, path, options)
            .then((data) => {
                console.log("OK")
            }, (err) => {
                console.log("Erro")
                 console.log(JSON.stringify(err))
            });
    }

    avaliar(idade, genero, base64Image){
        this.setAvaliado(idade, genero, base64Image);

        this.mensagemErro = null;
        this.resultadoAvaliacao = null;

        if(this.genero === 'm'){
            this.mensagemErro = "O Melampus ainda não está preparado para avaliar meninos.";
            this.resultadoAvaliacao = null;
        } else if(this.idade < 9){
            this.mensagemErro = "O Melampus ainda não está preparado para avaliar crianças menores de 9 anos."
            this.resultadoAvaliacao = null;
        } else {
            this.callEcDfhF912Api(this.base64Image)
        }

    }
}