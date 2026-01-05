export default function ShowInfo({
  startWork,
  endWork,
  startStudy,
  endStudy,
  school,
  studyTitle,
  company,
  position,
  responsibilities,
  name,
  mail,
  number,
  editClick
}) {
  return (
    <>
    <h2 className="info__title">Your information</h2>
      <div className="info__wrapper">
        <div className="personal__wrapper">
          <h3><b>Name: </b> {name}</h3>
          <p><b>Email: </b>{mail}</p>
          <p><b>Number: </b>{number}</p>
        </div>
        <div className="education__wraper">
          <h3><b>School: </b>{school}</h3>
          <p><b>Study Title: </b>{studyTitle}</p>
          <p><b>Started studying: </b>{startStudy}</p>
          <p><b>Ended studying: </b>{endStudy}</p>
        </div>
        <div className="work__wrapper">
          <h3><b>Company: </b>{company ? `${company}` : "--"}</h3>
          <p><b>Position: </b>{position ? `${position}` : "--"}</p>
          <p><b>Responsibilities: </b>{responsibilities ? `${responsibilities}` : "--"}</p>
          <p><b>Started working: </b>{startWork ? `${startWork}` : "--"}</p>
          <p><b>Ended working: </b>{endWork ? `${endWork}` : "--"}</p>
        </div>
        <button onClick={editClick}>Edit my resume</button>
      </div>
    </>
  );
}
