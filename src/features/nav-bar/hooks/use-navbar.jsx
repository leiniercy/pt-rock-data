import { useState } from 'react'

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return {
    isOpen,
    toggleMenu
  }
}

export default useNavbar
