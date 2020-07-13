import { SimpleButton } from '../Buttons'

const Button = ({extraClasses = '',onClick, type, text, size, shape, icon, ghost, disabled, block }) => {
  return (
    <SimpleButton
    type={type} 
    size={size}
    shape={shape}
    icon={icon}
    block={block}
    ghost={ghost}
    disabled={disabled}
    onClick={onClick}
    text={text}
    >
    </SimpleButton>
  )
}

export default Button
