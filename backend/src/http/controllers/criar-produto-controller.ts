import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { ProdutoExistente } from "@/errors/produto-existente";
import { CriarProdutoUseCase } from "@/useCases/criar-produto-usecase";

/*
id           String         @id @default(uuid())
codref       String         
nome         String
preco        Decimal
estoque      Decimal
criado_em    DateTime       @default(now())
alterado_em  DateTime       @default(now())
*/

export async function CriarProdutoController(
  request: FastifyRequest,
  response: FastifyReply
) {
  const produtoBodySchema = z.object({
    codref: z.string(),
    nome: z.string(),
    preco: z.number(),
    estoque: z.number(),
  });

  const { codref, nome, preco, estoque } = produtoBodySchema.parse(
    request.body
  );

  try {
    const produtosRepository = new PrismaProdutosRepository();
    const criarProdutoUseCase = new CriarProdutoUseCase(produtosRepository);

    const produto = await criarProdutoUseCase.execute({
      codref,
      nome,
      preco,
      estoque,
    });
    return response.status(200).send(produto);
  } catch (err) {
    if (err instanceof ProdutoExistente) {
      return response.status(409).send({ message: err.message });
    }
    return response.status(500).send();
  }
}
