import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '1d73af2a-58c0-44e7-b37e-9ef6817ca167',
};

export const sampleWithPartialData: IAuthority = {
  name: 'fe800f9d-bedf-416c-b878-a140b08adb5b',
};

export const sampleWithFullData: IAuthority = {
  name: '6abcdb67-a1eb-4e41-9e96-f44859071b95',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
