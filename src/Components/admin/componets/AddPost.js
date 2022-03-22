import React from 'react';

const Addpost = () => {
    return (
        <div className="container-fluid">
            <form className='card' style={{
                padding:'20px'
            }}>
            <div class="form-group">
                <label for="img">Choose Images</label>
                <input type="file" class="form-control" id="img"/>
            </div>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Title"/>
            </div>
            <div class="form-group">
                <label for="desc">Descraption</label>
                <textarea class="form-control" id="desc" placeholder="Descraption"/>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-6">
                    <label for="price">Price</label>
                    <input type="text" class="form-control" placeholder="Price"/>
                    </div>
                    <div class="col-6">
                    <label for="price">Discount</label>
                    <input type="text" class="form-control" placeholder="Discount in %age"/>
                    </div>
                </div>
            </div>
            <div class="form-group">
            <div class="row">
                    <div class="col-6">
                        <label for="cat">Catagory</label>
                        <select class="form-control my-1 mr-sm-2" id="cat">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select> 
                        </div>
                    <div class="col-6">
                        <label for="disabled">Sub-Cat</label>
                        <select id="disabled" class="form-control" >
                        <option>please select cat</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="keywords">Key Words coma (,) separated </label>
                <input type="text" class="form-control" id="title" placeholder="Key Words"/>
            </div>
            <button type="button" class="btn btn-primary mt-5">SUBMIT</button>
            </form>
        </div>
    );
}

export default Addpost;
