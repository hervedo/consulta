import { PrismaProdutosRepository } from "@/repositories/prisma/prisma-produtos-repository";
import { ListarProdutosUseCase } from "@/useCases/listar-produtos-usecase";

import { FastifyReply, FastifyRequest } from "fastify";

export async function ListarProdutosController(
  request: FastifyRequest,
  response: FastifyReply
) {
  const produtosRepository = new PrismaProdutosRepository();
  const listarProdutosUseCase = new ListarProdutosUseCase(produtosRepository);

  const usuarios = await listarProdutosUseCase.execute();

  return response.status(200).send(usuarios);
}
