import { Validation } from '../../../../shared/interfaces';
import { AddOptionsController } from '../../../../presentation/controllers/options/add-options/add-options-controller';
import { mockValidation } from '../../../presentation/mocks';
import {
  FindQuestionByIdRepositorySpy,
  AddOptionsRepositorySpy,
} from '../../../data/mocks';
import { fakeRequestAddOption } from '../../mocks';
import {
  badResquest,
  forbidden,
} from '../../../../shared/utils/http/http-helpers';
import { InvalidParamError } from '../../../../shared/utils/errors';

type Sut = {
  sut: AddOptionsController;
  validationStub: Validation;
  findQuestionByIdRepositorySpy: FindQuestionByIdRepositorySpy;
  addOptionRepositorySpy: AddOptionsRepositorySpy;
};

const mockSut = (): Sut => {
  const validationStub = mockValidation();
  const findQuestionByIdRepositorySpy = new FindQuestionByIdRepositorySpy();
  const addOptionRepositorySpy = new AddOptionsRepositorySpy();
  const sut = new AddOptionsController(
    validationStub,
    findQuestionByIdRepositorySpy,
    addOptionRepositorySpy,
  );
  return {
    sut,
    validationStub,
    findQuestionByIdRepositorySpy,
    addOptionRepositorySpy,
  };
};

describe('AddOption Controller', () => {
  it('should call validation', async () => {
    const { sut, validationStub } = mockSut();
    const validationSpy = jest.spyOn(validationStub, 'validate');
    await sut.handle(fakeRequestAddOption());
    expect(validationSpy).toHaveBeenCalled();
  });

  it('should badRequest status code 400 if validation returns error', async () => {
    const { sut, validationStub } = mockSut();
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error());
    const result = await sut.handle(fakeRequestAddOption());
    expect(result).toEqual(badResquest(new Error()));
    expect(result.statusCode).toBe(400);
  });

  it('should call findById method from question repository with correct id', async () => {
    const { sut, findQuestionByIdRepositorySpy } = mockSut();
    const questionRepositorySpy = jest.spyOn(
      findQuestionByIdRepositorySpy,
      'findById',
    );
    await sut.handle(fakeRequestAddOption());
    expect(questionRepositorySpy).toHaveBeenCalledWith(
      fakeRequestAddOption().params.question_id,
    );
  });

  // it('should return forbiden 403 if request have many options with correct values', async () => {
  //   const { sut } = mockSut();
  //   const result = await sut.handle({
  //     body: {
  //       options: [
  //         {
  //           value: 'options 1',
  //           correct: true,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: true,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //       ],
  //     },
  //   });
  //   expect(result).toEqual(
  //     forbidden(new InvalidParamError('Question not found')),
  //   );
  //   expect(result.statusCode).toBe(403);
  // });

  // it('should return 403 forbidden if the request has less than five option options with correct values', async () => {
  //   const { sut } = mockSut();
  //   const result = await sut.handle({
  //     body: {
  //       options: [
  //         {
  //           value: 'options 1',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //         {
  //           value: 'options 2',
  //           correct: false,
  //           question_id: '0f7d872d-8b4f-450e-8f21-cff1466b25c0',
  //         },
  //       ],
  //     },
  //   });

  //   expect(result).toEqual(
  //     forbidden(
  //       new InvalidParamError(
  //         'It is necessary to register 5 options for response',
  //       ),
  //     ),
  //   );
  //   expect(result.statusCode).toBe(403);
  // });

  it('should call add method from OptionRepository with correct values', async () => {
    const { sut, addOptionRepositorySpy } = mockSut();
    const spyRepository = jest.spyOn(addOptionRepositorySpy, 'add');
    await sut.handle(fakeRequestAddOption());
    expect(spyRepository).toHaveBeenCalledWith(fakeRequestAddOption().body);
  });

  it('should throws if OptionRepoisitory throws', async () => {
    const { sut, addOptionRepositorySpy } = mockSut();
    jest
      .spyOn(addOptionRepositorySpy, 'add')
      .mockRejectedValueOnce(new Error());
    const result = await sut.handle(fakeRequestAddOption());
    expect(result.statusCode).toBe(500);
  });

  it('should return status code 204 no content on success', async () => {
    const { sut } = mockSut();
    const result = await sut.handle(fakeRequestAddOption());
    expect(result.statusCode).toBe(204);
  });

  it('should return a badRequest on findQuestionById fail', async () => {
    const { sut, findQuestionByIdRepositorySpy } = mockSut();
    findQuestionByIdRepositorySpy.questionResult = null;
    const result = await sut.handle(fakeRequestAddOption());
    expect(result).toEqual(
      forbidden(new InvalidParamError('Question not found')),
    );
    expect(result.statusCode).toBe(403);
  });
});
