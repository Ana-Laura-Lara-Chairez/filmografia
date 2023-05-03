export const validateYearRange = (filmYear: number, selectedYears: number[]) => {
    return selectedYears.some(selectedYear => Math.abs(filmYear - selectedYear) <= 9);
}