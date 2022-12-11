class Personagem{

    constructor(caneta, teclado){
        this.caneta = caneta;
        this.teclado = teclado;

        this.img = new Image();
        this.img.src = "sprites/avatar.png";

        this.x = 50;
        this.y = 50;
        this.velocidade = 3;

        this.estado = -1; //guarda o estado atual do sprite
        this.numSprite = 0; //número do sprite atual
        this.alternaSprite = 0; //alterna entre o eixo x do sprite
        this.contadorAtraso = 0;
    }

    desenhar(){
        //animação subir
        if (this.teclado.cima){
            this.y -= this.velocidade;
            this.estado = 1;
            this.animation(this.img, 5, 10, 780, 120, 130);
        }
        //animação parado de costas
        if (!this.teclado.cima && this.estado == 1){
            this.animation(this.img, 0, 1, 260, 120, 130);
        }
        //animação descer
        if (this.teclado.baixo){
            this.y += this.velocidade;
            this.estado = -1;
            this.animation(this.img, 5, 10, 520, 120, 130);
        }
        //animação parado de frente
        if (!this.teclado.baixo && this.estado == -1){
            this.animation(this.img, 50, 3, 0, 120, 130);
        }
        //animação indo para direita
        if (this.teclado.direita){
            this.x += this.velocidade;
            this.estado = 2;
            this.animation(this.img, 5, 10, 910, 120, 130);
        }
        //animação parado na direita
        if (!this.teclado.direita && this.estado == 2){
            this.animation(this.img, 50, 3, 390, 120, 130);
        }
        //animação indo para esquerda
        if (this.teclado.esquerda){
            this.x -= this.velocidade;
            this.estado = -2;
            this.animation(this.img, 5, 10, 650, 120, 130);
        }
        //animação parado na esquerda
        if (!this.teclado.esquerda && this.estado == -2){
            this.animation(this.img, 50, 3, 130, 120, 130);
        }
    }

    animation(img, atrasoSprite, totalSprite, ySprite, tamX, tamY){
        this.contadorAtraso++;

        if (this.contadorAtraso >= atrasoSprite || this.numSprite > totalSprite-1){
            this.numSprite++;
            this.contadorAtraso = 0;

            if (this.numSprite > totalSprite-1){
                this.numSprite = 0;
            }
            this.alternaSprite = this.numSprite*tamX;
        }
        
        this.caneta.drawImage(img, this.alternaSprite, ySprite, tamX, tamY, this.x, this.y, tamX, tamY);
    }
}