
export class DfhService {  
  
    idade: string;
    genero: string;
 
    constructor() {

    }
  
    setAvaliado(idade, genero){
        this.idade = idade;
        this.genero = genero

        console.log(idade)
        console.log(genero)
    }

    getIdade(){
     return this.idade;
    }

    getGenero(){
        return this.genero;
    }  
}