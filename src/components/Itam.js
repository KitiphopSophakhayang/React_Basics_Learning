// const Item =(props)=>{
//     const {title,amount}= props
//     return(
//         <>
//             <li> ทีม : {title}  <span>ความจุสนาม {amount} </span></li>
//         </>   
//     )
// }

// export default Item;



//ใช้วิธี props Types
import PropTypes, { number } from 'prop-types'; // ES6
import './item.css'

const Item =(props)=>{
    const {title,amount}= props
    const status = amount<0 ?  "expense":"income"
    const statusSymbol = amount<0 ? "-":"+"

    // let status;
    // if (amount < 0) {
    //   status = "รายจ่าย";
    // } else {
    //   status = "รายรับ";
    // }
    const formatNumber=(num)=>{
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return(
        <>
            <li className={status}>  {title} <span> {statusSymbol} {formatNumber(Math.abs(amount))}  </span> 
        
            </li>
        </>   
    )
}

Item.prototype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item;