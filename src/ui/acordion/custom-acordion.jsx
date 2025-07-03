import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Accordion } from '@material-tailwind/react'
import CustomAccordionHeader from './custom-accordion-header'
import CustomAccordionBody from './custom-accordion-body'

function CustomAccordion ({
  className,
  children,
  id,
  open,
  icon,
  placeholder,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  handleOpen,
  header,
  classNameHeader,
  ...props
}) {
  return (
    <Accordion
      id={id}
      open={open === id}
      className={classNames(className, 'overflow-hidden')}
      placeholder={placeholder}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      icon={icon}
      {...props}
    >
      {header && (
        <CustomAccordionHeader onClick={handleOpen}>
          {header}
        </CustomAccordionHeader>
      )}
      <CustomAccordionBody>{children}</CustomAccordionBody>
    </Accordion>
  )
}

CustomAccordion.propTypes = {
  /**
   * ID único del accordion
   */
  id: PropTypes.string,

  /**
   * ID del accordion abierto actualmente
   */
  open: PropTypes.string,

  /**
   * Para establecer estilos predefinidos
   */
  className: PropTypes.string,

  /**
   * Contenido children
   */
  children: PropTypes.node,

  /**
   * Ícono personalizado
   */
  icon: PropTypes.node,

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

export default CustomAccordion
