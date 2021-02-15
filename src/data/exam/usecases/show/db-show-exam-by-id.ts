import { FindExamByIdRepository } from '../../../../data/exam/protocols';
import { ShowExam } from '../../../../domain/usecases/exames/show-exams-by-id';
import { ExameModel } from '../add/exam-imports';

export class DbShowExam implements ShowExam {
  constructor(
    private readonly showExamByIdRepository: FindExamByIdRepository,
  ) {}

  async findById(id: string): Promise<ExameModel> {
    const exam = await this.showExamByIdRepository.findById(id);
    return exam;
  }
}
