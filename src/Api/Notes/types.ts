interface EditsI {
  note: string;
  date: Date;
  _id: string;
}

export interface MainNoteI {
  _id: string;
  note: string;
  date: Date;
  timestamp: string;
  isEdited: boolean;
  edits: EditsI[] | [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface NotePropsI {
  note: string;
  date: Date;
  edits: EditsI[] | [];
  isEdited: boolean;
}
