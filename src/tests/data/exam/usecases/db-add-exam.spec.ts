import { AddExamRepository } from 'data/exam/protocols/add-account-repo';
import { fakeExam } from '../../../domain/usecases/models';
import { DbAddExam } from '../../../../data/exam/usecases/add/db-add-exam';
import { AddExamRepositorySpy } from '../../mocks';

type Sut = {
  sut: DbAddExam;
  addExamSpy: AddExamRepository;
};

const mockSut = (): Sut => {
  const addExamSpy = new AddExamRepositorySpy();
  const sut = new DbAddExam(addExamSpy);
  return {
    sut,
    addExamSpy,
  };
};

describe('DbAddExame', () => {
  it('should return null if AddExamRepository returns null', async () => {
    const { sut, addExamSpy } = mockSut();
    jest.spyOn(addExamSpy, 'add').mockReturnValueOnce(null);
    const dataReturn = await sut.add(fakeExam());
    expect(dataReturn).toBe(null);
  });

  it('should return a exam proof on succes repsotory success', async () => {
    const { sut } = mockSut();
    const dataReturn = await sut.add(fakeExam());
    expect(dataReturn).toEqual(fakeExam());
  });
});
