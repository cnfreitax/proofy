import { Validation } from '../../../../../shared/interfaces';
import { AddQuestionController } from '../../../../../presentation/controllers/questions/add-question/add-question-controller';
import { fakeAddQuestionRequest, mockValidation } from '../../../mocks';
import {
  badResquest,
  serverError,
  ok,
} from '../../../../../shared/utils/http/http-helpers';
import { AddQuestion } from '../../../../../domain/usecases/questions';
import { mockAddQuestion } from '../../../../data/questions/mock-add-question';
import { fakeQuestionModel } from '../../../../domain/usecases/models';

type Sut = {
  sut: AddQuestionController;
  validationStub: Validation;
  addQuestionStub: AddQuestion;
};

const mockSut = (): Sut => {
  const validationStub = mockValidation();
  const addQuestionStub = mockAddQuestion();
  const sut = new AddQuestionController(validationStub, addQuestionStub);
  return {
    sut,
    validationStub,
    addQuestionStub,
  };
};

describe('AddQuestion Controller', () => {
  it('should call Validation with correct values', async () => {
    const { sut, validationStub } = mockSut();
    const validationSpy = jest.spyOn(validationStub, 'validate');
    sut.handle(fakeAddQuestionRequest());
    expect(validationSpy).toHaveBeenCalled();
  });

  it('should badRequest statusCode 400 if validation return errors', async () => {
    const { sut, validationStub } = mockSut();
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error());
    const response = await sut.handle(fakeAddQuestionRequest());
    expect(response).toEqual(badResquest(new Error()));
    expect(response.statusCode).toBe(400);
  });

  it('should call AddQuestion with correct values', async () => {
    const { sut, addQuestionStub } = mockSut();
    const addQuestionSpy = jest.spyOn(addQuestionStub, 'add');
    await sut.handle(fakeAddQuestionRequest());
    expect(addQuestionSpy).toHaveBeenCalledWith({
      points: 1,
      exam_id: 'any_exam_id',
      statement: 'any_statement',
    });
  });

  it('should return anauthorized status code 403 if Addquestion returns null', async () => {
    const { sut, addQuestionStub } = mockSut();
    jest
      .spyOn(addQuestionStub, 'add')
      .mockReturnValueOnce(new Promise(resolve => resolve(null)));
    const response = await sut.handle(fakeAddQuestionRequest());
    expect(response.statusCode).toBe(403);
  });

  it('should server error status code 500 if throws', async () => {
    const { sut, addQuestionStub } = mockSut();
    jest.spyOn(addQuestionStub, 'add').mockRejectedValueOnce(new Error());
    const response = await sut.handle(fakeAddQuestionRequest());
    expect(response.statusCode).toBe(500);
    expect(response).toEqual(serverError(new Error()));
  });

  it('should return a Question object with status code 200 on success', async () => {
    const { sut } = mockSut();
    const response = await sut.handle(fakeAddQuestionRequest());
    expect(response).toEqual(ok(fakeQuestionModel()));
  });
});
