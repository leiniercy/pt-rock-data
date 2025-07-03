import React from 'react'
import CustomLayout from '@/shared/layouts/custom-layout'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Dashboard from '@/features/dashboard'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { UserProvider } from '@/shared/context/UserContext'

export default function Home ({ params }) {
  return (
    <UserProvider params={params}>
      <CustomLayout>
        <Dashboard params={params} />
      </CustomLayout>
    </UserProvider>
  )
}

export async function getServerSideProps (context) {
  const { req, res } = context

  const profile = await getServerSession(req, res, authOptions)
  if (profile === null || profile === undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      params: {
        user: null
      }
    }
  }
}
