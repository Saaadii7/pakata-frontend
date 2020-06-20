import { useState } from 'react'
import { validatePresence } from '../../modules/Validators'

const NOOP = e => e

const Input = ({
  addon,
  disabled = false,
  formatter = NOOP,
  label,
  name,
  onChange,
  parser = NOOP,
  prepend,
  placeholder,
  titleText,
  type,
  validations = [],
  value
}) => {
  const [errors, setErrors] = useState([])

  const handleChange = (event) => {
    const newValue = parser(event.target.value)
    onChange(newValue)
    const newErrors = validations.map((validation) => validation(newValue))
      .filter((error) => error)
    setErrors(newErrors)
  }

  const isValid = () => (errors.length === 0)

  const Errors = ({ errors }) => {
    if (isValid()) return null

    return (
      <div className='flex'>
        <div className='w-4/12' />
        <ul className='mb-2 text-argo-secondary-2 text-sm w-8/12'>
          {errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
      </div>
    )
  }
  const bgColor = disabled ? 'bg-argo-secondary-8' : 'bg-white'
  const rounded = () => {
    if (prepend && addon) {
      return null
    } else if (addon) {
      return 'rounded-l-lg'
    } else if (prepend) {
      return 'rounded-r-lg'
    } else {
      return 'rounded-lg'
    }
  }

  return (
    <>
      <div className={`${isValid() ? 'mb-5' : 'mb-1'} flex`}>
        <label className='font-bold pr-2 py-2 text-gray-700 w-4/12' htmlFor={name}>{label}</label>
        <div className='flex h10 items-center w-8/12'>
          {prepend &&
            <span className='border-2 border-r-0 border-argo-secondary-8 border-solid flex h-full items-center rounded-l-lg leading-normal text-argo-primary-1 focus:outline-none focus:shadow-outline px-3 whitespace-no-wrap text-grey-dark text-sm'>
              {prepend}
            </span>}
          <input
            className={`appearance-none ${bgColor} focus:outline-none border-2
                        border-argo-secondary-8 border-solid
                        focus:shadow-outline pl-8 pr-3 py-2 ${rounded()}
                        text-argo-primary-1 w-full shadow-none`}
            disabled={disabled}
            id={name}
            name={name}
            placeholder={placeholder}
            value={formatter(value)}
            onChange={handleChange}
            required={validations.includes(validatePresence)}
            title={titleText}
            type={type}
          />
          {addon &&
            <span className='border-2 border-l-0 border-argo-secondary-8 border-solid flex h-full items-center rounded-r-lg leading-normal text-argo-primary-1 focus:outline-none focus:shadow-outline px-3 whitespace-no-wrap text-grey-dark text-sm'>
              {addon}
            </span>}
        </div>
      </div>
      <Errors errors={errors} />
    </>
  )
}

export default Input
