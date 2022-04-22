"use strict";
//----------------------------Ojects
const pessoa = {
    nome: 'Danilo',
    idade: 27,
    endereco: {
        logradouro: 'Nair',
        numero: 27
    }
};
const { nome: n, idade: i } = pessoa;
console.log(n);
console.log(i);
const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);
//# sourceMappingURL=destructuring.js.map