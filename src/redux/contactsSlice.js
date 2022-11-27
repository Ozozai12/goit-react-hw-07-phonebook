import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
