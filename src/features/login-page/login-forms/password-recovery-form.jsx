import React, { useCallback } from 'react'
import '@components/i18n'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { initialFormPasswordrecovery } from '@helpers/login-form-initial-state'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationPasswordRecovery } from '@helpers/login-form-password-recovery-validations'
import InputField from '@components/input/input-field'
import { useLoginViews } from '@hooks/use-login-views'

export const PasswordRecoveryForm = () => {
  const { t } = useTranslation('form-password-recovery')
  const { setView } = useLoginViews()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialFormPasswordrecovery,
    resolver: yupResolver(validationPasswordRecovery)
  })

  const onSubmit = useCallback((data) => {
    // Aquí iría la lógica para validar el código introducido
    console.log(data)
    setView('ChangePassword')
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} aria-label='Formulario de inicio de sesión'>
        <InputField
          label={t('form-recovery-phone', { returnObjects: true })}
          type='text'
          register={register}
          name='phone'
          error={errors.password}
        />
        <InputField
          label={t('form-recovery-email', { returnObjects: true })}
          type='email'
          register={register}
          name='email'
          error={errors.password}
        />
        <InputField
          label={t('form-recovery-code', { returnObjects: true })}
          type='text'
          register={register}
          name='code'
          error={errors.password}
        />
        <div className='flex justify-end'>
          <button
            type='submit'
            className='w-1/3 p-2 rounded-2xl font-sans font-semibold text-md leading-6 text-primary border-2 border-primary hover:bg-primary hover:text-white transition'
          >
            {t('form-recovery-button')}
          </button>
        </div>
      </form>
    </>
  )
}
