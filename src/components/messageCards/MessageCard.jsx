import  './messagecard.css';

 const MessageCard = (props) => {

    const { time, width, height, borderRadius, backgroundColor, color, children } = props;

    return (
        <div className="messagecard">
            <span> {time} </span>

            <div className="card"
            style={{ width, height, borderRadius,backgroundColor, color }}>
                {children}
            </div>
        </div>
    )
};



export default MessageCard;