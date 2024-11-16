import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    handleThemeClick: () => { },
    months : [],
    weeks : [],
    years : [],
    salesDistrict : [],
    ChannelType : [],
    OrderSource : [{name : 'E-commerce',code : 'E-commerce'}]
   
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setState: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { setState } = globalSlice.actions;
export default globalSlice.reducer;

