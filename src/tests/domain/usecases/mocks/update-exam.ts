import { UpdateExam, UpdateExamDTO } from '../../../../domain/usecases/exames';
import { ExameModel } from '../../../../domain/models';
import { fakeExam } from '../models';

export const mockUpdateExam = (): UpdateExam => {
  class UpdateExamStub implements UpdateExam {
    async update(data: UpdateExamDTO): Promise<ExameModel> {
      return Promise.resolve(fakeExam());
    }
  }
  return new UpdateExamStub();
};
