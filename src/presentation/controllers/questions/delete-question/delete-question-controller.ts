import {
  Controller,
  HttpRequest,
  HttpResponse,
  forbidden,
  serverError,
  DeleteQuestion,
  InvalidParamError,
  noContent,
} from './delete-question-controller-imports';

export class DeleteQuestionController implements Controller {
  constructor(private readonly deletQuestion: DeleteQuestion) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const success = await this.deletQuestion.delete(id);
      if (!success) {
        return forbidden(new InvalidParamError(`Cannot delete with ${id} id`));
      }

      return noContent();
    } catch (error) {
      serverError(error);
    }
  }
}
