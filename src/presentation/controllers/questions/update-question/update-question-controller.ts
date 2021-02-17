import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badResquest,
  serverError,
  UpdateQuestion,
  forbidden,
  InvalidParamError,
  ok,
} from './update-question-controller-imports';

export class UpdateQuestionController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly updateQuestion: UpdateQuestion,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { statement, points } = httpRequest.body;
      const { id } = httpRequest.params;
      const errors = this.validation.validate(httpRequest.body);
      if (errors) {
        return badResquest(errors);
      }

      const question = await this.updateQuestion.update({
        id,
        statement,
        points,
      });

      if (!question) {
        return forbidden(
          new InvalidParamError(`Cannot update question with ${id} id`),
        );
      }

      return ok(question);
    } catch (error) {
      return serverError(error);
    }
  }
}
