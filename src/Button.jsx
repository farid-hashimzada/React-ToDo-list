export const Button = ({
    text,
    bgColor,
    onClick,
    txtColor
}) => {             
    return (
        <button onClick={onClick} style={
            {
                background: bgColor,
                color: txtColor,
                padding: 10,
                marginLeft: 10,   
                                         
            }
        }>
            {text}
        </button>
    )
}