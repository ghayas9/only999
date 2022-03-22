import React ,{useState} from 'react';
const Addpost = () => {

    const [img, setimg] = useState([]);
    const imgShow=(link,index)=>{
        return(
            <p style={{
                position:'relative'
            }}>
            <img key={index} src={link} alt="" style={{
                    width:'100px',
                    height:'100px',
                    objectFit:'cover',
                    border:'solid black 1px',
                    margin:'2px',
                    position:'relative'
                }}  />
                <span style={{
                    backgroundColor:'red',
                    padding:'4px 8px',
                    borderRadius:'50%',
                    position:'absolute',
                    top:'1px',
                    right:'1px',
                    fontSize:'16px',
                    cursor:'pointer'
                }}

                onClick={(key)=>{
                    removefile(index)
                }}
                
                >x</span>
            </p>
            
        )
    }

    const Arr=(arr)=>{
        arr.forEach((file)=>{
            var link= URL.createObjectURL(file)
            setimg(old=>[...old,link])
         })
    }
    const removefile=(index)=>{
        let list = new DataTransfer();
        let files =document.getElementById('f').files;
        for(let i =0; i<files.length;i++){
            if(i!=index){
                list.items.add(files[i])
            }
        }
        document.getElementById('f').files= list.files;
       setimg([])
        Arr(Array.from(document.getElementById('f').files))
    }
    return (
        <div className="container-fluid">
            <form className='card' style={{
                padding:'20px'
            }}>
            <div className="imageshow" style={{
                alignContent:'center',
                alignItems:'center',
                justifyContent:'center',
                display:'flex',
                flexWrap:'wrap'
            }}>
                {img.map((link,index)=>{
                    return(
                        imgShow(link,index)
                    )
                })}
            </div>
            <div className="form-group">
                <label htmlFor="img">Choose Images</label>
                <input type="file" className="form-control" id='f' multiple onChange={(e)=>{
                    setimg([])
                    Arr(Array.from(e.target.files))
                    
                }}/>
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label htmlFor="desc">Descraption</label>
                <textarea className="form-control" id="desc" placeholder="Descraption"/>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" placeholder="Price"/>
                    </div>
                    <div className="col-6">
                    <label htmlFor="price">Discount</label>
                    <input type="text" className="form-control" placeholder="Discount in %age"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
            <div className="row">
                    <div className="col-6">
                        <label htmlFor="cat">Catagory</label>
                        <select className="form-control my-1 mr-sm-2" id="cat">
                        <option defaultChecked>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select> 
                        </div>
                    <div className="col-6">
                        <label htmlFor="disabled">Sub-Cat</label>
                        <select id="disabled" className="form-control" >
                        <option>please select cat</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="keywords">Key Words coma (,) separated </label>
                <input type="text" className="form-control" id="title" placeholder="Key Words"/>
            </div>
            <button type="button" className="btn btn-primary mt-5">SUBMIT</button>
            </form>
        </div>
    );
}

export default Addpost;
