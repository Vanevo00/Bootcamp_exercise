const salary = (pay, hours, days) => pay * hours * days;

console.log(salary(350, 8, 20));

const taxedSalary = (grossSalary, tax) => grossSalary * (1 - tax);

console.log(taxedSalary(50000, 0.25));
