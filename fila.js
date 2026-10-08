class fila
{
    #items = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento) {
        if(this.#fim > 4) {
            return "Fila cheia";
        }

        this.#items[this.#fim] = elemento;

        this.#fim++;
        return `Elemento adicionado: ${elemento}`;
    }

    dequeue() {

        if(this.estavazia()) {
            return undefined;
        }
         const itemRemovido = this.#items[this.#inicio];
        for (let i = 0; i < this.#fim - 1; i++) {
            this.#items[i] = this.#items[i + 1];
        }
        delete this.#items[this.#fim - 1];

        this.#fim--;
        return itemRemovido;
    }

    front() {
        if (this.estavazia()) {
            return undefined;
        }
        return this.#items[this.#inicio];
    }

    estavazia = () => this.#fim === this.#inicio;

    tamanho = () => this.#fim - this.#inicio; 

    limpar() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }

    tostring() {
        console.table(this.#items)
    }
}

module.exports = fila;