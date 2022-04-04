import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Shop from './shop';
import Cart from './cart';
import { useState } from 'react';

function App() {
  
    const[arr,setdisable]=useState([
    {
      id:1,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwxVMSlS9csauEfn6e-LXMEOyr4yctQIN3g&usqp=CAU"),
      title:"Samsung",
      star:false,
      rs1:false,
      rs:40000,
      sale:false,      
                
    },

    {
      id:2,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bfzHaAAXfq8eKAQ5dY491-DIKpugDJlZPQ&usqp=CAU"),
      title:"LG",
      star:true,
      rs1:"$20.00",
      rs:18000,
      sale:true,
      
    },
    
    {
      id:3,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsiwoHKUKNPWGPFAzSJCFzL9jKuuDW1jMyA&usqp=CAU"),
      title:"Apple",
      star:false,
      rs1:"$50.00",
      rs:250000,
      sale:true,
    
    },
    {
      id:4,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2PSD4ePQwki2o_sLb7BDsnyGPnywxhRXww&usqp=CAU"),
      title:"Vision",
      star:true,
      rs1:false,
      rs:40000,
      sale:false,
     
    },
    
    {
      id:5,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zX5j5gFlb6PihfwSsmQF28OCzR3p2N4EPw&usqp=CAU"),
      title:"Sony",
      star:false,
      rs1:"$50.00",
      rs:25000,
      sale:true,
            
    },

    {
      id:6,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNd1nrshJbh1reoW_WwI39fOBSi3MEM92rw&usqp=CAU"),
      title:"videocon",
      star:false,
      rs1:false,
      rs:280000,
      sale:false,
       
    },
    {
      id:7,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2hDUqHbQKRvookEVZ9WdKltxupTSvDrcNg&usqp=CAU"),
      title:"Micromax",
      star:true,
      rs1:"$20.00",
      rs:18000,
      sale:true,
      
    },
    {
      id:8,
      img:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBXXjdxvyI0xcOlMhSiXdor0u6rIaL0fDHw&usqp=CAU"),
      title:"BPL",
      star:true,
      rs1:false,
      rs:40000,
      sale:false,
          }
  ]
  );
  const[cart,setcart]=useState([]);   //array for cart items
  const[total,settotal]=useState(0);  //total amount
    const[cartitem,setcartitem]=useState(0);  //No of items in the cart

function cartbtn(item)  //add to cart button onclick function
{
    setcart([...cart,item])
  setcartitem(cartitem+1)
  settotal(total+item.rs)
  
 }
function remove(item) //function for remove button
{
  let itemIndex = cart.findIndex(obj => item.id === obj.id);
  cart.splice(itemIndex,1)
  setcart([...cart])
  setcartitem(cartitem-1)
  settotal(total-item.rs)
}
  return (
    <div className="container-fluid">
      <div class="row">
      <div className="col-lg-8">
        {/* Nav bar */}
      <ul class="nav nav-pills">
     <li class="nav-item">
    <a class="nav-link disabled"><h5>Start Bootstrap</h5></a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">About</a>
  </li>
  <li class="nav-item dropdown">
    <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href=" " role="button" aria-expanded="false">Shop</button>
    
  </li>
</ul>
      </div>
       <div class="col-lg-3">
         <div class="p-1 d-flex justify-content-evenly cart">
         <i class="fa fa-shopping-cart"></i> Cart
         <button class="btn badge bg-dark rounded">{cartitem}</button>
         </div><ol>
          {
           cart.map((e)=>
           {
          return <Cart item={e} removecart={remove}></Cart>
           })
         } </ol>
         
          <span style={{color:"green"}}>Total price of the cart items:<br/></span><span style={{color:"red"}}>{total===0?"Empty cart":`Total=Rs.${total}`}</span>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <header className="App-header">
      Shop in style<br/>
<h5>With this shop hompage template</h5>
      </header>
      </div>

      <div class="row">
     
       {arr.map((e)=>
       {
         return <Shop shoparr={e} cartItem={cart} cartbtn1={cartbtn} ></Shop>
                 
       })
      }
            </div>
                    </div>
       
       
  );
}

export default App;
