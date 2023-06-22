import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,addContact,deleteContact } from './Operations';


const handlePending = (state) => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    }

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.value.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     state.value = state.value.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: {
    // fetch contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  //  addContact
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
    },
    // deleteContact
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  }
});
