const nidIsValid = (nid) => {
  if (Number.isNaN(parseInt(nid, 10)) || nid.length !== 10) {
    return false;
  }
  return true;
};

const divisibleByEleven = (nid) => {
  if (nid % 11 === 0) {
    return true;
  }
  return false;
};

const validMonth = (nid) => {
  const month = parseInt(nid.slice(2, 4), 10);
  if (month > 0 && month <= 12 || month > 50 && month <= 62) {
    return true;
  }
  return false;
};

const validDay = (nid) => {
  const month = parseInt(nid.slice(2, 4), 10);
  const day = parseInt(nid.slice(4, 6), 10);
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 || month === 51 || month === 53 || month === 55 || month === 57 || month === 58 || month === 60 || month === 62) {
    if (day > 0 && day <= 31) {
      return true;
    }
    return false;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11 || month === 54 || month === 56 || month === 59 || month === 61) {
    if (day > 0 && day <= 30) {
      return true;
    }
    return false;
  }

  if (month === 2 || month === 52) {
    const year = parseInt(nid.slice(0, 2), 10);
    if (year % 4 === 0) {
      if (day > 0 && day <= 29) {
        return true;
      }
      return false;
    }
    if (day > 0 && day <= 28) {
      return true;
    }
    return false;
  }
};

const validId = (nid) => {
  if (nidIsValid(nid) && divisibleByEleven(nid) && validMonth(nid) && validDay(nid)) {
    return true;
  }
  return false;
};


const example = '9007270833';

console.log(validId(example));
