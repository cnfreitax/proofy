import { DbDeleteExam } from 'data/exam/usecases/delete/db-delete-exam';
import { DeleteExamController } from 'presentation/controllers/exames/delete-exam/delete-exam-controller';
import { ExamRepository } from '../../../../../infra/db/postgres/exam/typeorm/repository/db-exam-repository';
import { Controller } from '../../../../../shared/interfaces';

export const makeDeleteExamFactory = (): Controller => {
  const examRepository = new ExamRepository();
  const dbDeleteExam = new DbDeleteExam(examRepository);
  return new DeleteExamController(dbDeleteExam);
};
