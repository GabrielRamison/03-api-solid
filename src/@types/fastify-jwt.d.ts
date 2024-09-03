import '@fastify/jwt'

declare module '@fastfy/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
    }
  }
}
