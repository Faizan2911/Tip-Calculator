
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');



// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
  const billAmount = Number(billTotalInput.value);

  const tipAmount = billAmount * Number(tipInput.value) / 100;

  const totalBill = billAmount + tipAmount;

  const perPersonTotal = totalBill / numberOfPeople;

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;

}

// ** Splits the bill between more people **
const increasePeople = () => {
  numberOfPeople += 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {

  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();

}

