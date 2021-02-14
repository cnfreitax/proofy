import { AddQuestionRepository } from '../../../../../../data/questions/protocols';
import { Repository, getRepository } from 'typeorm';
import { Question } from '../entities/question';
import { CreateQuestionDTO } from 'domain/usecases/questions';
import { QuestionModel } from 'domain/models';

export class QuestionRepository implements AddQuestionRepository {
  private readonly repository: Repository<Question>;
  constructor() {
    this.repository = getRepository(Question);
  }

  public async add(data: CreateQuestionDTO): Promise<QuestionModel> {
    const question = this.repository.create(data);
    await this.repository.save(question);
    return question;
  }
}
