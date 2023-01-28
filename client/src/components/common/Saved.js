import { ACTIONS } from "../../helper/Helper";

const Save = ({message,flag}) => {
    return ( 
        <div className={`${flag===ACTIONS.SUCCESS ? "success-msg " : "alert alert-danger"}
         d-flex w-50  justify-content-center overlay `}>
            <i className="px-2 mx-2 close-button">&times;</i>
            <div className="w-100  d-flex justify-content-center">
                {message}
            </div>
        </div>
    );
}
 
export default Save;