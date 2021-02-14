import { AddExameParams } from 'domain/usecases/exames';
import { ExameModel, ProofType } from '../../../../domain/models';

export const fakeExam = (): ExameModel => ({
  id: 'any_id',
  name: 'any_name',
  type: ProofType.ONLINE,
  description: 'any_description',
  questions: [],
  created_at: new Date(),
  updated_at: new Date(),
});

export const fakeCreateExamDTO = (): AddExameParams => ({
  name: 'any_name',
  description: 'any_description',
  type: ProofType.ONLINE,
});
