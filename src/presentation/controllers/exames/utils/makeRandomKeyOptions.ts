import { ExameModel } from '../add-exame/add-exame-controller-imports';

export const makeRandoKeyOptions = (data: any): ExameModel => {
  const keysOptions = ['A', 'B', 'C', 'D', 'E'];
  for (const question of data.questions) {
    if (question.options[0]) {
      question.options.map(option => {
        const randomElement =
          keysOptions[Math.floor(Math.random() * keysOptions.length)];
        const index = keysOptions.indexOf(randomElement);
        if (index > -1) {
          keysOptions.splice(index, 1);
        }
        Object.assign(option, { key: randomElement });
      });
    }
  }

  return data;
};
