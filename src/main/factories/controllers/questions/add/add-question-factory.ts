import { QuestionRepository } from 'infra/db/postgres/question/typeorm/repository/db-question-repository';
import { AddQuestionController } from 'presentation/controllers/questions/add-question/add-question-controller';
import { Controller } from '../../../../../shared/interfaces';
import { addQuestionValidation } from './add-question-factory-validation';

export const addExamController = (): Controller => {
  const questionRepository = new QuestionRepository();
  return new AddQuestionController(addQuestionValidation(), questionRepository);
};
