import { FindExamByIdRepository } from 'data/exam/protocols/find-exam-by-id-repository';
import { AddQuestionRepository } from 'data/questions/protocols/add-question-repository';
import { QuestionModel } from 'domain/models';
import {
  AddQuestion,
  CreateQuestionDTO,
} from 'domain/usecases/questions/add-question';

export class DbAddQuestion implements AddQuestion {
  constructor(
    private readonly addQuestionRepository: AddQuestionRepository,
    private readonly findExamByIdRepository: FindExamByIdRepository,
  ) {}

  async add(data: CreateQuestionDTO): Promise<QuestionModel> {
    const { exam_id, points, statement } = data;
    const exam = await this.findExamByIdRepository.findById(exam_id);
    if (exam) {
      return null;
    }

    const question = await this.addQuestionRepository.add({
      exam_id,
      points,
      statement,
    });

    return question;
  }
}
