import classNames from 'classnames'
import ShapeGraphic from './shpes-graphic'

export default function HistoricalRatiopurchase ({ className }) {
  return (
    <section
      className={classNames(
        'relative flex flex-col p-4 gap-4 items-start justify-start bg-[#fff] w-[100%] h-[100%] rounded-xl shadow-lg',
        'border border-gray-200',
        className
      )}
    >
      <header className='relative flex flex-row gap-4 items-center justify-between w-[100%]'>
        <h1 className='font-semibold text-black text-[18px] text-left'>Historico de Ratio de Compras</h1>
      </header>
      <article className='relative block overflow-auto h-[500px] w-[100%]'>
        <ShapeGraphic />
      </article>
    </section>
  )
}
