import { createSlice } from '@reduxjs/toolkit';
import tech from '../images/coding.jpg';
import business from '../images/businessdev.png';
import communications from '../images/communications.jpg';
import research from '../images/research.png';
import accounts from '../images/account.jpg';
import sales from '../images/sales.jpg';


export const officeSlice = createSlice({
    name: "office",
    initialState :{
        offices : [
            {
                department: 'IT Department',
                description: 'Information Technology',
                image: tech
            },
            {
                department: 'Business and Development Department',
                description: 'Overview of Departments',
                image: business
            },
            {
                department: 'Communications Department',
                description: 'Branding and Promotions',
                image: communications
            },
            {
                department: 'Research and Development',
                description: 'Research',
                image: research
            },
            {
                department: 'Accounts Department',
                description: 'Accounts',
                image: accounts
            },
            {
                department: 'Sales Department',
                description: 'Sales and Procurement',
                image: sales
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