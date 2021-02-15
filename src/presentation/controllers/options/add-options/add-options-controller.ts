import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  badResquest,
  forbidden,
  FindQuestionByIdRepository,
  InvalidParamError,
  AddOptions,
  noContent,
  serverError,
  validCorrectOptionsAmount,
} from './add-options-controller-improts';

export class AddOptionsController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly findQuestionById: FindQuestionByIdRepository,
    private readonly addOptions: AddOptions,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badResquest(error);
      }
      const { question_id } = httpRequest.params;
      const { options } = httpRequest.body;

      const question = await this.findQuestionById.findById(question_id);
      if (!question) {
        return forbidden(new InvalidParamError('Question not found'));
      }

      if (question.options[0]) {
        return forbidden(
          new InvalidParamError('This question already has answers registered'),
        );
      }

      const correctValues = validCorrectOptionsAmount(options);
      if (correctValues > 1) {
        return forbidden(
          new InvalidParamError('Many correct values to same question'),
        );
      }

      if (options.length > 5 || options.length < 5) {
        return forbidden(
          new InvalidParamError(
            'It is necessary to register 5 options for response',
          ),
        );
      }

      await this.addOptions.add(httpRequest.body);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
