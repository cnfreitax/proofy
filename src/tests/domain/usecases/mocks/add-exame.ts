import { ExameModel } from '../../../../domain/models';
import { AddExam, AddExameParams } from '../../../../domain/usecases/exames';
import { fakeExam } from '../models';

export const mockAddExame = (): AddExam => {
  class AddExameStub implements AddExam {
    async add(data: AddExameParams): Promise<ExameModel> {
      return Promise.resolve(fakeExam());
    }
  }
  return new AddExameStub();
};
