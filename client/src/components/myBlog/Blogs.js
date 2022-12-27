import EditCard from './EditCard';

const Blogs = ({blogData}) => {
    if(blogData && blogData.length!==0){
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