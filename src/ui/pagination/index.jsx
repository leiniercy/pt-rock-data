'use client'

import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { IconArrowLeft, IconArrowRigth } from '../icons/custom-icons'

const Pagination = ({ className, totalPages, currentPage, setCurrentPage, variant = 'orange' }) => {
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    } else if (currentPage <= 3) {
      return [1, 2, 3, 4, 5]
    } else if (currentPage >= totalPages - 2) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    } else {
      return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
    if (currentPage === totalPages) {
      setCurrentPage(1)
    }
  }
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
    if (currentPage === 1) {
      setCurrentPage(totalPages)
    }
  }

  return (
    <div className={classNames('flex flex-row justify-center items-center gap-[1rem]', className)}>
      {/* Navigation left */}
      <div
        className={classNames(
          'relative flex flex-row gap-[8px]  bg-white-100 h-[40px] px-[1rem] rounded-[6px] z-50 justify-center items-center cursor-pointer'
        )}
        onClick={() => handlePrevPage()}
      >
        <IconArrowLeft color='#FF7500' />
        <label className='font-lato text-[#FF7500] font-semibold text-[16px] leading-[24px]'>
          Anterior
        </label>
      </div>

      {/* Paginacion */}
      <div className='flex-1 flex flex-row justify-center items-center gap-[0.5rem]'>
        {getPageNumbers().map((number) => (
          <button
            className={classNames(
              'h-[35px] w-[35px] rounded-[6px] font-lato font-semibold text-center text-[#FF7500] text-[14px] leading-[20px] px-[12px]',
              currentPage === number && variant === 'orange' && 'bg-orange-500 text-white',
              currentPage === number && variant === 'blue' && 'bg-blue-500 text-white'
            )}
            key={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Navigation right */}
      <div
        className={classNames(
          'relative flex flex-row gap-[8px] items-center justify-center bg-white-100 h-[40px] px-[1rem] rounded-[6px] z-50 cursor-pointer'
        )}
        onClick={() => handleNextPage()}
      >
        <label className='font-lato text-[#FF7500] font-semibold text-[16px] leading-[24px]'>
          Siguiente
        </label>
        <IconArrowRigth color='#FF7500' />
      </div>
    </div>
  )
}

Pagination.propTypes = {
  /**
   * Total de páginas en tu paginación
   * **/
  totalPages: PropTypes.number.isRequired,
  /**
   * Página actual
   * **/
  currentPage: PropTypes.number.isRequired,
  /**
   * función para modificar la página actual
   * **/
  setCurrentPage: PropTypes.func.isRequired
}

export default Pagination
