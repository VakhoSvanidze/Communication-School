
function Input({htmlFor, title, id, placeholder, value, set}) {
  return (
    <label htmlFor={htmlFor}>
        {title}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => set(e.target.value)}
          />
      </label>
  )
}

export default Input;