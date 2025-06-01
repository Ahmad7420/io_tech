// store/searchSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'search',
    initialState: { open: false, query: '' },
    reducers: {
        openSearch: (state) => { state.open = true },
        closeSearch: (state) => { state.open = false },
        setQuery: (state, action) => { state.query = action.payload },
    },
});

export const { openSearch, closeSearch, setQuery } = slice.actions;
export default slice.reducer;
