// Dado o array `empresas`: 
// Exiba as seguintes informações:
//     Empresas criadas depois dos anos 2000.
//     O nome de cada empresa e de seu CEO.
//     O valor de todas as empresas somadas.

const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// 1º Passo, filtrar as empresas criadas depois dos anos 2000 utilizando método filter.
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

console.log( empresas);


// 2º Passo, percorrer o array e dentro de cada objeto pegar as propriedades nome e CEO de cada empresa, utilizando método map.
//Com map podemos percorrer todos os itens do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.

const nameAndCEO = empresas.map(company => `${company.nome} ` + `${company.CEO}`);

console.log(nameAndCEO);

 // 3º Passo, somar o valor de todas as empresas com método reduce.
 // O método reduce passa por cada item do array fazendo uma expressão escolhida, e no final vai devolver um único valor.

const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado);
}, 0);

console.log(total);