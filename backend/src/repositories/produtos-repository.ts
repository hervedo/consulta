import { Prisma, Produto } from "@prisma/client";

export interface ProdutosRepository {
  create(data: Prisma.ProdutoCreateInput): Promise<Produto>;
  findByCodref(codref: string): Promise<Produto | null>;
  findAll(): Promise<Produto[]>;
}
