class Personagem{

    constructor(caneta){
        this.caneta = caneta;
        this.img = new Image();
        this.img.src = "sprites/avatar.png";

        this.x;
        this.y;
        this.tam;
        this.atrasoSprite;
        this.contadorAtraso = 0;

        this.numSprite = 0;
        this.sprites = 0;
        this.xini = 0;
        this.lsprite = this.img.width/10;
        this.alturaSprite = this.img.height/8;


        this.img.onload = () =>{
            this.paradoFrente();
        }
    }

    movimento(){

    }

    desenhar(){
        this.movimento();

        this.animacao(5, 10, 780); //correndo costas
        //this.animacao(30,3,0) //parado frente
    }

    animacao(atrasoSprite, totalSprite, posSprite){
        this.contadorAtraso++;

        if (this.contadorAtraso == atrasoSprite){
            this.numSprite++;
            if (this.numSprite > totalSprite-1){
                this.numSprite = 0
            }
            this.xini = this.numSprite*this.lsprite;

            this.contadorAtraso = 0;
        }

        this.caneta.drawImage(this.img, this.xini, posSprite, this.lsprite, this.alturaSprite, 50, 0, 100, 100)
    }
}