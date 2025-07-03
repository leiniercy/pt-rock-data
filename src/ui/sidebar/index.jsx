import React from 'react'
import CustomAccordion from '../acordion/custom-acordion'
import { sidebarMenu } from './sidebar-info'
import classNames from 'classnames'
import CustomAccordionIcon from '../acordion/custom-accordion-icon'

const CustomSideBar = ({ className }) => {
  const menu = sidebarMenu() ?? []
  const [open, setOpen] = React.useState('')
  const handleOpen = value => setOpen(open === value ? '' : value)

  const AcordionItem = (id, name, items) => {
    const header = (
      <label className='relative font-poppins font-semibold text-gray-600 text-base'>
        {name}
      </label>
    )

    return (
      <CustomAccordion
        key={id}
        id={id}
        header={header}
        open={open}
        icon={
          <CustomAccordionIcon
            id={id}
            open={open}
            className='h-4 w-4 text-gray-600'
          />
        }
        handleOpen={() => {
          handleOpen(id)
        }}
        className='relative w-full'
        classNameHeader='relative w-ful flex flex-row gap-2 justify-between items-center'
      >
        {items?.map(item => {
          const { id, name } = item
          return (
            <div key={id}>
              <span>{name}</span>
            </div>
          )
        })}
      </CustomAccordion>
    )
  }

  const AnotherItem = section => {
    return (
      <div>
        <label>{section}</label>
      </div>
    )
  }

  return (
    <div
      className={classNames(
        className,
        'relative w-full flex flex-col justify-start items-start gap-4'
      )}
    >
      {menu?.map(object => {
        const { id, name, subMenus } = object
        const accordion = AcordionItem(id, name, subMenus)
        if (subMenus?.length > 0) return accordion

        return AnotherItem(name)
      })}
    </div>
  )
}

export default CustomSideBar
