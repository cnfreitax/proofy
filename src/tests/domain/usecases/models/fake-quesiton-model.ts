import { CreateQuestionDTO } from '../../../../domain/usecases/questions/add-question';
import { QuestionModel } from '../../../../domain/models';

export const fakeQuestionModel = (): QuestionModel => ({
  id: 'any_question_id',
  points: 1,
  exam_id: 'any_exam_id',
  statement: 'any_statement',
  options: [],
});

export const fakeQuestionParams = (): CreateQuestionDTO => ({
  exam_id: 'any_exam_id',
  points: 1,
  statement: 'any_statement',
});
