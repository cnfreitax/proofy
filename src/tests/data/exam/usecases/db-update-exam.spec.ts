import { fakeExamToUpdate } from '../../../domain/usecases/models';
import { DbUpdateExam } from '../../../../data/exam/usecases/update/db-update-exam';
import { FindExamByIdSpy, UpdateExamRepositorySpy } from '../../../data/mocks';

type Sut = {
  sut: DbUpdateExam;
  findExamByIdSpy: FindExamByIdSpy;
  updateExamSpy: UpdateExamRepositorySpy;
};

const mockSut = (): Sut => {
  const findExamByIdSpy = new FindExamByIdSpy();
  const updateExamSpy = new UpdateExamRepositorySpy();
  const sut = new DbUpdateExam(findExamByIdSpy, updateExamSpy);
  return {
    sut,
    findExamByIdSpy,
    updateExamSpy,
  };
};

describe('DBUpdateExam', () => {
  it('should call findById method from repository with correct id from data provided ', async () => {
    const { sut, findExamByIdSpy } = mockSut();
    const spyMethod = jest.spyOn(findExamByIdSpy, 'findById');
    await sut.update(fakeExamToUpdate());
    expect(spyMethod).toHaveBeenCalledWith(fakeExamToUpdate().id);
  });

  it('should return null if findById returns null', async () => {
    const { sut, findExamByIdSpy } = mockSut();
    findExamByIdSpy.examModel = null;
    const result = await sut.update(fakeExamToUpdate());
    expect(result).toBe(null);
  });

  it('should call update method from repository with correct values', async () => {
    const { sut, updateExamSpy } = mockSut();
    const spyMethod = jest.spyOn(updateExamSpy, 'update');
    await sut.update(fakeExamToUpdate());
    expect(spyMethod).toHaveBeenCalledWith(fakeExamToUpdate());
  });

  it('should return updated exam on success', async () => {
    const { sut, updateExamSpy } = mockSut();
    const result = await sut.update(fakeExamToUpdate());
    expect(result).toEqual(updateExamSpy.examModel);
  });

  it('should return null if update method returns null', async () => {
    const { sut, updateExamSpy } = mockSut();
    updateExamSpy.examModel = null;
    const result = await sut.update(fakeExamToUpdate());
    expect(result).toBe(null);
  });
});
