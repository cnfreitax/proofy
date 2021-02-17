import { DbDeleteQuestion } from 'data/questions/usecases/delete/db-delete-question';
import { QuestionRepository } from 'infra/db/postgres/question/typeorm/repository/db-question-repository';
import { DeleteQuestionController } from 'presentation/controllers/questions/delete-question/delete-question-controller';
import { Controller } from '../../../../../shared/interfaces';

export const makeDeleteQuestionController = (): Controller => {
  const questionRepository = new QuestionRepository();
  const dbDeleteQuestion = new DbDeleteQuestion(
    questionRepository,
    questionRepository,
  );
  return new DeleteQuestionController(dbDeleteQuestion);
};
