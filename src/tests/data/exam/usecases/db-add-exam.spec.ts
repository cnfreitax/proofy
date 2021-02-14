import { fakeCreateExamDTO, fakeExam } from '../../../domain/usecases/models';
import { DbAddExam } from '../../../../data/exam/usecases/add/db-add-exam';
import { AddExamRepsoitorySpy } from '../../mocks';
import MockDate from 'mockdate';

type Sut = {
  sut: DbAddExam;
  addExamSpy: AddExamRepsoitorySpy;
};

const mockSut = (): Sut => {
  const addExamSpy = new AddExamRepsoitorySpy();
  const sut = new DbAddExam(addExamSpy);
  return {
    sut,
    addExamSpy,
  };
};

describe('DbAddExame', () => {
  beforeEach(() => {
    MockDate.set(new Date());
  });

  afterEach(() => {
    MockDate.reset();
  });
  it('should return null if AddExamRepository returns null', async () => {
    const { sut, addExamSpy } = mockSut();
    jest.spyOn(addExamSpy, 'add').mockReturnValueOnce(null);
    const dataReturn = await sut.add(fakeCreateExamDTO());
    expect(dataReturn).toBe(null);
  });

  it('should return a exam proof on succes repsotory success', async () => {
    const { sut } = mockSut();
    const dataReturn = await sut.add(fakeCreateExamDTO());
    expect(dataReturn).toEqual(fakeExam());
  });
});
