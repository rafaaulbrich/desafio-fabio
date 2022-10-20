    //apresente uma lista para o usuário e dê opções para que ele possa: adicionar, remover e se possível alterar um item

    //ENTRADA

    let inserir = prompt("você deseja inserir algum item na lista? s-sim; n-não").toLowerCase();
    let remover = prompt("você deseja remover algum item da lista? s-sim; n-não").toLowerCase();
    let listaDeItens = ["arroz", "feijão", "macarrão", "leite", "café", "maçã", "banana", "chocolate"];

    //PROCESSAMENTO

    for(contador = 0; contador <= 0; contador++)  {
        if(inserir === "s" && remover === "n") {
            let adicionado = prompt("qual item você deseja inserir?");
            listaDeItens.push(adicionado);
        } else if(inserir === "s" && remover === "s") {
            let adicionado2 = prompt("qual item você deseja inserir");
            alert("selecione os itens que você deseja remover");
            listaDeItens.push(adicionado2);
            listaDeItens.splice(removido);
        } else if(inserir === "n" && remover === "s") {
            alert("selecione os itens que você deseja remover");
            listaDeItens.splice(remover);{
                alert(`Nova lista `)
            }
        } else if(inserir === "n" && remover === "n") {
            alert("LISTA NÃO ALTERADA!");
        }

       
    }

    //SAÍDA
