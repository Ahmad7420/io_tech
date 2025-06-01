import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'language',
    initialState: { locale: 'en' },
    reducers: { setLocale: (s, a) => void (s.locale = a.payload) },
});
export const { setLocale } = slice.actions;
export default slice.reducer;