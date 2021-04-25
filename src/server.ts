import { http } from './http'
import "./websocket/client"
import "./websocket/admin"
http.listen(3333, () => {
  console.log('Servidor rodando!')
})

// (yarn init -y) par acriar o package.json com as informaçãoes do projeto
// (yarn add express para instalar o express e conseguir trabalhar com ele dentro da aplicação)
// (yarn add typescript -D) para conseguir trabalhar com o TS na aplicação
// (yarn add @types/express -D) para conseguir trabalhar com tipagens das dependências (passando depois da "/" o nome da ferramenta que no caso é o express)
// (yarn add ts-node-dev -D) faz com que o node consiga entender melhor essa sintaxe mais nova de importação e declaração 
//Vamos usar o TypeORM nessa aplicação ao inves do Knex que era o que mais erámos acostumados a usar