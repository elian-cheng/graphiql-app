import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GraphQLState {
  query: string;
  values: string;
  headers: string;
  response: string;
}

const initialState: GraphQLState = {
  query: '',
  values: '',
  headers: '',
  response: '',
};

export const graphQLSlice = createSlice({
  name: 'headersField',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setValues: (state, action: PayloadAction<string>) => {
      state.values = action.payload;
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
  },
});

export const { setQuery, setValues, setHeaders, setResponse } = graphQLSlice.actions;
export default graphQLSlice.reducer;
