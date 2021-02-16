import {
  AddExamRepository,
  FindExamByIdRepository,
  UpdateExamRepository,
} from '../../../data/exam/protocols';
import { ExameModel } from '../../../domain/models';
import { AddExameParams, UpdateExamDTO } from '../../../domain/usecases/exames';
import { fakeExam, fakeExamToUpdate } from '../../domain/usecases/models';

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

export class UpdateExamRepositorySpy implements UpdateExamRepository {
  data = fakeExamToUpdate();
  examModel = fakeExam();
  paramsToUpdate: UpdateExamDTO;

  async update(data: UpdateExamDTO): Promise<ExameModel> {
    this.data = data;
    return this.examModel;
  }
}
