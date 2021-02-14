import { FindQuestionByIdRepository } from '../../../data/questions/protocols/find-question-by-id-repository';
import { CreateQuestionDTO } from '../../../domain/usecases/questions/add-question';
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

export class FindQuestionByIdRepositorySpy
  implements FindQuestionByIdRepository {
  questionResult = fakeQuestionModel();
  id: string;

  async findById(id: string): Promise<QuestionModel> {
    this.id = id;
    return this.questionResult;
  }
}
