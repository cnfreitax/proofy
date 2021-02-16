import { DbUpdateExam } from 'data/exam/usecases/update/db-update-exam';
import { ExamRepository } from 'infra/db/postgres/exam/typeorm/repository/db-exam-repository';
import { UpdateExamController } from '../../../../../presentation/controllers/exames/update-exam/update-exam-controller';
import { Controller } from '../../../../../shared/interfaces';
import { updateExamControllerValidation } from './update-exam-controller-facotry-validation';

export const mackUpdateController = (): Controller => {
  const examRepository = new ExamRepository();
  const dbUpdateExam = new DbUpdateExam(examRepository, examRepository);
  return new UpdateExamController(
    updateExamControllerValidation(),
    dbUpdateExam,
  );
};
