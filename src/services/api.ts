// Importa as funções `createApi` e `fetchBaseQuery` do Redux Toolkit Query para configurar a API.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Importa o tipo `Game` de outro arquivo para utilizar na tipagem do retorno da API.
import { Game } from '../App'

// Cria a API usando a função `createApi`.
const api = createApi({
  // Configura a base das requisições HTTP.
  baseQuery: fetchBaseQuery({
    // Define a URL base para todas as chamadas da API.
    baseUrl: 'http://localhost:4000'
  }),
  // Define os endpoints (pontos de acesso da API).
  endpoints: (builder) => ({
    // Cria um endpoint chamado `getJogos` para buscar uma lista de jogos.
    getJogos: builder.query<Game[], void>({
      // Define o caminho da API para este endpoint (rota `produtos`).
      query: () => 'produtos'
    })
  })
})

// Exporta o hook gerado automaticamente pelo Redux Toolkit Query para este endpoint.
// O hook `useGetJogosQuery` pode ser usado em componentes React para fazer a chamada e gerenciar o estado da API.
export const { useGetJogosQuery } = api

// Exporta o objeto `api` para que possa ser configurado no store ou reutilizado em outros arquivos.
export default api
