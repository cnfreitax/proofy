import { ExameModel } from 'domain/models';
import { AddExameParams } from 'domain/usecases/exames';
import { Repository, getRepository } from 'typeorm';
import { AddExamRepository } from '../../../../../data/exam/protocols/add-account-repo';
import { Exam } from '../entities/exam';

export class ExamRepository implements AddExamRepository {
  private readonly repository: Repository<Exam>;
  constructor() {
    this.repository = getRepository(Exam);
  }

  public async add(data: AddExameParams): Promise<ExameModel> {
    const exam = this.repository.create(data);
    await this.repository.save(exam);
    return exam;
  }
}
