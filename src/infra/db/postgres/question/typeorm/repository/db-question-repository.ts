import { Repository, getRepository } from 'typeorm';
import { Question } from '../entities/question';
import {
  CreateQuestionDTO,
  UpdateQuestionDTO,
} from 'domain/usecases/questions';
import { QuestionModel } from 'domain/models';
import {
  FindQuestionByIdRepository,
  AddQuestionRepository,
  UpdateQuestionRepository,
} from 'data/questions/protocols';

export class QuestionRepository
  implements
    AddQuestionRepository,
    FindQuestionByIdRepository,
    UpdateQuestionRepository {
  private readonly repository: Repository<Question>;
  constructor() {
    this.repository = getRepository(Question);
  }

  public async add(data: CreateQuestionDTO): Promise<QuestionModel> {
    const question = this.repository.create(data);
    await this.repository.save(question);
    return question;
  }

  public async findById(id: string): Promise<QuestionModel> {
    const question = await this.repository.findOne({ where: { id } });
    return question;
  }

  public async update({
    id,
    points,
    statement,
  }: UpdateQuestionDTO): Promise<QuestionModel> {
    const question = await this.repository.findOne({ where: { id } });
    if (!question) {
      return null;
    }

    question.points = points;
    question.statement = statement;
    return this.repository.save(question);
  }
}
