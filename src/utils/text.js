export const capitalize = (text) =>
  text[0].toUpperCase() + text.substr(1, text.length);
export const weightDescription = (weight) =>
  weight === 400 ? 'Regular' : weight === 500 ? 'Medium' : 'Bold';
