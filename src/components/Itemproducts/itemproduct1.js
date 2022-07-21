

const Itemproduct1 = (props) => {
    console.log("propiedades: ", props.title, props.price, props.img)
    return(
        <div>
            <img src={props.imgsrc} alt="imagen producto" />
            <p>{props.title}</p>
            <span>{props.price}</span>
            <button>comprar</button>
        </div>
    )
}

export default Itemproduct1
