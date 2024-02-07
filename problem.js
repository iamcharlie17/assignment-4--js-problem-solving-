//problem No 1
//Help The Zoo Manager

function calculateMoney(ticket) {
  let ticketPrice = 120;
  let expenses = 500 + 8 * 50;
  let remainingMoney = ticket * ticketPrice - expenses;
  if (ticket >= 0) {
    return remainingMoney;
  }
  else {
    return '"Invalid Number"';
  }
}



// problem 2 (Good Name , Bad Name)

function checkName(name) {
  if (typeof name != 'string') {
    return 'invalid';
  }
  let len = name.length;
  let lowerCase = name.toLocaleLowerCase();
  if (
    lowerCase[len - 1] === 'a' ||
    lowerCase[len - 1] === 'y' ||
    lowerCase[len - 1] === 'i' ||
    lowerCase[len - 1] === 'e' ||
    lowerCase[len - 1] === 'o' ||
    lowerCase[len - 1] === 'u' ||
    lowerCase[len - 1] === 'w'
  ) {
    return 'Good Name';
  }
  else {
    return 'Bad Name';
  }
}

//problem 3 (Virus in my Array)

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return '"Invalid Array"';
  }
  let len = array.length;
  let newArray = [];
  for (let i = 0; i < len; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}



//problem 4 (Make A Great Password)

function password(object) {
  if (
    typeof object !== 'object' ||
    !object.hasOwnProperty('name') ||
    !object.hasOwnProperty('birthYear') ||
    !object.hasOwnProperty('siteName')
  ) {
    return 'invalid';
  }

  let yearString = object.birthYear.toString();
  let len = yearString.length;

  if (len !== 4) {
    return 'invalid';
  }

  const firstUpperCase =
    object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1); //google: how to capitalize the first letter-----

  const password = firstUpperCase + '#' + object.name + '@' + object.birthYear;
  return password;
}



//problem 5 (Monthly Savings of a Freelancer)

function monthlySavings(array, number) {
  if (!Array.isArray(array) || typeof number !== 'number') {
    return 'invalid input';
  }

  let totalIncome = 0;
  let totalSavings = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 3000) {
      array[i] = array[i] - array[i] * 0.2;
    }
    totalIncome = totalIncome + array[i];
  }
  totalSavings = totalIncome - number;
  if (totalSavings >= 0) {
    return totalSavings;
  } else {
    return '"earn more"';
  }
}
