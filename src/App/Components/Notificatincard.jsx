import '../Assets/PandaOrder.css'

const Notificationcard = () => {
    return(
    <div className="NotificationCard">
        <div className="Icon"></div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <p style={{fontWeight:700}}>@nextJs</p>
            <p>The react framework created and maintained by Vercel</p>
            <p style={{color:'grey'}}>Joined Decemer 2012 </p>
        </div>
    </div>
    );
}

export default Notificationcard;