# features/step_definitions/consulta_api_steps.rb

Dado("que eu faço uma requisição GET para a API de Enumerações da VR") do
  @response = HTTParty.get('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')
end

Quando("eu vizualizar a resposta da API") do
  @json_response = JSON.parse(@response.body)
  expect(@response.code).to eq(200)
end

Então("valido que as informações são exibidas corretamente na resposta") do
  aggregate_failures do
    expect(@json_response).to have_key("typeOfEstablishment")
    tipos_estabelecimento = @json_response["typeOfEstablishment"]
    tipo_aleatorio = tipos_estabelecimento.sample
    puts "Tipo de estabelecimento aleatório: #{tipo_aleatorio}"
  end
end