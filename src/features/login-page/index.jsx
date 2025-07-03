import React from 'react'
import LoginForms from './login-forms'

const LoginPage = () => {
  return (
    <main className='relative w-full flex flex-col min-h-screen bg-gray-50 items-center justify-center p-14'>
      {/* Contenedor principal */}
      <section className='flex flex-row max-w-6xl w-full bg-gray-100 rounded-2xl shadow-sm px-5 py-10'>
        {/* Formulario de autenticación */}
        <article className='flex flex-col justify-center w-full md:w-1/2 p-8'>
          <header className='flex justify-center'>
            <img src='/images/logo/logo-mini.png' alt='Logo' className='h-40 w-40 rounded-full' />
          </header>
          <div className='relative h-96'>
            <LoginForms />
          </div>
        </article>
        {/* Imagen decorativa */}
        <aside className='w-1/2 pr-5'>
          <img
            src='/images/login/login.png'
            alt='Pantalla de inicio de sesión VoyPati'
            className='h-full w-full object-cover'
          />
        </aside>
      </section>
      {/* Pie de página */}
      {/* <footer>
        <Footer />
      </footer> */}
    </main>
  )
}

export default LoginPage
