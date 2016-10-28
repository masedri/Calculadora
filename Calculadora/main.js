class Calculadora{
    constructor(){
        this.memoria = 0;
        this.guardarValor = 0;
    }

    operar(operador, valor){
        if(this.memoria == 0){
            this.memoria = valor;
        }else{
            switch (operador) {
                case '+':
                this.memoria = Number(this.memoria) + Number(valor);
                break;
                case '-':
                this.memoria = Number(this.memoria) - Number(valor);
                break;
                case '*':
                this.memoria = Number(this.memoria) * Number(valor);
                break;
                case '/':
                this.memoria = Number(this.memoria) / Number(valor);
                break;
            }
        }
        return this.memoria;
    }

    getMemoria(){
        return this.memoria;
    }
    setMemoria (valor){
        this.memoria = valor;
    }
    setGuardarValor(valor){
        this.guardarValor = valor;
    }
    getGuardarValor(){
        return this.guardarValor;
    }
    borrar (pantalla){
        this.memoria = 0;
        pantalla.value = 0;
    }

}
