import { ExameModel } from '../../../domain/models';

export interface ShowExam {
  findById: (id: string) => Promise<ExameModel>;
}
