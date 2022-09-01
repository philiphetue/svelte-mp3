export const displayDuration = (time) => {
    return new Date(time * 1000).toISOString().substring(11, 19);
};
