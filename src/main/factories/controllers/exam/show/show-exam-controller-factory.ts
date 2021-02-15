import { ExamRepository } from 'infra/db/postgres/exam/typeorm/repository/db-exam-repository';
import { ShowExamController } from 'presentation/controllers/exames/show-exam/show-exam-controller';
import { Controller } from '../../../../../shared/interfaces';

export const makeFactoryShowExamController = (): Controller => {
  const examRepository = new ExamRepository();
  return new ShowExamController(examRepository);
};
