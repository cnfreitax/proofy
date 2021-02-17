import { UpdateOptionValueController } from 'presentation/controllers/options/update-value/update-option-value-controller';
import { Controller } from '../../../../../shared/interfaces';
import { updateOptionsValidation } from './update-option-value-factory-controller-validation';
import { DbUpdateValueOption } from '../../../../../data/options/usecases/updateOptionValue/db-updatevalue-options';
import { OptionRepsoitropy } from '../../../../../infra/db/postgres/options/typeorm/repository/db-option-repository';

export const makeUpdateOptionController = (): Controller => {
  const optionRepository = new OptionRepsoitropy();
  const dbUpdateOption = new DbUpdateValueOption(
    optionRepository,
    optionRepository,
  );
  return new UpdateOptionValueController(
    updateOptionsValidation(),
    dbUpdateOption,
  );
};
