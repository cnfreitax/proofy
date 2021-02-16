import {
  Controller,
  HttpRequest,
  HttpResponse,
  serverError,
  noContent,
  DeleteExam,
  InvalidParamError,
  forbidden,
} from './delete-exam-controller-imports';

export class DeleteExamController implements Controller {
  constructor(private readonly deleteExam: DeleteExam) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { exam_id } = httpRequest.params;
      const exam = await this.deleteExam.delete(exam_id);
      if (exam) {
        return noContent();
      }
      return forbidden(
        new InvalidParamError(`Could not delete with ${exam_id} id`),
      );
    } catch (error) {
      return serverError(error);
    }
  }
}
