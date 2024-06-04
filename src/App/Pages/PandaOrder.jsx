import Notificationcard from "../Components/Notificatincard";
import OrderCard from "../Components/OrderCard";


const PandaOrder = () => {
    return(
        <div style={{padding:'40px', }}>
            <div className="header">
                <div>
                    <h2>Panda Delivery</h2>
                </div>
                <Notificationcard />
            </div>
            <div className="body">
                <div>
                <OrderCard />
                <div>
                    <button className="placeOrderButton">Place Order</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PandaOrder;