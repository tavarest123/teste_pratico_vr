// cypress/integration/remover_texto_spec.js

describe("Remover Texto", () => {
    const cenarios = [
      {
        descricao: "Cenário 1: Remover texto após marcadores '#', '!'",
        entrada: "bananas, tomates # e ventiladores",
        marcadores: ["#", "!"],
        saidaEsperada: "bananas, tomates",
      },
      {
        descricao: "Cenário 2: Remover texto após marcadores '%', '!'",
        entrada: "o rato roeu a roupa $ do rei % de roma",
        marcadores: ["%", "!"],
        saidaEsperada: "o rato roeu a roupa $ do rei",
      },
      {
        descricao: "Cenário 3: Remover texto após marcadores '&', '*', '%', '!'",
        entrada: "the quick brown fox & jumped over * the lazy dog",
        marcadores: ["&", "*", "%", "!"],
        saidaEsperada: "the quick brown fox",
      },
    ];
  
    beforeEach(() => {
      cy.visit("/");
    });
  
    cenarios.forEach(({ descricao, entrada, marcadores, saidaEsperada }) => {
      it(descricao, () => {
        cy.removerTextoAposMarcadores(entrada, marcadores).should(
          "eq",
          saidaEsperada
        );
      });
    });
  });