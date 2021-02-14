import { OptionsModel } from '../../../../domain/models';
import { CreateOptionDTO } from '../../../../domain/usecases/options/add-options';

export const fakeOption = (): OptionsModel => ({
  id: 'any_option_id',
  correct: true,
  value: 'any_option_value',
  question_id: 'any_question_id',
});

export const fakeCreateOptionDTO = (): CreateOptionDTO => ({
  options: [
    {
      valeu: 'any_options',
      correct: false,
      question_id: 'any_question_id',
    },
    {
      valeu: 'any_another_option',
      correct: false,
      question_id: 'any_question_id',
    },
  ],
});
