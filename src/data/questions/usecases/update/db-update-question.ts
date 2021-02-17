import { QuestionModel } from 'domain/models';
import {
  FindQuestionByIdRepository,
  UpdateQuestionRepository,
} from '../../protocols';
import { UpdateQuestion, UpdateQuestionDTO } from 'domain/usecases/questions';

export class DbUpdateQuestion implements UpdateQuestion {
  constructor(
    private readonly findQuestionByIdRepository: FindQuestionByIdRepository,
    private readonly updateQuestionRepository: UpdateQuestionRepository,
  ) {}

  async update(data: UpdateQuestionDTO): Promise<QuestionModel> {
    const question = await this.findQuestionByIdRepository.findById(data.id);
    if (!question) {
      return null;
    }
    const updatedQuestion = await this.updateQuestionRepository.update(data);
    return updatedQuestion;
  }
}
