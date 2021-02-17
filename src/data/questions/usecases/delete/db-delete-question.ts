import { QuestionModel } from 'domain/models';
import { DeleteQuestion } from 'domain/usecases/questions';
import {
  FindQuestionByIdRepository,
  DeleteQuestionRepository,
} from '../../protocols';

export class DbDeleteQuestion implements DeleteQuestion {
  constructor(
    private readonly findQuestionByIdRepository: FindQuestionByIdRepository,
    private readonly deleteQuestionRepository: DeleteQuestionRepository,
  ) {}

  async delete(id: string): Promise<QuestionModel> {
    const question = await this.findQuestionByIdRepository.findById(id);
    if (!question) {
      return null;
    }

    const successDelete = await this.deleteQuestionRepository.delete(
      question.id,
    );

    if (successDelete) {
      return successDelete;
    }
    return null;
  }
}
