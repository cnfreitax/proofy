import { ExameModel } from 'domain/models';
import { AddExameParams } from 'domain/usecases/exames';
import { Repository, getRepository } from 'typeorm';
import {
  AddExamRepository,
  FindExamByIdRepository,
} from '../../../../../../data/exam/protocols';
import { Exam } from '../entities/exam';

export class ExamRepository
  implements AddExamRepository, FindExamByIdRepository {
  private readonly repository: Repository<Exam>;
  constructor() {
    this.repository = getRepository(Exam);
  }

  public async add(data: AddExameParams): Promise<ExameModel> {
    const exam = this.repository.create(data);
    await this.repository.save(exam);
    return exam;
  }

  public async findById(id: string): Promise<ExameModel | undefined> {
    const exam = await this.repository.findOne({ where: { id } });
    return exam;
  }
}
