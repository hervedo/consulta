import { ProdutosRepository } from "@/repositories/produtos-repository";

export class ListarProdutosUseCase {
  constructor(private produtosRepository: ProdutosRepository) {}

  async execute() {
    const produtos = this.produtosRepository.findAll();

    return produtos;
  }
}
