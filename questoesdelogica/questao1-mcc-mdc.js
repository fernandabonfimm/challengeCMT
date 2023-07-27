const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Resolução da questão 1

const calculoMMCEMDC = (n1, n2) => {
  let menor, maior;
  if (n1 < n2) {
    menor = n1;
    maior = n2;
  } else {
    menor = n2;
    maior = n1;
  }

  const mdc = menor * maior;
  let mmc = 0;

  if (maior >= 0) {
    while (mmc * mdc <= maior) {
      mmc += 0.0001;
    }
    mmc = Number(mmc.toFixed(2));
  } else {
    mmc = "Não é possível calcular o MMC de um número negativo";
  }

  console.log(`MMC: ${mmc}`);
  console.log(`MDC: ${mdc}`);

  rl.close();
};

rl.question("Digite o primeiro número: ", (n1) => {
  rl.question("Digite o segundo número: ", (n2) => {
    calculoMMCEMDC(Number(n1), Number(n2));
  });
});
