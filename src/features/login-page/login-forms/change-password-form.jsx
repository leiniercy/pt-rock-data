import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { initialFormChangePassword } from '@helpers/login-form-initial-state'
import { validationChangePassword } from '@helpers/login-form-validations'

import InputField from '@components/input/input-field'

export const ChangePasswordForm = () => {
  const { t } = useTranslation('form-change-password')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialFormChangePassword,
    resolver: yupResolver(validationChangePassword)
  })

  const onSubmit = useCallback((data) => {
    // Aquí iría la lógica para cambiar la contraseña
    console.log({ data })
    // setView('Login')
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label='Formulario de cambio de contraseña'>
      <InputField
        label={t('form-change-password-label-password', { returnObjects: true })}
        type='password'
        register={register}
        name='password'
        error={errors.password}
      />
      <InputField
        label={t('form-change-password-label-confirm-password', { returnObjects: true })}
        type='password'
        register={register}
        name='confirmPassword'
        error={errors.confirmPassword}
      />
      <div className='flex justify-end'>
        <button
          type='submit'
          className='w-1/3 p-2 rounded-2xl font-sans font-semibold text-md leading-6 text-white bg-primary hover:bg-orange-600 transition'
        >
          {t('form-change-password-button')}
        </button>
      </div>
    </form>
  )
}
