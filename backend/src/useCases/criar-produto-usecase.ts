import { ProdutoExistente } from "@/errors/produto-existente";
import { ProdutosRepository } from "@/repositories/produtos-repository";
import { Decimal } from "@prisma/client/runtime";

interface ProdutoRequest {
  codref: string;
  nome: string;
  preco: Decimal;
  estoque: Decimal;
}

export class CriarProdutoUseCase {
  constructor(private produtosRepository: ProdutosRepository) {}

  async execute({ codref, nome, preco, estoque }: ProdutoRequest) {
    // const codrefExistente = await this.produtosRepository.findByCodref(codref);

    //  if (codrefExistente) {
    //    throw new ProdutoExistente();
    //  }

    const produto = await this.produtosRepository.create({
      codref,
      nome,
      preco,
      estoque,
    });

    return produto;
  }
}
