import { t } from 'i18next';

import { NotePropsI } from '../../../Api/Notes/types';

const Note = ({ note, date, edits, isEdited }: NotePropsI) => {
  const formatHeaderDate = (date: Date | string) => {
    date = date.toString();
    date = date.substring(0, 16);
    date = date.replace('T', ' ');
    return date;
  };

  return (
    <div
      className="card text-white bg-dark mb-3"
      style={{ width: '18rem', margin: '5px 10px', height: '170px' }}
    >
      <div className="card-header">{formatHeaderDate(date)}</div>
      <div className="card-body">
        <p className="card-text">{note}</p>
      </div>
      {isEdited ? (
        <span title={JSON.stringify(edits, null, 4)}>
          {t(t('main.edited'))}
        </span>
      ) : null}
    </div>
  );
};

export default Note;
