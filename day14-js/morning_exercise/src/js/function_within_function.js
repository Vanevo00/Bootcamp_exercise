const x = 'carl';
const foo = (y, arg) => y(arg.repeat(3));
console.log(foo((pes) => `${pes}hello`, x));
