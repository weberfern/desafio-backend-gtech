import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/alunos/`);
});

let alunos = [
    { id: 1, nome: "Ana", media: 8 },
    { id: 2, nome: "Bruno", media: 8.5 },
    { id: 3, nome: "Carla", media: 9 },
    { id: 4, nome: "Daniel", media: 7.5 },
    { id: 5, nome: "Eva", media: 6 },
];

app.get("/alunos", (req, res) => {
    res.json(alunos);
});

app.get("/alunos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id === id);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).send("Aluno não encontrado");
    }
});
