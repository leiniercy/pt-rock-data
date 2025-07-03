import React, { useMemo } from 'react'
import RakePremises from './components/rake-premises'
import StadisticsGenerals from './components/stadistics-generals'

const Dashboard = () => {
  const stadisticsGenerals = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Ratio de compra de Mercaderias',
        precentGeneral: '13%',
        precentCurrent: 7,
        precentLastYear: 20,
        objetive: 12
      },
      {
        id: 2,
        title: 'Volumen de compras',
        precentGeneral: '11500',
        precentCurrent: 14,
        precentLastYear: 12.100,
        objetive: '13200'
      },
      {
        id: 1,
        title: 'Ratio de compra de Mercaderias',
        precentGeneral: '51.500 €',
        precentCurrent: 12,
        precentLastYear: '40.200 €',
        objetive: '62.200 €'
      }
    ]
  }, [])
  return (
    <section className='relative grid grid-cols-12 gap-4 items-start justify-start w-full p-4'>
      {stadisticsGenerals.map((item) => (
        <StadisticsGenerals key={item.id} className='col-span-4' {...item} />
      ))}
      <RakePremises className='col-start-1 col-span-6' />
    </section>
  )
}

export default Dashboard
