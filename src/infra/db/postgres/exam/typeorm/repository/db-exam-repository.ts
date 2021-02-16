import { ExameModel } from 'domain/models';
import { AddExameParams, UpdateExamDTO } from 'domain/usecases/exames';
import { Repository, getRepository } from 'typeorm';
import {
  AddExamRepository,
  FindExamByIdRepository,
  UpdateExamRepository,
} from '../../../../../../data/exam/protocols';
import { Exam } from '../entities/exam';

export class ExamRepository
  implements AddExamRepository, FindExamByIdRepository, UpdateExamRepository {
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
    const exam = await this.repository.findOne({
      where: { id },
      relations: ['questions'],
    });
    return exam;
  }

  public async update({
    id,
    name,
    description,
    type,
  }: UpdateExamDTO): Promise<ExameModel> {
    const exam = await this.repository.findOne({ where: { id } });
    if (!exam) {
      return null;
    }

    exam.name = name;
    exam.description = description;
    exam.type = type;

    await this.repository.save(exam);
    return exam;
  }
}
