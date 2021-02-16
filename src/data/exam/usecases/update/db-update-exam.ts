// import { FindExamByIdRepository } from '../../../../data/exam/protocols';
// import { ExameModel } from '../add/exam-imports';

// export class DbShowExam implements ShowExam {
//   constructor(
//     private readonly showExamByIdRepository: FindExamByIdRepository,
//   ) {}

//   async findById(id: string): Promise<ExameModel> {
//     const exam = await this.showExamByIdRepository.findById(id);
//     return exam;
//   }
// }

import {
  FindExamByIdRepository,
  UpdateExamRepository,
} from 'data/exam/protocols';
import { UpdateExam, UpdateExamDTO } from '../../../../domain/usecases/exames';
import { ExameModel } from '../add/exam-imports';

export class DbUpdateExam implements UpdateExam {
  constructor(
    private readonly findById: FindExamByIdRepository,
    private readonly updateExam: UpdateExamRepository,
  ) {}

  async update({
    id,
    description,
    type,
    name,
  }: UpdateExamDTO): Promise<ExameModel> {
    const examExist = await this.findById.findById(id);

    if (!examExist) {
      return null;
    }

    const exam = await this.updateExam.update({
      id,
      description,
      type,
      name,
    });

    return exam;
  }
}
