import { OptionsModel } from 'domain/models';

export const validCorrectOptionsAmount = (options: OptionsModel[]): number => {
  const correctOptions = [];
  options.map(option => {
    if (option.correct) {
      correctOptions.push(option);
    }
  });
  const amout = correctOptions.length;
  return amout;
};
