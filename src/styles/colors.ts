export const yellow = '#FFCB05';
export const green = '#00A258';
export const orange = '#F15A31';
export const blue = '#086BB5';
export const lightGreen = '#8DC63F';
export const purple = '#964082';
export const lightBlue = '#0AB1CC';
export const white = '#FFFFFF';
export const darkGrey1A = '#1A1A1A';
export const mediumGrey4D = '#4D4D4D';
export const lightGrey3A = '#A3A3A3';
export const extrLightgrey6E = '#E6E6E6';

const mainColors = [green, orange, blue, purple];

export const findColorByIndex = (index: number): string => {
    return mainColors[index % mainColors.length];
};

export const randomColor = (): string => {
    return mainColors[Math.floor(Math.random() * mainColors.length)];
};
