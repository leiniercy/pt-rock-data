import React from 'react'
import { LoginForm } from './login-form'
// import { PasswordRecoveryForm } from './password-recovery-form'
// import { ChangePasswordForm } from './change-password-form'
import { useTranslation } from 'next-i18next'
// import { useLoginViews } from '@hooks/use-login-views'

const LoginForms = () => {
  const { t } = useTranslation('form-login')
  // const { view, setView } = useLoginViews()
  return (
    <>
      {/* {view === 'Login' && ( */}
      <div>
        <LoginForm />
        <footer className='text-center mt-6'>
          <a
            className='text-sm text-gray-100 underline cursor-pointer'
            onClick={(e) => {
              e.preventDefault()
              // setView('PasswordRecovery') // Muestra el formulario de recuperación
            }}
          >
            {t('login-form-remind-password')}
          </a>
        </footer>
      </div>
      {/* )} */}
      {/* {view === 'PasswordRecovery' && <PasswordRecoveryForm />}
      {view === 'ChangePassword' && <ChangePasswordForm />} */}
    </>
  )
}

export default LoginForms
