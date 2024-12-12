// Importação das funções necessárias do Redux Toolkit e do tipo PayloadAction
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Importação do tipo Game definido em outro arquivo (presumivelmente o tipo de cada item no carrinho)
import { Game } from '../../App'

// Define o tipo do estado do slice do carrinho, contendo um array de itens do tipo Game
type CarrinhoState = {
  itens: Game[] // O carrinho é representado como uma lista de jogos
}

// Define o estado inicial do slice do carrinho com uma lista de itens vazia
const initialState: CarrinhoState = {
  itens: []
}

// Cria o slice do Redux Toolkit, responsável por gerenciar o estado e as ações relacionadas ao carrinho
const carrinhoSlice = createSlice({
  // Nome do slice, usado internamente pelo Redux
  name: 'carrinho',
  // Estado inicial do slice
  initialState,
  // Define os reducers, que são funções responsáveis por manipular o estado
  reducers: {
    // Ação para adicionar um item ao carrinho
    adicionar: (state, action: PayloadAction<Game>) => {
      // Extrai o jogo enviado na ação
      const jogo = action.payload

      // Verifica se o jogo já está no carrinho
      if (state.itens.find((game) => game.id === jogo.id)) {
        // Se o jogo já estiver no carrinho, exibe um alerta para o usuário
        alert('Item já adicionado')
      } else {
        // Se não estiver, adiciona o jogo ao array de itens
        state.itens.push(jogo)
      }
    }
  }
})

// Exporta a ação "adicionar" desestruturada, para facilitar seu uso em outras partes do código
export const { adicionar } = carrinhoSlice.actions

// Exporta o reducer como padrão, que será usado pelo Redux para configurar o store
export default carrinhoSlice.reducer
