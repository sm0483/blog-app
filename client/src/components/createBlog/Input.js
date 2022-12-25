const Input = () => {
    return ( 
    <div className="container pt-5">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label h4">Title</label>
            <input type="text" class="form-control title-input"
            id="exampleFormControlInput1" placeholder="bing bang theory"/>
        </div>


        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label h4">Upload image</label>
            <input type="file" class="form-control title-input"
            id="exampleFormControlInput1" placeholder="bing bang theory"/>
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label h4">Article</label>
            <textarea type="text" class="form-control article-text-area"
            id="exampleFormControlInput1" placeholder="It is theory written ..."/>
        </div>
        <div className="mb-3">
             <button className="btn btn-primary">Save</button>
        </div>
    </div>

    );
}
 
export default Input;