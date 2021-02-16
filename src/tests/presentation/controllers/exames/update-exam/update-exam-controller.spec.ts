import { Validation } from '../../../../../shared/interfaces';
import { UpdateExamController } from '../../../../../presentation/controllers/exames/update-exam/update-exam-controller';
import { mockValidation } from '../../../../presentation/mocks';
import { fakeRequestUpdateExam } from '../../../../presentation/mocks/fake-request-update-exam';
import {
  badResquest,
  forbidden,
  serverError,
} from '../../../../../shared/utils/http/http-helpers';
import { UpdateExam } from '../../../../../domain/usecases/exames';
import { mockUpdateExam } from '../../../../domain/usecases/mocks/update-exam';
import { ProofType } from '../../../../../domain/models';
import { InvalidParamError } from '../../../../../shared/utils/errors';

type Sut = {
  sut: UpdateExamController;
  validationStub: Validation;
  updateExamStub: UpdateExam;
};

const mockSut = (): Sut => {
  const validationStub = mockValidation();
  const updateExamStub = mockUpdateExam();
  const sut = new UpdateExamController(validationStub, updateExamStub);
  return {
    sut,
    validationStub,
    updateExamStub,
  };
};

describe('Update Exam Controller', () => {
  it('should call validations with correct values', async () => {
    const { sut, validationStub } = mockSut();
    const spyValidation = jest.spyOn(validationStub, 'validate');
    await sut.handle(fakeRequestUpdateExam());
    expect(spyValidation).toHaveBeenCalled();
  });

  it('should return erro on validate fail', async () => {
    const { sut, validationStub } = mockSut();
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error());
    const response = await sut.handle(fakeRequestUpdateExam());
    expect(response).toEqual(badResquest(new Error()));
    expect(response.statusCode).toBe(400);
  });

  it('should call db update exam with correct values', async () => {
    const { sut, updateExamStub } = mockSut();
    const spyUpdateExam = jest.spyOn(updateExamStub, 'update');
    await sut.handle(fakeRequestUpdateExam());
    expect(spyUpdateExam).toHaveBeenCalledWith({
      id: 'any_exam_id',
      name: 'any_exam',
      description: 'any_description',
      type: ProofType.ONLINE,
    });
  });

  it('should return forbiden invalid param error if update exam returns null', async () => {
    const { sut, updateExamStub } = mockSut();
    jest.spyOn(updateExamStub, 'update').mockReturnValue(Promise.resolve(null));
    const response = await sut.handle(fakeRequestUpdateExam());
    expect(response).toEqual(forbidden(new InvalidParamError('Invalid Id')));
  });

  it('should throws if update exam throws', async () => {
    const { sut, updateExamStub } = mockSut();
    jest.spyOn(updateExamStub, 'update').mockRejectedValueOnce(new Error());
    const response = sut.handle(fakeRequestUpdateExam());
    expect(await response).toEqual(serverError(new Error()));
    expect((await response).statusCode).toBe(500);
  });

  it('should return server error if throws', async () => {
    const { sut, updateExamStub } = mockSut();
    jest.spyOn(updateExamStub, 'update').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()));
    });
    const response = sut.handle(fakeRequestUpdateExam());
    expect((await response).statusCode).toBe(500);
  });

  it('should return status code 200 and examModel on success', async () => {
    const { sut } = mockSut();
    const response = await sut.handle(fakeRequestUpdateExam());
    expect(response.statusCode).toBe(200);
  });
});
