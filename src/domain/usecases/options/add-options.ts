type Option = {
  question_id: string;
  valeu: string;
  correct: boolean;
};

export type CreateOptionDTO = {
  options: Option[];
};

export interface AddOptions {
  add: (data: CreateOptionDTO) => Promise<void>;
}
