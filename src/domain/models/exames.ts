import { Questions } from './questions';

export type ExameModel = {
  id: string;
  name: string;
  description: string;
  type: string;
  questions: Questions[];
};
