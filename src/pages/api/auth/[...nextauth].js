import { supabaseClient } from '@/shared/hooks/useSuppabase'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Registro local',
      credentials: {
        username: { label: 'Correo Electrónico', type: 'email' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize (credentials, req) {
        try {
          const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: credentials.username,
            password: credentials.password
          })
          if (error) {
            console.error('Error:', error.message)
            // Mensaje amigable al usuario: "Credenciales incorrectas"
          } else {
            console.log('Sesión iniciada:', data.user)
            return { id: data?.user?.id, name: data?.user?.email, email: data?.user?.email }
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt (data) {
      const { token, user } = data
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session (data) {
      const { session, token } = data
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
      }
      return session
    }
  },
  pages: {
    signIn: '/',
    // error: '/',
    signOut: '/'
  }
}

export default NextAuth(authOptions)
