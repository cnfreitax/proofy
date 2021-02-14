import { CreateQuestionDTO } from 'domain/usecases/questions/add-question';
import { AddQuestionRepository } from '../../../data/questions/protocols/add-question-repository';
import { QuestionModel } from '../../../domain/models';
import { fakeQuestionModel } from '../../domain/usecases/models';

export class AddQuestionRepositorySpy implements AddQuestionRepository {
  questionModel = fakeQuestionModel();
  addQuestionParams: CreateQuestionDTO;

  async add(data: CreateQuestionDTO): Promise<QuestionModel> {
    this.addQuestionParams = data;
    return this.questionModel;
  }
}
