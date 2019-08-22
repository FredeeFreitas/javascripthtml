function funcao(){
    var vet = []
    for (var i=0; i<5; i++){
    var objeto = {}
    // coloca dados no objeto
    objeto.codigo = Number(prompt("codigo"))
    objeto.nome = prompt("Nome")
    objeto.qtde = Number(prompt("Qtde"))
    objeto.preco = Number(prompt("Preço"))
    // coloca objeto no vetor
    vet.push(objeto)
  }
  //cacula estoque
  var estoque = 0
  for (var i=0; i<5; i++){
      estoque = estoque + vet[i].qtde
  }
  alert("Qtde em estoque" + estoque)
} 
