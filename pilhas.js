class MinhaPilha {

    #items = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento

        this.#tamanho++;
    }

    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimoitem = this.#items[this.#tamanho -1];
    
        delete this.#items[this.#tamanho -1];

        this.#tamanho--;

        return ultimoitem;
    }

    topo() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        return this.#items[this.#tamanho -1]
    }

    limpar() {
        this.#items = [];

        this.#tamanho = 0;
    }

    estavazia () {
        if (this.#tamanho === 0) {
            return true;
        }
        return false;
    }

    base() {
        if (this.#tamanho === 0) {
            return undefined;
        }
        return this.#items[0];
    }

    removerBase() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        for (let i = 0; i < this.#tamanho - 1; i++) {
            this.#items[i] = this.#items[i + 1];
        }
        delete this.#items[this.#tamanho - 1];
        this.#tamanho--;
    }
    tamanhopilha = () => this.#tamanho;

    toString() {
        console.table(this.#items);
    }
}

module.exports = MinhaPilha;

const a = new MinhaPilha

