import { createSlice } from '@reduxjs/toolkit'

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: []
  },
  reducers: {
    addNotification: (state, action) => {
      state.items.push(action.payload)
    },
    clearNotifications: state => {
      state.items = []
    }
  }
})

export const { addNotification, clearNotifications } =
  notificationsSlice.actions
export default notificationsSlice.reducer
