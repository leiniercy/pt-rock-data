import LoginPage from '@/features/login-page'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home () {
  return <LoginPage />
}

// export async function getStaticProps ({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations('es', [
//         'form-change-password',
//         'form-login',
//         'form-password-recovery'
//       ])) // Carga las traducciones
//     }
//   }
// }
