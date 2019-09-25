const exchange_rate = 25.695;
const euros = parseInt(prompt("Insert amount to be converted to CZK:"));
alert(`EUR ${euros} is CZK ${Math.round(exchange_rate * euros)}`);