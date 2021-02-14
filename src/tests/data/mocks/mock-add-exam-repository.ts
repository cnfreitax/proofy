import {
  AddExamRepository,
  FindExamByIdRepository,
} from '../../../data/exam/protocols';
import { ExameModel } from '../../../domain/models';
import { AddExameParams } from '../../../domain/usecases/exames';
import { fakeExam } from '../../domain/usecases/models';

export class AddExamRepsoitorySpy implements AddExamRepository {
  examModel = fakeExam();
  addExamParams: AddExameParams;

  async add(data: AddExameParams): Promise<ExameModel> {
    this.addExamParams = data;
    return this.examModel;
  }
}

export class FindExamByIdSpy implements FindExamByIdRepository {
  public examModel = fakeExam();
  id: string;

  async findById(id: string): Promise<ExameModel> {
    this.id = id;
    return this.examModel;
  }
}
