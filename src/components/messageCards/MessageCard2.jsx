import './messagecard.css'

const MessageCardU = (props) => {

    const { time, width, height, borderRadius, color, children } = props;

    return (
        <div className="messagecard2">
            <div className='spans'> 
                <span className='span1'>{time} </span>
                <span className='span2'>You</span>
            </div>

            <div className="cardyou"
                style={{ width, height, borderRadius, color }}>
                {children}
            </div>
        </div>
    )
};

export default MessageCardU;