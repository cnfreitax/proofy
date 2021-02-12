import { ExameModel } from '../../../../domain/models';

export const fakeExam = (): ExameModel => ({
  id: 'any-id',
  name: 'any_name',
  type: 'any-type',
  description: 'any-description',
  questions: [],
});
