export default function Education({
  schoolChange,
  schoolValue,
  studyTitleChange,
  studyTitleValue,
  startStudyChange,
  startStudyValue,
  endStudyChange,
  endStudyValue,
}) {
  const minDate = "1970-01-01";
  return (
    <div className="wrapper">
      <h3 className="wr_title">Education</h3>
      <form>
        <label>
          School Name:
          <input type="text" onChange={schoolChange} value={schoolValue} placeholder="Gymnasium Potter"/>
        </label>
        <label>
          Title of Study:
          <input
            type="text"
            onChange={studyTitleChange}
            value={studyTitleValue}
            placeholder="Title of Study"
          />
        </label>
        <label>
          Start of Studying:
          <input
            type="date"
            min={minDate}
            onChange={startStudyChange}
            value={startStudyValue}
          />
        </label>
        <label>
          End of Studying:
          <input
            type="date"
            onChange={endStudyChange}
            value={endStudyValue}
            min={startStudyValue || minDate}
          />
        </label>
      </form>
    </div>
  );
}
