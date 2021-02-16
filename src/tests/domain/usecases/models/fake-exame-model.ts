import {
  AddExameParams,
  UpdateExamDTO,
} from '../../../../domain/usecases/exames';
import { ExameModel, ProofType } from '../../../../domain/models';

export const fakeExam = (): ExameModel => ({
  id: 'any_id',
  name: 'any_name',
  type: ProofType.ONLINE,
  description: 'any_description',
  created_at: new Date(),
  updated_at: new Date(),
});

export const fakeCreateExamDTO = (): AddExameParams => ({
  name: 'any_name',
  description: 'any_description',
  type: ProofType.ONLINE,
});

export const fakeExamToUpdate = (): UpdateExamDTO => ({
  id: 'any_anothe_id',
  name: 'any_name',
  description: 'any_description',
  type: ProofType.ONLINE,
});
