import { ACTIONS } from "../../helper/Helper";

const Save = ({message,flag}) => {
    // "success-msg w-50 d-flex justify-content-center"
    return ( 
        <div className={`${flag===ACTIONS.SUCCESS ? "success-msg " : "error-msg"}
         d-flex w-50  justify-content-center`}>
            <i className="fa fa-check"></i>
            {message}
        </div>
    );
}
 
export default Save;