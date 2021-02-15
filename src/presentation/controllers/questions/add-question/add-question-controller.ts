import { AddQuestion } from '../../../../domain/usecases/questions';
import {
  HttpRequest,
  HttpResponse,
  Controller,
  badResquest,
  Validation,
  serverError,
  ok,
  notFound,
} from './add-question-controller-imports';

export class AddQuestionController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addQuestion: AddQuestion,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const errors = this.validation.validate(httpRequest.body);
      if (errors) {
        return badResquest(errors);
      }

      const { exam_id } = httpRequest.params;
      const { statement, points } = httpRequest.body;
      const question = await this.addQuestion.add({
        exam_id,
        statement,
        points,
      });

      if (!question) {
        return notFound(`Not found exam with id ${exam_id}`);
      }
      return ok(question);
    } catch (error) {
      return serverError(error);
    }
  }
}
