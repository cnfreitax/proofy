import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badResquest,
  forbidden,
  InvalidParamError,
  ok,
  serverError,
} from './update-exam-controller-imports';
import { UpdateExam } from '../../../../domain/usecases/exames';

export class UpdateExamController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly updateExam: UpdateExam,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badResquest(error);
      }

      const { exam_id } = httpRequest.params;
      const { name, description, type } = httpRequest.body;
      const examUpdated = await this.updateExam.update({
        id: exam_id,
        name,
        description,
        type,
      });

      if (!examUpdated) {
        return forbidden(new InvalidParamError(`Invalid Id`));
      }

      return ok(examUpdated);
    } catch (error) {
      return serverError(error);
    }
  }
}
