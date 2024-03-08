class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  vender(quantidadeVendida) {
    if (this.quantidade >= quantidadeVendida) {
      this.quantidade -= quantidadeVendida;
      console.log(
        `Venda realizada! Quantidade atual de ${this.nome}: ${this.quantidade}`
      );
    } else {
      console.log("Estoque insuficiente");
    }
  }

  repor(quantidadeReposta) {
    this.quantidade += quantidadeReposta;
    console.log(
      `Reposição realizada! Quantidade atual de ${this.nome}: ${this.quantidade}`
    );
  }

  mostrarEstoque() {
    console.log(
      `O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`
    );
  }

  atualizarPreco(novoPreco) {
    this.preco = novoPreco;
    console.log(`Preço atualizado! Novo preço de ${this.nome}: ${this.preco}`);
  }
}

class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

class Cliente extends Pessoa {
  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }
}
