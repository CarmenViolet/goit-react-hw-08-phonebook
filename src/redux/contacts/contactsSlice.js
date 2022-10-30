import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, deleteContacts, addContact} from "./contactsOperations";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null  },
  extraReducers: {
   [fetchContacts.pending]: state => {
    state.isLoading = true;
   },
   [fetchContacts.fulfilled]: (state, { payload }) => {
    state.contacts = payload;
    state.isLoading = false;
  },
  [fetchContacts.rejected]: (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  },
  [addContact.pending]: state => {
    state.isLoading = true;
    state.error = null;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    state.contacts.push(payload);
    state.isLoading = false;
  },
  [addContact.rejected]: (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  },
  [deleteContacts.pending]: state => {
    state.isLoading = true;
    state.error = null;
  },
  [deleteContacts.fulfilled]: (state, { payload }) => {
    state.contacts = state.contacts.filter(({ id }) => id !== payload);
    state.isLoading = false;
  },
  [deleteContacts.rejected]: (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  },
  },
});

export default contactsSlice.reducer;
