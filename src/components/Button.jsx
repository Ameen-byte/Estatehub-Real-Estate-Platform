import './components.css'

function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false }) {
  return <button className={`button button-${variant}`} disabled={disabled} onClick={onClick} type={type}>{children}</button>
}

export { Button }
export default Button