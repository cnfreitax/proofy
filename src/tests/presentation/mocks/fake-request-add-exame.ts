import { HttpRequest } from 'shared/interfaces';

export const mockFakeRequest = (): HttpRequest => ({
  body: {
    id: 'any_exam_id',
    name: 'any_exam',
    description: 'any_description',
    type: 'any_type',
    questions: [
      {
        id: 'any_question_id',
        statement: 'any_statement',
        options: [
          {
            id: 'any_option_id',
            value: 'viver',
            correct: false,
          },
          {
            id: 'another_option_id',
            value: 'viver',
            correct: false,
          },
        ],
      },
    ],
  },
});
