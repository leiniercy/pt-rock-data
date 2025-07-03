import CustomTable from '@/ui/table'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import RakePremisesRatio from './rake-premises-ratio'
import RakePremisesGastos from './rake-premises-gastos'
import Button from '@/ui/button/button'
import { CloudDownload } from 'lucide-react'

export const tableExpertsHeaders = [
  'Gastos',
  'Costes',
  'Facturacion',
  'Objetivo',
  'Ratio de compras'
]

const RakePremises = ({ className }) => {
  const tableExpertsRows = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const baseCost = 8000 + i * 2000 // Coste base escalado
      const randomFactor = 0.8 + Math.random() * 0.4 // Factor aleatorio entre 0.8 y 1.2

      const costes = Math.round(baseCost * randomFactor)
      const facturacion = Math.round(costes * (1.1 + Math.random() * 0.3)) // 110-140% de costes
      const objetivo = 10 + i // Objetivo incremental
      const compras = Math.round(objetivo * (0.7 + Math.random() * 0.6)) // 70-130% del objetivo

      return {
        gastos: <RakePremisesGastos text={`Local ${i + 1}`} />,
        costes,
        facturacion,
        objetivo,
        compras: <RakePremisesRatio number={compras} />
      }
    })
  }, [])

  return (
    <section
      className={classNames(
        'relative flex flex-col p-4 gap-4 items-start justify-start bg-[#fff] w-[100%] h-[100%] rounded-xl shadow-lg',
        'border border-gray-200',
        className
      )}
    >
      <header className='relative flex flex-row gap-4 items-center justify-between w-[100%]'>
        <h1 className='font-semibold text-black text-[18px] text-left'>Rankin de Locales</h1>
        <Button className='relative flex felx-row gap-2 items-center justify-center px-4 py-2 rounded-lg border border-primary'>
          <CloudDownload height={14} color='#4f00a8' />
          <label className='text-primary text-[16px] font-poppins font-medium leading-tight text-center'>
            Descargar
          </label>
        </Button>
      </header>
      <article className='relative block overflow-auto w-[100%]'>
        <CustomTable
          className='relative w-full overflow-auto'
          tableHeaders={tableExpertsHeaders}
          tableRows={tableExpertsRows}
        />
      </article>
    </section>
  )
}

export default RakePremises
