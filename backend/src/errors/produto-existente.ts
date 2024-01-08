export class ProdutoExistente extends Error {
  constructor() {
    super("Produto já existente!");
  }
}
