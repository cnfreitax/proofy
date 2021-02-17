import { Router } from 'express';
import { makeAddOptionsController } from 'main/factories/controllers/options/add/add-options-controller-facotry';
import { makeUpdateOptionController } from 'main/factories/controllers/options/update/update-option-value-factory-controller';
import { adapterRouter } from '../adapters/express-route-adapter';

export default (router: Router): void => {
  router.post(
    '/:question_id/options',
    adapterRouter(makeAddOptionsController()),
  );
  router.put('/option/:id', adapterRouter(makeUpdateOptionController()));
};
