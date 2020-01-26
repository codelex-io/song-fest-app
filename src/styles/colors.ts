export const findColorByIndex = (index: number): string => {
    const colors = ['#00A258', '#F15A31', '#086BB5'];
    return colors[index % colors.length];
};
