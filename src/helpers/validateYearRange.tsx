export const validateYearRange = (filmYear: number, selectedYear: number) => Math.abs(filmYear - selectedYear) <= 9;
