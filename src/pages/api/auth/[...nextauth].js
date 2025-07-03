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
        const user = { id: '1', name: 'J Smith', email: 'admin@gmail.com' }
        console.log(credentials.username, user.email)
        // try {
        if (credentials.username === user.email && credentials.password === '1234') {
          return user
        } else {
          return null
        }

        // } catch (error) {

        // return null
        // }
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
