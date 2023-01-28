const Credit = ({credit}) => {
    return (
    <div className="written px-4">
        <div className="text-1">Written by</div>
        <div className="text-2">{credit}</div> 
    </div>
    );
}
 
export default Credit;