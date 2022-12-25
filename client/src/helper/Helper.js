const ACTIONS = {
    CALL_API: 'call-api',
    SUCCESS: 'success',
    ERROR: 'error',
};



const reducer=(state,action)=>{
    switch(action.type){
        case ACTIONS.CALL_API:
            return{
                ...state,
                loading:true
            };
        
        case ACTIONS.SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.data
            };
        case ACTIONS.ERROR:
            return{
                ...state,
                error:action.error,
                loading:false
            }
            

    }

}


export {reducer,ACTIONS};


