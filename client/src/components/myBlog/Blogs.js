import EditCard from './EditCard';
import { Link } from 'react-router-dom';

const Blogs = ({blogData}) => {

    if(blogData && blogData.length==0){
        return(
        <div className="container">
            <div className="no-data m-5 p-5 d-flex align-items-center flex-column">
                No data available, start a blog here.
                <div><Link to={'/create'}>New Blog</Link></div>
            </div>
        </div>
        )
    }
    else if (blogData && blogData.length!==0){
    return (
        <div className="container">
            <div className="row  gx-5 ">
                {
                    blogData.map((data,index)=>{
                        return <EditCard data={data} key={index}/> 
                    })

                }
          </div>
        </div>
        );
    }
}
 
export default Blogs;