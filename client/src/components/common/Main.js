import Card from './Card';

const Main = ({blogData}) => {
    if(blogData && blogData.length!==0){
    return (
        <div className="container">
            <div className="row">
                {
                    blogData.map((data,index)=>{
                        return <Card data={data} key={index}/> 
                    })
                }
          </div>
        </div>
    );}
}
 
export default Main;