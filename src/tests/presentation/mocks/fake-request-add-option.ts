import { HttpRequest } from '../../../shared/interfaces';

export const fakeRequestAddOption = (): HttpRequest => ({
  params: {
    question_id: 'any_question_id',
  },
  body: {
    options: [
      {
        value: 'options 1',
        correct: false,
        question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
      },
      {
        value: 'options 2',
        correct: true,
        question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
      },
      {
        value: 'options 2',
        correct: false,
        question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
      },
      {
        value: 'options 2',
        correct: false,
        question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
      },
      {
        value: 'options 2',
        correct: false,
        question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
      },
    ],
  },
});
