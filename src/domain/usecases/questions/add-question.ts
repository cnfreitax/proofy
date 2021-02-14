import { QuestionModel } from 'domain/models';

export type CreateQuestionDTO = {
  exam_id: string;
  statement: string;
  points: number;
};

export interface AddQuestion {
  add: (data: CreateQuestionDTO) => Promise<QuestionModel>;
}
