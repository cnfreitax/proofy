import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badResquest,
  ok,
  AddExam,
  serverError,
} from './add-exame-controller-imports';

export class AddExameController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addExame: AddExam,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badResquest(error);
      }

      const { name, type, questions, description } = httpRequest.body;

      const result = await this.addExame.add({
        name,
        type,
        questions,
        description,
      });
      return ok(result);
    } catch (err) {
      console.log(err);
      return serverError(err);
    }
  }
}
