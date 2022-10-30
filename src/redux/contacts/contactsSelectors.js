import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from "../filter/filterSelector";

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter))
);