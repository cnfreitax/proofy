import { ExameModel } from '../../../domain/models';
import { AddExameParams } from '../../../domain/usecases/exames';
import { fakeExam } from '../../domain/usecases/models';

export class AddExamRepositorySpy implements AddExamRepositorySpy {
  examModel = fakeExam();
  addExamParams: AddExameParams;

  async add(data: AddExameParams): Promise<ExameModel> {
    this.addExamParams = data;
    return this.examModel;
  }
}
