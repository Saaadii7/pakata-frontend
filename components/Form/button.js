const Button = ({ extraClasses = '', onClick, type, text }) => {
  return (
    <button
      className={`${extraClasses} cursor-pointer gradient-1-reverse outline-none
                 px-2 py-1 relative rounded-lg shadow text-white tracking-tighter
                 transition uppercase`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
