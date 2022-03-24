import React ,{useState} from 'react';
import { pages } from './req';
import axios from 'axios';
const Addpost = () => {

    const [img, setimg] = useState([]);
    const [catselection, setcatselection] = useState(0);

    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const [price, setprice] = useState({price:0,discount:0});
    const [cat, setcat] = useState({cat:pages[0]['name'],subcat:pages[0]['more'][0]['name']});
    const [image, setimage] = useState(null);
    const [keywords, setkeywords] = useState('');

    const imgShow=(link,index)=>{
        return(
            <p key={index} style={{
                position:'relative'
            }}>
            <img key={index+1} src={link} alt="" style={{
                    width:'100px',
                    height:'100px',
                    objectFit:'cover',
                    border:'solid black 1px',
                    margin:'2px',
                    position:'relative'
                }}  />
                <span key={index+2} style={{
                    backgroundColor:'red',
                    padding:'4px 8px',
                    borderRadius:'50%',
                    position:'absolute',
                    top:'1px',
                    right:'1px',
                    fontSize:'16px',
                    cursor:'pointer'
                }}

                onClick={(e)=>{
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
        setimage(document.getElementById('f').files)
    }

   async function  submitdata(){
        const fd=new FormData();
        Array.from(image).forEach((x)=>{
            fd.append('img',x);
        })
        fd.append('seller_id','234567845');
        fd.append('title',title);
        fd.append('desc',desc);
        fd.append('price',JSON.stringify(price));
        fd.append('cat',JSON.stringify(cat));
        fd.append('kwords',keywords);
        
        axios({
          method:"post",
          url:'http://localhost:3001/AddProduct',
          data:fd,
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
        // console.log(fd.values())
    //   console.log(fd)

    // try{
    //     const res =await fetch('http://localhost:3001/AllProducts')
    // const result =res.json()
    // console.log(result)
    // }catch(err){
    //     console.log(err)
    // }
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

            {/* ///////////////IMAGE//////////////// */}
            <div className="form-group">
                <label htmlFor="img">Choose Images</label>
                <input type="file" className="form-control" id='f' multiple 
                onChange={(e)=>{
                    setimg([])
                    Arr(Array.from(e.target.files))
                    setimage(e.target.files)
                }}/>
            </div>

            {/* ///////////////TITLE//////////////// */}
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" 
                onChange={(e)=>{settitle(e.target.value)}} value={title}
                placeholder="Title"/>
            </div>
            {/* ///////////////DISCRAPTION/////////////// */}
            <div className="form-group">
                <label htmlFor="desc">Descraption</label>
                <textarea className="form-control" id="desc" 
                onChange={(e)=>{setdesc(e.target.value)}} value={desc}
                placeholder="Descraption"/>
            </div>
            {/* //////////////////PRICE/////////////// */}
            <div className="form-group">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control"
                        onChange={(e)=>{
                            setprice({...price,price:e.target.value})
                        }} 
                        value={price['price']}
                        placeholder="Price"/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="price">Discount in %age</label>
                        <input type="text" className="form-control" 
                        onChange={(e)=>{
                            setprice({...price,discount:e.target.value})
                        }}
                        value={price['discount']}
                        placeholder="In %age"/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="price">Org Price</label>
                        <input type="text" className="form-control" 
                        value={price['price']-((price['discount']*price['price'])/100)}
                        disabled />
                    </div>
                </div>
            </div>
           {/* /////////////////////Catgory///////////////// */}
            <div className="form-group">
            <div className="row">
                    <div className="col-6">
                        <label htmlFor="cat">Catagory</label>
                        <select className="form-control my-1 mr-sm-2" id="cat" value={cat['cat']}
                        onChange={(e)=>{
 
                           setcatselection(e.target.options.selectedIndex)
                           setcat({cat:e.target.value,subcat:pages[e.target.options.selectedIndex]['more'][0]['name']})
                          
                        }}>
                        {pages.map((e,index)=>{
                            return(
                                <option defaultChecked={index==1?true:false} key={index} value={e.name}>{e.name}</option>
                            )
                        })}
                        </select> 
                        </div>
                    {/* /////////////////////Sub Cat////////////// */}
                    <div className="col-6">
                        <label htmlFor="disabled">Sub-Cat</label>
                        <select id="disabled" className="form-control" value={cat['subcat']} onChange={(e)=>{
                            setcat({...cat,subcat:e.target.value})
                        }}>

                        {pages[catselection]['more'].map((e,index)=>{
                            return(
                                <option key={index} value={e.name}>{e.name}</option>
                            )
                        })}
                        </select>
                    </div>

                </div>
            </div>
            {/* ///////////////////KEYWORDS///////////////// */}
            <div className="form-group">
                <label htmlFor="keywords">Key Words coma (,) separated </label>
                <input type="text" className="form-control" id="title" 
                onChange={(e)=>{setkeywords(e.target.value) }} value={keywords}
                placeholder="Key Words"/>
            </div>
            <button type="button" className="btn btn-primary mt-5" onClick={()=>{
                submitdata()
            }}>ADD PRODUCT</button>
            </form>
        </div>
    );
}

export default Addpost;
