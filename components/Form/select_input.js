const SelectInput = ({
  callback,
  disabled,
  label,
  multiple = false,
  name,
  options = [],
  placeholder = ' ',
  required,
  stateToUpdate
}) => {
  const customSelectIcon = {
    backgroundImage: 'url("/icons/sort.svg")',
    backgroundPosition: '99% center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1em'
  }

  return (
    <>
      <div className='mb-5 flex whitespace-no-wrap relative'>
        {label && <label className='font-bold py-2 text-gray-700 w-4/12' htmlFor={name}>{label}</label>}
        <div className='flex w-8/12'>
          <select
            className='appearance-none border-2 border-argo-secondary-8 border-solid
                       pl-8 pr-8 py-2 rounded-lg text-argo-primary-1 w-full bg-white'
            id={name}
            multiple={multiple}
            name={name}
            onChange={(event) => callback(event.target.value)}
            required={required}
            style={customSelectIcon}
            value={stateToUpdate}
            disabled={disabled}
          >
            {!multiple && <option value='' hidden>{placeholder}</option>}
            {options.map(({ text, value, disabled, className }, index) => {
              return <option key={index} value={value} className={className} disabled={disabled}>{text || value}</option>
            })}
          </select>
        </div>
      </div>
    </>
  )
}

export default SelectInput
