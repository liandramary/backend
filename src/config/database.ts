import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://dbLiandra:topicos@clustertopicosespeciais.7l0ez.mongodb.net/Prova2Bim?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao banco de dados");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar com o banco de dados: ${erro}`);
  });

export { mongoose };