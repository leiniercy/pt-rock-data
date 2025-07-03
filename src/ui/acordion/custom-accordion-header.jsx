import React from 'react'
import PropTypes from 'prop-types'
import { AccordionHeader } from '@material-tailwind/react'
import classNames from 'classnames'

function CustomAccordionHeader ({
  className,
  text,
  children,
  onClick,
  placeholder,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  ...props
}) {
  return (
    <AccordionHeader
      className={classNames(className)}
      onClick={onClick}
      placeholder={placeholder}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      {...props}
    >
      {text || children}
    </AccordionHeader>
  )
}

CustomAccordionHeader.propTypes = {
  /**
   * Para establecer estilos predefinidos
   */
  className: PropTypes.string,
  /**
   * Texto del header (alternativa a children)
   */
  text: PropTypes.string,
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

export default CustomAccordionHeader
