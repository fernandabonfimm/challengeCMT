const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Resolução da questão 2

const eAnoBissexto = (ano) => {
  return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
};

rl.question("Digite o ano de nascimento: ", (anoNasc) => {
  const ano = Number(anoNasc);

  if (Number.isNaN(ano) || ano < 0 || +ano !== ano) {
    console.log("Ano inválido, tente novamente");
  } else {
    if (eAnoBissexto(ano)) {
      console.log(`Ano bissexto detectado: ${ano}`);
    } else {
      console.log(`Esse ano enviado, não é um ano bissexto: ${ano}`);
    }
  }
  rl.close();
});
