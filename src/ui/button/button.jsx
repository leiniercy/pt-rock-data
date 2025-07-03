import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // className={buttonClasses.trim()}
      className={className.trim()}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /**
   * Funcion que describe el comportamiento del boton
   * **/
  onClick: PropTypes.func,
  /**
   * Las variantes de color predefinidos son 'primary' | 'secondary' | 'danger'
   * ***/
  variant: PropTypes.string,
  /**
   * Las tamaños del botton predefinidos son 'small' | 'medium' | 'large'
   * ***/
  size: PropTypes.string,
  /**
   * Las tipos del botton predefinidos son 'button' | 'submit' | 'reset'
   * ***/
  type: PropTypes.string,
  /**
   * Para establecer estilos predefinidos
   * ***/
  className: PropTypes.string,
  /**
   * Variable que indica si el boton se encuentra activo o no
   * ***/
  disabled: PropTypes.bool
}

export default Button
