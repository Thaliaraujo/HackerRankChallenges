const fruits = ['Blackberry', 'Plum', 'Avocado', 'Melon', 'Watermelon', 'Banana', 'Strawberry', 'Apple',];
const vegetables = ['Potato', 'Onion', 'Tomato', 'Cucumber', 'Corn'];


//concat() - junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.
const food = fruits.concat(vegetables);

//push() - adiciona um novo elemento no final do array, retorna o tamanho do array
food.push('Mel');

//pop() - remove o último elemento de um array.
food.pop();

//unshift() - parecido com o método .push(), mas ao invés de adicionar no final do array, adiciona o elemento no início de um array.
food.unshift('Mel');

//shift() - parecido com o método .pop(), mas ao invés de remover no final do array, remove o elemento no início de um array.
food.shift();

//includes() - verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.
console.log(food.includes('Mel'));

//fill() - preenche os elementos especificados em um array com um determinado valor, modificando o array original.
//array.fill(value, start, end)
food.fill(':)', 3,5);

// .indexOf( ) - retorna o primeiro índice encontrado de um valor especificado. 
console.log(food.indexOf('Apple'));

//legth - tamanho do array
console.log(food.length);

//reverse() - inverte a ordem dos elementos de um array e substitui o array original.
food.reverse();

//slice() -  retorna elementos de um array, selecionados de determinada posição de início até determinada posição final.

console.log(food.slice(3,7));

//some() - verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback.
//O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. 
const even = (element) => element === 'Banana';

console.log(food.some(even));

//join() -  puxa elementos de um array e lista no formato de string
console.log(food.join(" and "));

//splice() - altera o conteúdo de uma lista, adicionando novos elementos, substituindo ou removendo elementos.
// primeiro parametro é o índice, segundo é o delete (0 para não deletar e 1 para deletar), terceiro parametro o que deseja adicionar ao array.
food.splice(0, 0, 'Peach');
food.splice(0, 1);

//sort() ordena os elementos do próprio array e retorna o array. 
food.sort();


console.log(food);




