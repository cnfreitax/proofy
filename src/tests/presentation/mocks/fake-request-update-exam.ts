import { ProofType } from '../../../domain/models';
import { HttpRequest } from '../../../shared/interfaces';

export const fakeRequestUpdateExam = (): HttpRequest => ({
  params: {
    exam_id: 'any_exam_id',
  },
  body: {
    name: 'any_exam',
    description: 'any_description',
    type: ProofType.ONLINE,
  },
});
