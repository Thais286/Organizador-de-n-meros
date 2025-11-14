let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){ //Number(n)converte o valor n (que vem como texto) em número
        return true
    } else{
        return false
    }
}

function inLista(n, l){ //l = lista
 if(l.indexOf(Number(n)) != -1){ // indexOf procura o número dentro do array
     return true
 } else {
    return false
 }

}

function adicionar(){
 if(isNumero(num.value) && !inLista(num.value, valores)){ //! significa “não”
  valores.push(Number(num.value))
  let item = document.createElement('option')
  item.text = `Valor ${num.value} adicionado.`
  lista.appendChild(item)
  res.innerHTML = ''

 }else{
    window.alert('Valor inválido ou já encontrado na lista') //mostra uma janelinha de aviso no navegador
 }
 num.value ='' // apaga o número automaticamente da caixinha de pesquisa

 num.focus()//Usado depois que o usuário adiciona um número, pra ele poder digitar o próximo sem precisar clicar de novo no input.
}

function finalizar(){
   if(valores.length == 0) {
    window.alert('Adicionar valores antes de finalizar !')
   }else{
    let tot = valores.length // tot guarda o total de números cadastrados
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let média = 0
    for(let pos in valores){
        soma += valores [pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }

    média = soma / tot  // tot aqui é de total
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> Somando todos os valore temos ${soma}.</p>`
    res.innerHTML += `<p> A média dos valores digitados é ${média}</p>`

     }
   }

