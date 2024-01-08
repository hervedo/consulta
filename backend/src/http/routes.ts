import { FastifyInstance } from "fastify";
import { CriarProdutoController } from "./controllers/criar-produto-controller";
import { ListarProdutosController } from "./controllers/listar-produtos-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post("/produto", CriarProdutoController);
  // app.get("/produto/$id:", ConsultarProdutoController);
  app.get("/produtos", ListarProdutosController);
}
