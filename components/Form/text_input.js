import {SimpleInput} from '../Inputs'


const Input = ({extraClasses = '',onChange, placeholder, type, addonBefore, addonAfter, allowClear, onPressEnter, size, disabled, loading, prefix}) => {
    return (
    <SimpleInput
    type={type} 
    size={size}
    placeholder={placeholder}
    prefix={prefix}
    addonBefore={addonBefore}
    addonAfter={addonAfter}
    disabled={disabled}
    onChange={onChange}
    onPressEnter={onPressEnter}
    allowClear={allowClear}
    loading={loading}
    />
  )
}

export default Input
