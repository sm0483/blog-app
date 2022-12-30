import { ACTIONS } from "../../helper/Helper";

const Save = ({message,flag}) => {
    return ( 
        <div className={`${flag===ACTIONS.SUCCESS ? "success-msg " : "error-msg"}
         d-flex w-50  justify-content-center overlay`}>
            <i className="fa fa-check"></i>
            {message}
        </div>
    );
}
 
export default Save;