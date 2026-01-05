export default function PersonalInfo({
  nameChange,
  nameValue,
  mailChange,
  mailValue,
  numberChange,
  numberValue,
}) {
  return (
    <>
      <div className="wrapper">
        <h3 className="wr_title">Personal Information</h3>
        <form>
          <label>
            Name:
            <input type="text" onChange={nameChange} value={nameValue} placeholder="McDan"/>
          </label>
          <label>
            Email:
            <input type="email" onChange={mailChange} value={mailValue} placeholder="mcdan@example.com"/>
          </label>
          <label>
            Phone Number:
            <input type="tel" onChange={numberChange} value={numberValue} placeholder="01234567890"/>
          </label>
        </form>
      </div>
    </>
  );
}
