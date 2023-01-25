export interface MainNoteI {
  _id: string;
  note: string;
  date: Date;
  timestamp: string;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface NotePropsI {
  note: string;
  date: Date;
}
