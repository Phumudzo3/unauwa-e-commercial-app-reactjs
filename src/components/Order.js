import React from 'react';
import moment from 'moment';
import "./order.css";
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from "react-currency-format";

export const Order = ({ order }) => {

   
    return (
        <div className='order'>
          
            <p>{moment.unix(order?.data?.created).format("MMMM Do YYYY, h:mma")}</p>

            <p><small>{order.id}</small></p>
            {order?.data?.basket?.map(item => (
                <CheckOutProduct
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
                
            ))}
<CurrencyFormat
                  renderText={(value) => <h3>Order total:{value} </h3>}
                  decimalScale={2}
                  value={order.data.amount/100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
        </div>
    )
}
