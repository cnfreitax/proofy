import { ShowExam } from '../../../../domain/usecases/exames/show-exams-by-id';
import { ExameModel } from '../../../../domain/models';
import { fakeExam } from '../models';

export const mockShowExame = (): ShowExam => {
  class ShowExamStub implements ShowExam {
    async findById(id: string): Promise<ExameModel> {
      return Promise.resolve(fakeExam());
    }
  }
  return new ShowExamStub();
};
