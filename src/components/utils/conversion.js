export const convertLength = (value, from, to) => {
  const units = {
    m: 1,
    km: 1000,
    cm: 0.01,
  };

  return (value * units[from]) / units[to];
};

export const convertTemperature = (value, from, to) => {
  if (from === "C" && to === "F") return (value * 9) / 5 + 32;
  if (from === "F" && to === "C") return ((value - 32) * 5) / 9;
  return value;
};