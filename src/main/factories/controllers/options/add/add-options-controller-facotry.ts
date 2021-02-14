import { OptionRepsoitropy } from 'infra/db/postgres/options/typeorm/repository/db-option-repository';
import { QuestionRepository } from 'infra/db/postgres/question/typeorm/repository/db-question-repository';
import { AddOptionsController } from 'presentation/controllers/options/add-options/add-options-controller';
import { Controller } from '../../../../../shared/interfaces';
import { addOptionsValidation } from './add-options-controller-factory-validation';

export const makeAddOptionsController = (): Controller => {
  const questionRepository = new QuestionRepository();
  const optionsRepository = new OptionRepsoitropy();
  return new AddOptionsController(
    addOptionsValidation(),
    questionRepository,
    optionsRepository,
  );
};
