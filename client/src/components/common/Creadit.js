const Credit = ({credit}) => {
    return (
    <div className="written px-4">
        <div className="h5">Written by</div>
        <div className="h6">{credit}</div> 
    </div>
    );
}
 
export default Credit;