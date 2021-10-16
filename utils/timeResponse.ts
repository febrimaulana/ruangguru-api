const timeResponse = (start: number, end: number) => {
  const mil = start - end;
  const convertSecond = mil / 1000;
  return `${Math.abs(convertSecond).toFixed(2)} seconds`;
};

export default timeResponse;
