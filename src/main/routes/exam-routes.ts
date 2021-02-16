import { Router } from 'express';
import { makeDeleteExamFactory } from 'main/factories/controllers/exam/remove/remove-exam-controller-factory';
import { makeFactoryShowExamController } from 'main/factories/controllers/exam/show/show-exam-controller-factory';
import { mackUpdateController } from 'main/factories/controllers/exam/update/update-exam-controller-factory';
import { adapterRouter } from '../adapters/express-route-adapter';
import { addExamController } from '../factories/controllers/exam/add/add-exam-factory';

export default (router: Router): void => {
  router.post('/exam', adapterRouter(addExamController()));
  router.get('/exam/:exam_id', adapterRouter(makeFactoryShowExamController()));
  router.put('/exam/:exam_id', adapterRouter(mackUpdateController()));
  router.delete('/exam/:exam_id', adapterRouter(makeDeleteExamFactory()));
};
