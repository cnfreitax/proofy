import { DeleteExam } from '../../../../domain/usecases/exames/delete-exam';
import { ExameModel } from '../../../../domain/models/exames';
import { DeleteExamRepository } from '../../protocols';

export class DbDeleteExam implements DeleteExam {
  constructor(private readonly deleteExamRepository: DeleteExamRepository) {}
  async delete(id: string): Promise<ExameModel> {
    const exam = await this.deleteExamRepository.delete(id);
    if (exam) {
      return exam;
    }

    return null;
  }
}
