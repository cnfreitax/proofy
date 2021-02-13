import { ExamRepository } from '../../../../../infra/db/postgres/exam/repository/db-exam-repository';
import { AddExameController } from '../../../../../presentation/controllers/exames/add-exame/add-exame-controller';
import { Controller } from '../../../../../shared/interfaces';
import { addExamValidation } from './add-exam-factory-validtion';

export const addExamController = (): Controller => {
  const examRepository = new ExamRepository();
  return new AddExameController(addExamValidation(), examRepository);
};
