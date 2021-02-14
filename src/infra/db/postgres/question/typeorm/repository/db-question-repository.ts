import { AddQuestionRepository } from '../../../../../../data/questions/protocols';
import { Repository, getRepository } from 'typeorm';
import { Question } from '../entities/question';
import { CreateQuestionDTO } from 'domain/usecases/questions';
import { QuestionModel } from 'domain/models';
import { FindQuestionByIdRepository } from 'data/questions/protocols/find-question-by-id-repository';

export class QuestionRepository
  implements AddQuestionRepository, FindQuestionByIdRepository {
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
}
