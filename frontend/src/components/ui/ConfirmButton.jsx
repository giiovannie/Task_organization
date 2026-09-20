const ConfirmButton = ({ children, message, onConfirm, className = 'btn btn-sm btn-outline-danger' }) => {
  const confirm = () => {
    if (window.confirm(message)) onConfirm()
  }

  return <button className={className} onClick={confirm} type="button">{children}</button>
}

export default ConfirmButton
