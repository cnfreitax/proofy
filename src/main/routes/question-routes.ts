import { Router } from 'express';
import { makeDeleteQuestionController } from 'main/factories/controllers/questions/delete/delete-question-controller-factory';
import { makeUpdateQuestionController } from 'main/factories/controllers/questions/update/update-question-controller-factory';
import { adapterRouter } from '../adapters/express-route-adapter';
import { addExamController } from '../factories/controllers/questions/add/add-question-factory';

export default (router: Router): void => {
  router.post('/:exam_id/question', adapterRouter(addExamController()));
  router.put('/question/:id', adapterRouter(makeUpdateQuestionController()));
  router.delete('/question/:id', adapterRouter(makeDeleteQuestionController()));
};
