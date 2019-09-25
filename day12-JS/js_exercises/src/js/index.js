const bankAccounts = ['000256784', '000986056', '001546238', '030987456'];
const balances = [790, 5600, 78065, 120910];
const requestedAcc = prompt('enter your account number');

if (bankAccounts.indexOf(requestedAcc) !== -1) {
  alert(`Balance of the account: ${requestedAcc} is: EUR ${balances[bankAccounts.indexOf(requestedAcc)]}`);
} else {
  alert('Ivalid account number');
}
