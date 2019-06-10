export enum Types {
  Lanes = 'Lanes',
  Jobs = 'Jobs',
}

export interface FileType {
  name: Types;
  id: number;
  fields: string[];
}
