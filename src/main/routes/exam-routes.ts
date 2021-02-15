import { Router } from 'express';
import { makeFactoryShowExamController } from 'main/factories/controllers/exam/show/show-exam-controller-factory';
import { adapterRouter } from '../adapters/express-route-adapter';
import { addExamController } from '../factories/controllers/exam/add/add-exam-factory';

export default (router: Router): void => {
  router.post('/exam', adapterRouter(addExamController()));
  router.get('/exam/:exam_id', adapterRouter(makeFactoryShowExamController()));
};
