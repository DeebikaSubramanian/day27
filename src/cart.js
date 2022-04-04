import React from 'react'

function Cart(props) {
  return (
    <div>
      <ol>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto fw-bold">
        {/* items in the cart and price */}
        {props.item.title}-Rs.{props.item.rs}
               
      </div>
      {/* remove button */}
            <button
        onClick={() => {
          props.removecart(props.item);
        }}
        class="btn badge bg-danger rounded-pill"
      >
        X
      </button>
    </li>
    </ol>
    </div>
  )
}

export default Cart;