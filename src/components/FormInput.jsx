import "../styles/FormInput.scss"

function FormInput() {
  return (
    <div id="FormInput">
      <form className="form">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FormInput;