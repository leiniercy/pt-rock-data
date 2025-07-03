import React, { JSX } from 'react'
import PropTypes from 'prop-types'

type TableCellValue = string | number | boolean | React.ReactNode | null | undefined

interface CustomTableProps {
  tableHeaders?: string[]
  tableRows?: Array<Record<string, TableCellValue>>
}

const CustomTable = ({ tableHeaders, tableRows }: CustomTableProps): JSX.Element => {
  return (
    <table className='w-full min-w-max table-auto'>
      <thead>
        <tr>
          {tableHeaders?.map((head) => (
            <th key={head} className='relative p-4'>
              <div className='relative w-full flex flex-row items-center justify-start'>
                <span className='font-normal font-poppins leading-none opacity-70 text-base text-black'>
                  {head}
                </span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row)?.map((info, cellIndex) => {
              const isPrimitive = ['string', 'number', 'boolean'].includes(typeof info)
              return (
                <td key={`${rowIndex}-${cellIndex}`} className='relative p-4'>
                  <div className='relative w-full flex flex-row items-center justify-start'>
                    {isPrimitive && (
                      <span className='font-normal font-poppins leading-normal text-black text-base'>
                        {String(info)}
                      </span>
                    )}
                    {!isPrimitive && (
                      info // Renderiza directamente componentes React
                    )}
                  </div>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

CustomTable.propTypes = {
  /**
   * Listado de encabezados de la tabla
   */
  tableHeaders: PropTypes.array,
  /**
   * Listado de objetos que contiene la tabla
   * Puede incluir strings, números, booleanos o componentes React
   */
  tableRows: PropTypes.array
}

export default CustomTable
