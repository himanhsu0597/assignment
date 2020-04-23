import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data : [],
    isloading : false,
    searched : ''
  },
  reducers: {
    search : ( state , action) => {
      state.data = action.payload;
  },
 
  },
});

export const { search} = counterSlice.actions;




export const Search = (pay , history ) => dispatch => {
  console.log(pay , history)
  console.log('called')
  let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=55fc3f1e&t='+pay;
      Axios.post(url)
        .then(res => {
          dispatch(search(res.data))
          history.navigation.navigate('Display')
        })

};


export const SearchFrom = (pay , history ) => dispatch => {
  console.log(pay , history)
  console.log('called')
  let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=55fc3f1e&t='+pay;
      Axios.post(url)
        .then(res => {
          dispatch(search(res.data))
          history.navigation.navigate('Display')
        })

};

export default counterSlice.reducer;
