import { ProofType } from '../../../domain/models';
import { HttpRequest } from '../../../shared/interfaces';

export const mockFakeRequest = (): HttpRequest => ({
  body: {
    id: 'any_exam_id',
    name: 'any_exam',
    description: 'any_description',
    type: ProofType.ONLINE,
  },
});
