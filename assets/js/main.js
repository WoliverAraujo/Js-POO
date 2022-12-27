class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' esta ligado');
            return;
        }
        this.ligado = true;
    }

    desligar (){
        if (!this.ligado) {
            console.log(this.nome + ' esta desligado');
            return;
        }
        this.ligado = false;

    }
}

class Alexa extends DispositivoEletronico {}
const s1 = new Alexa ('Echo Dot');
console.log(s1);