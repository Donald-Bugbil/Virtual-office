import financial from '../images/financial.jpeg';
import fin from '../images/fin.jpeg';
import finance from '../images/finance.png';

const initialState ={
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
}

//Treat the state as immutable so that components can rerender

const officeReducer = (state=initialState, action) =>{

    switch (action.type){

        default:
            return state
    }

}

export default officeReducer;