import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProdutosRepository } from "../produtos-repository";

export class PrismaProdutosRepository implements ProdutosRepository {
  async create(data: Prisma.ProdutoCreateInput) {
    const produto = await prisma.produto.create({
      data,
    });

    return produto;
  }

  async findAll() {
    const produtos = await prisma.produto.findMany();

    return produtos;
  }

  async findByCodref(codref: string) {
    const produto = await prisma.produto.findUnique({
      where: { codref },
    });

    console.log(produto);

    return produto;
  }
}
