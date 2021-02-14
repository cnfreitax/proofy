import { DbAddOptions } from '../../../../data/options/usecases/addNewOptions.ts/db-add-options';
import { AddOptionsRepositorySpy } from '../../../data/mocks/option-repository-spy';
import { fakeCreateOptionDTO } from '../../../domain/usecases/models/fake-options-model';

type Sut = {
  sut: DbAddOptions;
  addOptionSpy: AddOptionsRepositorySpy;
};

const mockSut = (): Sut => {
  const addOptionSpy = new AddOptionsRepositorySpy();
  const sut = new DbAddOptions(addOptionSpy);
  return {
    sut,
    addOptionSpy,
  };
};

describe('DbAddOptions', () => {
  it('should call add method from option repository with correct value', async () => {
    const { sut, addOptionSpy } = mockSut();
    const repositorySpy = jest.spyOn(addOptionSpy, 'add');
    await sut.add(fakeCreateOptionDTO());
    expect(repositorySpy).toHaveBeenCalled();
  });
});
