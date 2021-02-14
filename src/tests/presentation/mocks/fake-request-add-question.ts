import { HttpRequest } from '../../../shared/interfaces';

export const fakeAddQuestionRequest = (): HttpRequest => ({
  params: {
    exam_id: 'any_exam_id',
  },
  body: {
    statement: 'any_statement',
    points: 1,
  },
});
