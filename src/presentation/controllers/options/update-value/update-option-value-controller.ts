import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  UpdateValueOption,
  serverError,
  forbidden,
  ok,
  badResquest,
  InvalidParamError,
} from './update-option-value-controller-imports';

export class UpdateOptionValueController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly updateValueOption: UpdateValueOption,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const errors = this.validation.validate(httpRequest.body);
      if (errors) {
        return badResquest(errors);
      }
      const { id } = httpRequest.params;
      const { value } = httpRequest.body;
      const optionUpdated = await this.updateValueOption.update(id, value);
      if (!optionUpdated) {
        return forbidden(
          new InvalidParamError(` Cannot find option with ${id} id`),
        );
      }

      return ok(optionUpdated);
    } catch (error) {
      return serverError(error);
    }
  }
}
