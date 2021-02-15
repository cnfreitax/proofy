export enum ProofType {
  ONLINE = 'online',
  PRESENTIAL = 'presential',
}

export type ExameModel = {
  id: string;
  name: string;
  description: string;
  type: string;
  created_at: Date;
  updated_at: Date;
};
