import ShowInfo from "../ShowInfo/ShowInfo";

export default function WorkExp({
  companyNameChange,
  companyNameValue,
  positionChange,
  positionValue,
  responsibilitiesChange,
  responsibilitiesValue,
  startOfWorkingChange,
  startOfWorkingValue,
  endOfWorkingChange,
  endOfWorkingValue,
  onSubmit,
  editing,
  submitted,
  name,
  number,
  mail,
  editClick,
  startStudy,
  endStudy,
  school,
  studyTitle,
}) {
  const minDate = "1970-01-01";
  return (
    <div>
      {submitted ? (
        <ShowInfo
          startWork={startOfWorkingValue}
          endWork={endOfWorkingValue}
          startStudy={startStudy}
          endStudy={endStudy}
          school={school}
          studyTitle={studyTitle}
          company={companyNameValue}
          position={positionValue}
          responsibilities={responsibilitiesValue}
          name={name}
          mail={mail}
          number={number}
          editClick={editClick}
        />
      ) : (
        <div className="wrapper">
          <h3 className="wr_title">Working Experience</h3>
          <form onSubmit={onSubmit}>
            <label>
              Company Name:
              <input
                type="text"
                onChange={companyNameChange}
                value={companyNameValue}
                placeholder="e.g. Google"
              />
            </label>
            <label>
              Position Title:
              <input
                type="text"
                onChange={positionChange}
                value={positionValue}
                placeholder="e.g. Frontend Developer"
              />
            </label>
            <label>
              Main Responsibilities:
              <textarea
               className="textarea"
                onChange={responsibilitiesChange}
                value={responsibilitiesValue}
                placeholder="Main Responsibilities"
              ></textarea>
            </label>
            <label>
              Worked From:
              <input
                type="date"
                min={minDate}
                onChange={startOfWorkingChange}
                value={startOfWorkingValue}
              />
            </label>
            <label>
              Worked To:
              <input
                type="date"
                min={startOfWorkingValue || minDate}
                onChange={endOfWorkingChange}
                value={endOfWorkingValue}
              />
            </label>
            <button>{editing ? "Save Changes" : "Send Resume"}</button>
          </form>
        </div>
      )}
    </div>
  );
}
