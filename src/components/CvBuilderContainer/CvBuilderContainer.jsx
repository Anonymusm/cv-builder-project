import { useEffect, useState } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Education from "../Education/Education";
import WorkExp from "../WorkExp/WorkExp";

export default function CvBuilderContainer() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [step, setStep] = useState(1);
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [startOfStudy, setStartOfStudy] = useState("");
  const [endOfStudy, setEndOfStudy] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startOfWorking, setStartOfWorking] = useState("");
  const [endOfWorking, setEndOfWorking] = useState("");

  // componentDidMount

  useEffect(() => {
    const savedData = localStorage.getItem("cv_data");

    if (savedData) {
      const parsed = JSON.parse(savedData);

      setNameValue(parsed.nameValue || "");
      setMailValue(parsed.mailValue || "");
      setNumberValue(parsed.numberValue || "");

      setSchool(parsed.school || "");
      setStudyTitle(parsed.studyTitle || "");
      setStartOfStudy(parsed.startOfStudy || "");
      setEndOfStudy(parsed.endOfStudy || "");

      setCompanyName(parsed.companyName || "");
      setPosition(parsed.position || "");
      setResponsibilities(parsed.responsibilities || "");
      setStartOfWorking(parsed.startOfWorking || "");
      setEndOfWorking(parsed.endOfWorking || "");
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    const dataToSave = {
      nameValue,
      mailValue,
      numberValue,
      school,
      studyTitle,
      startOfStudy,
      endOfStudy,
      companyName,
      position,
      responsibilities,
      startOfWorking,
      endOfWorking,
    };

    localStorage.setItem("cv_data", JSON.stringify(dataToSave));
  }, [
    nameValue,
    mailValue,
    numberValue,
    school,
    studyTitle,
    startOfStudy,
    endOfStudy,
    companyName,
    position,
    responsibilities,
    startOfWorking,
    endOfWorking,
  ]);

  function handleNumberChange(e) {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setNumberValue(onlyNums);
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleStudyTitleChange(e) {
    setStudyTitle(e.target.value);
  }

  function handleStartOfStudyChange(e) {
    setStartOfStudy(e.target.value);
  }

  function handleEndOfStudyChange(e) {
    setEndOfStudy(e.target.value);
  }

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }

  function handleStartOfWorkingChange(e) {
    setStartOfWorking(e.target.value);
  }

  function handleEndOfWorkingChange(e) {
    setEndOfWorking(e.target.value);
  }

  function handleNameChange(e) {
    setNameValue(e.target.value);
  }

  function handleMailChange(e) {
    setMailValue(e.target.value);
  }

  function handleEditClick() {
    setIsEditing(true);
    setIsSubmitted(false);
  }

  function handleNextClick() {
    setStep((prev) => prev + 1);
  }

  function handleBackClick() {
    setStep((prev) => prev - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    setIsEditing(false);
  }

  //   if(step > 1) {
  //     return <button onClick={handleBackClick}>Back</button>
  //   }

  return (
    <>
      <div className="container">
        <h1 className="title">CV Aplication</h1>
        {/* Контент кроків окремо */}
        {step === 1 && (
          <PersonalInfo
            nameChange={handleNameChange}
            nameValue={nameValue}
            mailChange={handleMailChange}
            mailValue={mailValue}
            numberChange={handleNumberChange}
            numberValue={numberValue}
          />
        )}

        {step === 2 && (
          <Education
            schoolChange={handleSchoolChange}
            schoolValue={school}
            studyTitleChange={handleStudyTitleChange}
            studyTitleValue={studyTitle}
            startStudyChange={handleStartOfStudyChange}
            startStudyValue={startOfStudy}
            endStudyChange={handleEndOfStudyChange}
            endStudyValue={endOfStudy}
          />
        )}
        {step === 3 && (
          <WorkExp
            companyNameChange={handleCompanyNameChange}
            companyNameValue={companyName}
            positionChange={handlePositionChange}
            positionValue={position}
            responsibilitiesChange={handleResponsibilitiesChange}
            responsibilitiesValue={responsibilities}
            startOfWorkingChange={handleStartOfWorkingChange}
            startOfWorkingValue={startOfWorking}
            endOfWorkingChange={handleEndOfWorkingChange}
            endOfWorkingValue={endOfWorking}
            onSubmit={handleSubmit}
            editing={isEditing}
            submitted={isSubmitted}
            name={nameValue}
            number={numberValue}
            mail={mailValue}
            editClick={handleEditClick}
            startStudy={startOfStudy}
            endStudy={endOfStudy}
            school={school}
            studyTitle={studyTitle}
          />
        )}
        <div className="btn__wrapper">
          {step > 1 && (
            <button
              className="back__btn"
              onClick={handleBackClick}
              type="button"
            >
              Back
            </button>
          )}

          {step !== 3 && (
            <button
              className="next__btn"
              onClick={handleNextClick}
              type="button"
              // Ось головна зміна:
              disabled={
                (step === 1 && (!nameValue || !mailValue || !numberValue)) ||
                (step === 2 &&
                  (!school || !studyTitle || !startOfStudy || !endOfStudy))
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
