export default function CPFValidation(CPFOnlyNumber: string) {
  firstDigitValidation(CPFOnlyNumber);
  secondDigitValidation(CPFOnlyNumber);
}

function algorithmValidation(CPFdigits: string) {
  let sum = 0;
  for (let i = 0; i < CPFdigits.length; i++) {
    sum += Number(CPFdigits[i]) * (CPFdigits.length - i + 1);
  }
  let rest = sum % 11;
  let digit: number;
  if (rest < 2) {
    digit = 0;
  } else {
    digit = 11 - rest;
  }

  return digit;
}

function firstDigitValidation(CPFOnlyNumber: string) {
  const CPFDigits = CPFOnlyNumber.substring(0, 9);
  const digit = algorithmValidation(CPFDigits);

  if (digit !== Number(CPFOnlyNumber[9]))
    throw {
      code: 422,
      message: "invalid CPF!",
    };
}

function secondDigitValidation(CPFOnlyNumber: string) {
  const CPFDigits = CPFOnlyNumber.substring(0, 10);
  const digit = algorithmValidation(CPFDigits);

  if (digit !== Number(CPFOnlyNumber[10]))
    throw {
      code: 422,
      message: "invalid CPF!",
    };
}
