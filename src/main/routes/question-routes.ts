import { Router } from 'express';
import { adapterRouter } from '../adapters/express-route-adapter';
import { addExamController } from '../factories/controllers/questions/add/add-question-factory';

export default (router: Router): void => {
  router.post('/:exam_id/question', adapterRouter(addExamController()));
};
