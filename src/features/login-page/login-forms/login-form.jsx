'use-client'
import React, { useCallback, useState } from 'react'
import { getSession, signIn } from 'next-auth/react'
// import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { validationLogin } from './login-form-validations'
import InputField from '@/ui/input/input-field'

export const LoginForm = () => {
  // const { t } = useTranslation('form-login')
  const [authError, setAuthError] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationLogin)
  })

  const onSubmit = useCallback(
    async (data) => {
      // Aquí iría la lógica para autenticar al usuario
      const res = await signIn('credentials', {
        username: data?.username,
        password: data?.password,
        redirect: false
      })
      console.log(res)
      if (res?.ok) {
        setAuthError(false)
        const session = await getSession()
        console.log(session)
        setCookie('logged', 'true')
        router.push('/dashboard')
      } else if (res?.error) {
        setAuthError(true)
        setCookie('logged', 'false')
      }
    },
    [signIn]
  )
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} aria-label='Formulario de inicio de sesión'>
        <InputField
          // label={t('login-form-username', { returnObjects: true })}
          label='Correo Electrónico'
          type='text'
          register={register}
          name='username'
          placeholder='admin@gmail.com' // solo para desarrollo
          error={errors.username}
        />
        <InputField
          // label={t('login-form-password', { returnObjects: true })}
          label='Contraseña'
          type='password'
          register={register}
          name='password'
          placeholder='1234' // solo para desarrollo
          error={errors.password}
        />
        {authError && (
          <section className='relative flex items-start justify-start w-full'>
            <label className='font-poppins font-normal leading-tight text-left text-wine text-[14px]'>
              Usuario o contraseña incorrectos
            </label>
          </section>
        )}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='w-1/3 p-2 rounded-2xl font-sans font-semibold text-md leading-6 text-[#fff] bg-primary hover:bg-orange-600 transition'
          >
            {/* {t('login-form-button')} */}
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  )
}
