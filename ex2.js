function funcao(){
    var vet = []
    var i
    var somasalario = 0
    var somafilhos = 0
    var qtde = 0 
    var maiorsalario = vet [0].salario
    for(i=0; i<3; i++){
        var objeto = {}
        objeto.salario = Number(prompt("informe o salário"))
        objeto.sexo = prompt("sexo")
        objeto.filhos = Number (prompt("Quantidade de filhos"))
        objeto.idade = Number (prompt("Idade"))
        //coloca o objeto no vetor
        vet.push(objeto)
    }
        for (i=0; i<vet.length; i++){
            soma = soma + vet[i].salario
            somafilhos = somafilhos + vet[i].filhos
            if (vet[i].salario > maior salario){
                maiorsalario = vet[i].salario
            }
        }
        alert("média" + soma/vet.length)
        alert("média de filhos") + somafilhos/vet.length)
        alert("maior salário" + maiorsalario)
        alert("percentual" + qtde/3*100);

    }
    