import { DbShowExam } from 'data/exam/usecases/show/db-show-exam-by-id';
import { ExamRepository } from 'infra/db/postgres/exam/typeorm/repository/db-exam-repository';
import { ShowExamController } from 'presentation/controllers/exames/show-exam/show-exam-controller';
import { Controller } from '../../../../../shared/interfaces';

export const makeFactoryShowExamController = (): Controller => {
  const examRepository = new ExamRepository();
  const dbShowExamRepository = new DbShowExam(examRepository);
  return new ShowExamController(dbShowExamRepository);
};
