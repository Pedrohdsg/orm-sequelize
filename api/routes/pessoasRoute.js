const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();
router.get("/pessoas", PessoaController.pegaPessoasAtivas);
router.get("/pessoas/todos", PessoaController.pegaTodasPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.post("/pessoas", PessoaController.criarPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.deletaPessoa);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegaUmaMatricula
);
router.post("/pessoas/:id/restaura", PessoaController.restauraPessoa);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizaMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.deletaMatricula
);

module.exports = router;
