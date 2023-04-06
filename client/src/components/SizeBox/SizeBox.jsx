import "./SizeBox.css"

const SizeBox = (props) =>{
    const colorStyle = {
        backgroundColor: "#9e9995",
        color: "white"
    }
    return (
        <div onClick={props.handleClick} style={props.isActive ? colorStyle : {}} className="size">{props.value}</div>
    )
}
export default SizeBox;