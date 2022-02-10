const compare = (a, b) => {
  if (a.priority < b.priority) {
    return -1;
  }
  if (a.priority > b.priority) {
    return 1;
  }
  return 0;
};

const numOfDigits = (number) => {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
};

const cardDistribution = (clientList) => {
  const cardsWithGift = clientList.map((client, index) => {
    const { priority, district, currentYear, postNo, birthYear } = client;
    let cardNumber = '';
    let gift;

    cardNumber += (district[0] + district[1]).toUpperCase();
    cardNumber += (currentYear % 100).toString();
    cardNumber += Math.floor(postNo / 100).toString();
    cardNumber += birthYear.toString();
    for (let i = 0; i < 6 - numOfDigits(index + 1); i++) {
      cardNumber += '0';
    }
    cardNumber += (index + 1).toString();

    // check gift
    if ((index + 1) % 2 === 0) {
      gift = 'R';
    } else {
      gift = 'W';
    }
    return { cardNumber, gift, priority };
  });
  return cardsWithGift.sort(compare);
};

const vals = [
  {
    name: 'Mr Rashed',
    birthYear: 1999,
    currentYear: 2022,
    district: 'Dhaka',
    postNo: 1200,
    priority: 2,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Rajshahi',
    postNo: 1211,
    priority: 1,
  },
];

console.log(cardDistribution(vals));
