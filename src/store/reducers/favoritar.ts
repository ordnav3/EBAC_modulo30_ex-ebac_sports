import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarF: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens.pop()
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarF } = favoritarSlice.actions
export default favoritarSlice.reducer
