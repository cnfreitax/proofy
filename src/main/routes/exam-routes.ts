import { Router } from 'express';
import { adapterRouter } from '../adapters/express-route-adapter';
import { addExamController } from '../factories/controllers/exam/add/add-exam-factory';

export default (router: Router): void => {
  router.post('/exam', adapterRouter(addExamController()));
};
