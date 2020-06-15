import { useTranslation } from '../../modules/I18n'

const TextInput = ({
  callback,
  disabled = false,
  extraClasses = '',
  paramName,
  placeholder,
  required,
  stateToUpdate,
  width
}) => {
  const bgColor = disabled ? 'bg-argo-secondary-8' : 'bg-white'
  const inputWidth = width ? 'width' : 'w-full'
  const { t } = useTranslation('pricing')

  return (
    <>
      <div className='mb-5 flex whitespace-no-wrap'>
        <label className='capitalize font-bold py-2 text-gray-700 w-4/12' htmlFor={paramName}>{t(paramName)}</label>
        <div className='flex w-8/12'>
          <input
            className={`appearance-none ${bgColor} ${extraClasses}
                        border-2 border-argo-secondary-8 border-solid
                        focus:outline-none
                        focus:shadow-outline ${inputWidth} pl-8 pr-3 py-2
                        rounded-lg text-argo-primary-1`}
            disabled={disabled}
            id={paramName}
            name={paramName}
            onChange={(event) => callback(event.target.value)}
            placeholder={placeholder}
            required={required}
            type='text'
            value={stateToUpdate}
          />
        </div>
      </div>
    </>
  )
}

export default TextInput
