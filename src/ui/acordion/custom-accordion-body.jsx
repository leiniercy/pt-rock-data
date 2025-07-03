import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AccordionBody } from '@material-tailwind/react'

function CustomAccordionBody ({ className, text, children, ...props }) {
  return (
    <AccordionBody className={classNames(className)} {...props}>
      {children || text}
    </AccordionBody>
  )
}

CustomAccordionBody.propTypes = {
  /**
   * Para establecer estilos predefinidos
   */
  className: PropTypes.string,
  /**
   * Texto del header (alternativa a children)
   */
  text: PropTypes.string,
  /**
   * Contenido children
   */
  children: PropTypes.node
}

export default CustomAccordionBody
