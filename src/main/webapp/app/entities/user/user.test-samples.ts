import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13696,
  login: 'vM5s@eNDwKj\\1qL\\|Ta\\KoJw\\wYSXz\\?q5Z',
};

export const sampleWithPartialData: IUser = {
  id: 11482,
  login: 'c4nF',
};

export const sampleWithFullData: IUser = {
  id: 4347,
  login: 'SYdu',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
