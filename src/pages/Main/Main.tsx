import { useEffect, useState } from 'react';
import { t } from 'i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NotesApi from '../../Api/Notes/Notes';
import { MainNoteI } from '../../Api/Notes/types';

import Note from './Note/Note';

const Main = () => {
  const [notes, setNotes] = useState<MainNoteI[] | null>(null);
  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await NotesApi.getAll();
      setNotes(fetchedNotes);
    };
    fetchNotes();
  }, []);

  const renderNotes = () => {
    return notes
      ? notes.map(({ _id, note, date, edits, isEdited }) => (
          <Note
            key={_id}
            note={note}
            date={date}
            edits={edits}
            isEdited={isEdited}
          />
        ))
      : null;
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5">
        <Col lg={3}>
          <h1 className="text-center">{t('main.title')}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">{renderNotes()}</Row>
    </Container>
  );
};

export default Main;
