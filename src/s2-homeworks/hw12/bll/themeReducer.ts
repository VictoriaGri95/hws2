const initState = {
  themeId: 1,
}
type AppStateType = typeof initState
export const themeReducer = (state: AppStateType = initState, action: ActionsType): AppStateType => { // fix any
  switch (action.type) {
    // дописать
      case 'SET_THEME_ID':
        return {...state, themeId: action.id}

    default:
      return state
  }
}

type ActionsType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
