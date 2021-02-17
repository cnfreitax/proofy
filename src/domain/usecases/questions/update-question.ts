import { QuestionModel } from 'domain/models';

export type UpdateQuestionDTO = {
  id: string;
  statement: string;
  points: number;
};

export interface UpdateQuestion {
  update: (data: UpdateQuestionDTO) => Promise<QuestionModel>;
}
