import { DialogHeader } from '@material-tailwind/react'
import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const CustomModalHeader = ({
  className,
  children,
  onClick,
  placeholder,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  ...props
}) => {
  return (
    <DialogHeader
      className={classNames(className)}
      placeholder={placeholder}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      {...props}
    >
      {children}
    </DialogHeader>
  )
}

CustomModalHeader.propTypes = {
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

export default CustomModalHeader
