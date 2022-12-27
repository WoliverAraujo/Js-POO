class controleRemoto {
    constructor(tv) {
        this.tv=tv;
        this.volume = 0;
    }
    //Método de Instância
    aumentarVolume (){
        this.volume += 2;
    }
    dinuirVolume (){
        this.volume -= 2;
    }

    //Método estático
    static trocaPilha (){
        console.log('Pilha está acabando.')
    }
}

const controle1 = new controleRemoto ('LG');
controle1.aumentarVolume ();
controle1.aumentarVolume ();
controle1.aumentarVolume ();
console.log(controle1)

controleRemoto.trocaPilha();