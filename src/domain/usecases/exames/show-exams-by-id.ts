import { ExameModel } from '../../../domain/models';

export interface ShowExamById {
  findById: (id: string) => Promise<ExameModel>;
}
