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
        updatePost: (state, action) =>{
            return {
                ...state,
                offices: state.offices.map(office => {if(office.department === action.payload.params){
                    const update = {
                        department: action.payload.department,
                        description: action.payload.description,
                        image: action.payload.image 
                    }

                    return update} else {return office}})

            }
        }
    }
    
})

export const {deletePost, updatePost} = officeSlice.actions;
export default officeSlice.reducer;