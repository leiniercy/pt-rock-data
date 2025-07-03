import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { DialogFooter } from '@material-tailwind/react'

const CustomModalFooter = ({
  className,
  children,
  onClick,
  placeholder,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  ...props
}) => {
  return (
    <DialogFooter
      className={classNames(className)}
      placeholder={placeholder}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      {...props}
    >
      {children}
    </DialogFooter>
  )
}

CustomModalFooter.propTypes = {
  /**
   * Para establecer estilos predefinidos
   */
  className: PropTypes.string,
  /**
   * Función de click
   */
  onClick: PropTypes.func,
  /**
   * Contenido children
   */
  children: PropTypes.node,
  /**
   * Texto de marcador de posición
   */
  placeholder: PropTypes.string,
  /**
   * Manejador de evento al entrar el puntero
   */
  onPointerEnterCapture: PropTypes.func,
  /**
   * Manejador de evento al salir el puntero
   */
  onPointerLeaveCapture: PropTypes.func
}

export default CustomModalFooter
