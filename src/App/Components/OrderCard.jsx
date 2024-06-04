import { useState } from "react";
import '../Assets/PandaOrder.css'

const OrderCard = () => {
    const Items = ['Sada Roti', 'Khameeri', 'Naan', 'Kulcha'];
    const convertedOrderItems = Items.map(item => ({
        itemName: item,
        quantity: 0,
      }));

    const [order, setOrder] = useState(convertedOrderItems);
    function handleQuantity(item, quantityToBeAdded){
        const updatedOrder = order.map(prevItem => {
            if (prevItem.itemName === item.itemName) {
              return {
                ...prevItem,
                quantity: prevItem.quantity + quantityToBeAdded,
              };
            }
            return prevItem;
          });
      
          setOrder(updatedOrder);
    }

    return(
        <div className="OrderCard">
            <p style={{fontWeight:"bolder"}}>Place Order</p>
            <p style={{fontWeight:"lighter", color:"grey", marginBottom:"10px"}} >Please Specify Your order status</p>
            <div className="OrderItemContainer">
                {
                    order.map(item => {
                        return(
                            <div className="orderItem" key={item.itemName}>
                                <div className="ItemName">
                                    {item.itemName}
                                </div>
                                <div className="ItemQuantity">
                                    <p>{item.quantity}</p>
                                    <div className="quantityButtonContainer">
                                        <button className="quantityButton" onClick={() => handleQuantity(item, -1)}> - </button>
                                        <button className="quantityButton" onClick={() => handleQuantity(item, 1)}> + </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default OrderCard;