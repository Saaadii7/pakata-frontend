import { Input, Tooltip} from 'antd';
import { UserOutlined, AudioOutlined } from '@ant-design/icons';

const SimpleInput = ({extraClasses = '',onChange, placeholder, type, addonBefore, addonAfter, allowClear, onPressEnter, size, disabled, loading, prefix}) => {
    return (
    <Input
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

export default SimpleInput
