import React from 'react'

function Shop(props) {
    return (
     
        <div className="col-lg-3 p-4 d-flex justify-content-evenly text-center">
            {/* images for an items */}
<div class="image-fluid card p-1 d-flex justify-content-around" style={{width: '18rem'}}>
{props.shoparr.sale?<div class="salediv"><p class="sale">Sale</p></div>:""} 
   <img src={props.shoparr.img} class="card-img-top" style={{width: '16rem',maxHeight:'15rem'}} alt="....."/>

      
  <div class="card-body">
      {/* name of the item */}
    <h5 class="card-title mt-2">{props.shoparr.title}</h5> 
    <p class="card-text">
        {/* price of the item */}
        <span style={{textDecoration:"line-through"}}>{props.shoparr.rs1}</span> Rs.{props.shoparr.rs}</p>
        {/* No of stars */}
    <p class="card-text">{(props.shoparr.star)?
    <i class="fa fa-star  stars"></i>:" " }
    {(props.shoparr.star)?
    <i class="fa fa-star  stars"></i>:" " }
    {(props.shoparr.star)?
    <i class="fa fa-star  stars"></i>:" " }
    {(props.shoparr.star)?
    <i class="fa fa-star  stars"></i>:" " }
    {(props.shoparr.star)?
    <i class="fa fa-star  stars"></i>:" " }</p>
    {/* Add to cart button */}
    
    <button disabled={props.cartItem.some((obj)=>obj.id===props.shoparr.id)} onClick={()=>props.cartbtn1(props.shoparr)} class="btn btn-outline-dark">Add to Cart</button>

</div></div>
        </div>
              
    )
}
export default Shop;