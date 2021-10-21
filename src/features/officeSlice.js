import { createSlice } from '@reduxjs/toolkit';
import financial from '../images/financial.jpeg';
import fin from '../images/fin.jpeg';
import finance from '../images/finance.png';

export const officeSlice = createSlice({
    name: "office",
    initialState :{
        offices : [
            {
                department: 'Finance',
                description: 'sales and procurement',
                image: financial
            },
            {
                department: 'Accounts',
                description: 'Asset control and Budget',
                image: fin
            },
            {
                department: 'Customer Care',
                description: 'Branding and promotions',
                image: finance
            },
            {
                department: 'Finance',
                description: 'sales and procurement',
                image: financial
            },
            {
                department: 'Finance',
                description: 'sales and procurement',
                image: financial
            },
            {
                department: 'Finance',
                description: 'sales and procurement',
                image: financial
            }
        ]
    },
    reducers:{
        deletePost: (state, action) =>{
            return {
                ...state,
                offices: state.offices.filter(office => office.department !== action.payload)
            }
        },
        updatePost: (state, action, department ) =>{
            return {
                ...state,
                offices: state.offices.map(office => {if(office.department === department){return action.payload} else {return office}})

            }
        }
    }
    
})

export const {deletePost, updatePost} = officeSlice.actions;
export default officeSlice.reducer;