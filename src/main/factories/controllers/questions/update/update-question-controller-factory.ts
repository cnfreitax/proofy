import { DbUpdateQuestion } from 'data/questions/usecases/update/db-update-question';
import { QuestionRepository } from 'infra/db/postgres/question/typeorm/repository/db-question-repository';
import { UpdateQuestionController } from 'presentation/controllers/questions/update-question/update-question-controller';
import { Controller } from '../../../../../shared/interfaces';
import { updateQuestionValidation } from './update-question-controller-facotry-validation';

export const makeUpdateQuestionController = (): Controller => {
  const questionRepository = new QuestionRepository();
  const dbUpdateQuestion = new DbUpdateQuestion(
    questionRepository,
    questionRepository,
  );
  return new UpdateQuestionController(
    updateQuestionValidation(),
    dbUpdateQuestion,
  );
};
