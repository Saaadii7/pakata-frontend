import { Button, Tooltip } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';

const SimpleButton = ({extraClasses = '',onClick, type, text, size, shape, icon, ghost, disabled,block }) => {
  return (
    <Button
    type={type} 
    size={size}
    shape={shape}
    icon={icon}
    block={block}
    ghost={ghost}
    disabled={disabled}
    onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default SimpleButton
