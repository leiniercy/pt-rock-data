import classNames from 'classnames'

export default function CustomAccordionIcon ({
  id,
  className,
  height,
  width,
  open
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      height={height || 24}
      width={width || 24}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={classNames(
        `${id === open ? 'rotate-180' : ''} transition-transform`,
        className
      )}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}
