import { useEffect, useState } from 'react';
import { t } from 'i18next';

import NotesApi from '../../Api/Notes/Notes';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Note from './Note/Note';
import { MainNoteI } from '../../Api/Notes/types';

function Main() {

  const [notes, setNotes] = useState<MainNoteI[] | null>(null);
  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await NotesApi.getAll();
      setNotes(notes)
    }
    fetchNotes();
  }, []);

  const renderNotes = () => {
    return notes ? 
      notes.map(({ _id, note, date }) => <Note key={_id} note={note} date={date} />) :
      null
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5">
        <Col lg={3}>
          <h1 className="text-center">
            {t('main.title')}
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">
        {renderNotes()}      
      </Row>
    </Container>
  );
}

export default Main;
