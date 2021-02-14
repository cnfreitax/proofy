import { DbAddQuestion } from '../../../../data/questions/usecases/addNewQuestion/db-add-question';
import {
  AddQuestionRepositorySpy,
  FindExamByIdSpy,
} from '../../../../tests/data/mocks';
import { AddQuestionRepository } from '../../../../data/questions/protocols/add-question-repository';
import {
  fakeQuestionModel,
  fakeQuestionParams,
} from '../../../domain/usecases/models';

type Sut = {
  sut: AddQuestionRepository;
  fakeQuestionRepositorySpy: AddQuestionRepositorySpy;
  fakeExamRepositorySpy: FindExamByIdSpy;
};

const mockSut = (): Sut => {
  const fakeQuestionRepositorySpy = new AddQuestionRepositorySpy();
  const fakeExamRepositorySpy = new FindExamByIdSpy();
  const sut = new DbAddQuestion(
    fakeQuestionRepositorySpy,
    fakeExamRepositorySpy,
  );

  return {
    sut,
    fakeExamRepositorySpy,
    fakeQuestionRepositorySpy,
  };
};

describe('AddQuestion DB', () => {
  // it('should return trows if QUESTION REPOSITORY throws', async () => {
  //   const { sut, fakeQuestionRepositorySpy, fakeExamRepositorySpy } = mockSut();
  //   jest
  //     .spyOn(fakeQuestionRepositorySpy, 'add')
  //     .mockImplementationOnce(throwError());
  //   const result = sut.add(fakeQuestionParams());
  //   await expect(result).rejects.toThrow();
  // });

  it('should reutrn null if EXAM REPOSITORY return a exam by id', async () => {
    const { sut } = mockSut();
    const result = await sut.add(fakeQuestionParams());
    expect(result).toBe(null);
  });

  it('should call method add from repository with correct values', async () => {
    const { sut, fakeQuestionRepositorySpy, fakeExamRepositorySpy } = mockSut();
    fakeExamRepositorySpy.examModel = null;
    const spyRepsoitory = jest.spyOn(fakeQuestionRepositorySpy, 'add');
    await sut.add(fakeQuestionParams());
    expect(spyRepsoitory).toHaveBeenCalledWith(fakeQuestionParams());
  });

  it('should return question on success', async () => {
    const { sut, fakeExamRepositorySpy } = mockSut();
    fakeExamRepositorySpy.examModel = null;
    const result = await sut.add(fakeQuestionParams());
    expect(result).toEqual(fakeQuestionModel());
  });
});
