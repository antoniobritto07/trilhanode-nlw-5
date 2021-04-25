import express from "express";

import "./database";
import { routes } from "./routes";
// (yarn init -y) par acriar o package.json com as informaçãoes do projeto
// (yarn add express para instalar o express e conseguir trabalhar com ele dentro da aplicação)
// (yarn add typescript -D) para conseguir trabalhar com o TS na aplicação
// (yarn add @types/express -D) para conseguir trabalhar com tipagens das dependências (passando depois da "/" o nome da ferramenta que no caso é o express)
// (yarn add ts-node-dev -D) faz com que o node consiga entender melhor essa sintaxe mais nova de importação e declaração 
const app = express();
//Vamos usar o TypeORM nessa aplicação ao inves do Knex que era o que mais erámos acostumados a usar

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running on port"))