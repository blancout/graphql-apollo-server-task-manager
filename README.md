###
# Aprendendo a usar o NodeJS com GraphQL criando uma lista de tarefas
# https://www.linkedin.com/pulse/aprendendo-usar-o-nodejs-com-graphql-criando-uma-lista-felipe-santos/
#
# Obs: No artigo faltaram as seguintes informações:
# - npm install @apollo/server graphql (instalar apollo server e graphql)
# - na parte 3 do artigo é criado no final o arquivo index.ts (nao foi nomeado no texto) deve ser criado na raiz de src
# - no package.json no script start alterar para:
#   "start": "npm run compile && node --experimental-specifier-resolution=node ./dist/index.js"
#
# Exemplos de comandos graphql:
# query ExampleQueryTask { tasks { id title description status created_at }}
# query ExampleQueryTask {
# 
# query ExampleQueryTask {task(id: "7815696ecbf1c96e6894b779456d330e") {id title description}}
#
# mutation ExampleDeleteTask{deleteTask(id: "7815696ecbf1c96e6894b779456d330e")}
# 
# mutation ExampleCreateTask{
#  createTask(
#    title: "Impressao relatorio mensal",
#    description: "relatorio mensal",
#    status: "to-do",
#    created_at: "2024-12-20 13:20")
#    {
#      id
#      title
#      description
#    }
#  }
#
# mutation ExampleUpdateTask{
#  updateTask(
#    id: "yc4o6j1ma"
#    title: "Teste de alteracao de clientes",
#    description: "alteracao clientes",
#    status: "to-do",
#    updated_at: "2024-12-20 15:32")
#    {
#      id
#      title
#      description
#    }
# }
# 
###