import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addedContact: (state, action) => {
      return [...state, action.payload];
    },
    deletedContact: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
