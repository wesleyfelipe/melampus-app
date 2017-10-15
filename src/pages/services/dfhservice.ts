
import {Injectable} from '@angular/core';

@Injectable()
export class DfhService {  
  
    idade = null;
    genero = null;
    base64Image : string;
    resultadoAvaliacao = {};
    mensagemErro: string;
 
    constructor() {

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

    avaliar(idade, genero, base64Image){
        this.setAvaliado(idade, genero, base64Image);

        if(this.genero === 'm'){
            this.mensagemErro = "O Melampus ainda não está preparado para avaliar meninos.";
            this.resultadoAvaliacao = null;
        } else if(this.idade < 9){
            this.mensagemErro = "O Melampus ainda não está preparado para avaliar crianças menores de 9 anos."
            this.resultadoAvaliacao = null;
        } else {
            this.mensagemErro = null;
            
        }

    }
}