import {
  Controller,
  HttpRequest,
  HttpResponse,
  serverError,
  forbidden,
  InvalidParamError,
  ok,
  ShowExamById,
  makeRandoKeyOptions,
} from './show-exam-controller-imports';

export class ShowExamController implements Controller {
  constructor(private readonly showExamById: ShowExamById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { exam_id } = httpRequest.params;

      const exam = await this.showExamById.findById(exam_id);
      if (!exam) {
        return forbidden(
          new InvalidParamError(`Not found exam with ${exam_id} id`),
        );
      }

      console.log(exam);
      const formatExam = makeRandoKeyOptions(exam);

      return ok(formatExam);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}