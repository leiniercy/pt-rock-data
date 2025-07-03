import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Dialog } from '@material-tailwind/react'
import CustomModalHeader from './custom-modal-header'
import CustomModalFooter from './custom-modal-footer'
import CustomModalBody from './custom-modal-body'

const CustomModal = ({
  open,
  handleOpen,
  className,
  classNameHeader,
  classNameBody,
  classNameFooter,
  header,
  footer,
  children,
  size,
  placeholder,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  ...props
}) => {
  return (
    <Dialog
      size={size}
      open={open}
      handler={handleOpen}
      placeholder={placeholder}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      {...props}
      className={classNames(className)}
    >
      {header && (
        <CustomModalHeader className={classNameHeader}>
          {header}
        </CustomModalHeader>
      )}
      <CustomModalBody className={classNameBody}>{children}</CustomModalBody>
      {footer && (
        <CustomModalFooter className={classNameFooter}>
          {footer}
        </CustomModalFooter>
      )}
    </Dialog>
  )
}

CustomModal.propTypes = {
  /**
   * Para establecer estilos predefinidos
   */
  className: PropTypes.string,
  /**
   * Para establecer estilos predefinidos del header
   */
  classNameHeader: PropTypes.string,
  /**
   * Para establecer estilos predefinidos del body
   */
  classNameBody: PropTypes.string,
  /**
   * Para establecer estilos predefinidos del footer
   */
  classNameFooter: PropTypes.string,
  /**
   * Función de click
   */
  onClick: PropTypes.func,
  /**
   * Contenido header
   */
  header: PropTypes.node,
  /**
   * Contenido children
   */
  children: PropTypes.node,
  /**
   * Contenido footer
   */
  footer: PropTypes.node,
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

export default CustomModal
