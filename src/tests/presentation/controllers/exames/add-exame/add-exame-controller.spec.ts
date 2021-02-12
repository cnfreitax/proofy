import { Validation } from 'shared/interfaces';
import { badResquest, ok } from '../../../../../shared/utils/http/http-helpers';
import { AddExameController } from '../../../../../presentation/controllers/exames/add-exame/add-exame-controller';
import { mockValidation, mockFakeRequest } from '../../../mocks';
import { AddExam } from '../../../../../domain/usecases/exames';
import { mockAddExame } from '../../../../domain/usecases/mocks';
import { fakeExam } from '../../../../domain/usecases/models';

type Sut = {
  sut: AddExameController;
  validationStub: Validation;
  addExameStub: AddExam;
};

const mockSut = (): Sut => {
  const validationStub = mockValidation();
  const addExameStub = mockAddExame();
  const sut = new AddExameController(validationStub, addExameStub);
  return {
    sut,
    validationStub,
    addExameStub,
  };
};

const fakeRequest = mockFakeRequest();

describe('AddExam Controller', () => {
  it('should return Bad Request if invalid params is provided', async () => {
    const { sut, validationStub } = mockSut();
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error());
    const result = await sut.handle(fakeRequest);
    expect(result).toEqual(badResquest(new Error()));
  });

  it('should call Validation with correct values', async () => {
    const { sut, validationStub } = mockSut();
    const spyValidation = jest.spyOn(validationStub, 'validate');
    await sut.handle(fakeRequest);
    expect(spyValidation).toHaveBeenCalled();
  });

  it('should call method **add** from AddExam whit correct values', async () => {
    const { sut, addExameStub } = mockSut();
    const spyAddExame = jest.spyOn(addExameStub, 'add');
    await sut.handle(fakeRequest);
    expect(spyAddExame).toHaveBeenCalled();
  });

  it('should a exam object on success', async () => {
    const { sut } = mockSut();
    const response = await sut.handle(fakeRequest);
    expect(response).toEqual(ok(fakeExam()));
    expect(response.statusCode).toBe(200);
  });

  it('should return statusCode 500 server error if trows', async () => {
    const { sut, addExameStub } = mockSut();
    jest.spyOn(addExameStub, 'add').mockRejectedValueOnce(new Error());
    const promise = await sut.handle(fakeRequest);
    expect(promise.statusCode).toBe(500);
  });
});
