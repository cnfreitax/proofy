import { AddExamRepository } from 'data/exam/protocols/add-account-repo';
import { AddExam, AddExameParams, ExameModel } from './exam-imports';
export class DbAddExam implements AddExam {
  constructor(private readonly addExamRepository: AddExamRepository) {}

  async add(data: AddExameParams): Promise<ExameModel> {
    const exam = await this.addExamRepository.add(data);
    if (!exam) {
      return null;
    }
    return exam;
  }
}
