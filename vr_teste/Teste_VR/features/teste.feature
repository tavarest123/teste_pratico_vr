#language: pt
#features/consulta_api.feature

Funcionalidade: Consulta à API de Enumerações da VR

  Cenário: Verificar se o JSON retornado possui a chave "typeOfEstablishment" e imprimir um tipo de estabelecimento aleatório
    Dado que eu faço uma requisição GET para a API de Enumerações da VR
    Quando eu vizualizar a resposta da API
    Então valido que as informações são exibidas corretamente na resposta
