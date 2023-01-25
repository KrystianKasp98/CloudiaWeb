import { NotePropsI } from "../../../Api/Notes/types";

function Note({ note, date }: NotePropsI) {

  const formatHeaderDate = (date: Date | string) => {
    date = date.toString();
    date = date.substring(0, 16);
    date = date.replace('T', ' ');
    return date;
  }

  return (  
    <div className="card text-white bg-dark mb-3" style={{"width": "18rem", "margin": "5px 10px"}}>
      <div className="card-header">{formatHeaderDate(date)}</div>
    <div className="card-body">
        <p className="card-text">{note}</p>
    </div>
  </div>
  );
}

export default Note;