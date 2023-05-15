export const dataFormatter = value => {
  if (value === undefined || value === null || value === '') {
    return '--';
  } if (typeof value === 'number') {
    return parseFloat(value.toFixed(3));
  }
  return value;
};
