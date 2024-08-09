// import Item from './Itam';
// import './transaction.css'

// const Transaction = () => { 
//   const data =[
//     {title:"แมนยู",amount:75000},
//     {title:"ลิเวอร์พลู",amount:55000},
//     {title:"อาเซนอล",amount:55000},
//     {title:"แมนซิตี้",amount:50000},
//     {title:"สเปอร์",amount:50000},
//     {title:"เซลลซี",amount:45000},
//   ]
//     return (
//       <ul className="item-list">
//         <Item title={data[0].title} amount={data[0].amount}/>
//         <Item title={data[1].title} amount={data[1].amount}/>
//         <Item title={data[2].title} amount={data[2].amount}/>
//         <Item title={data[3].title} amount={data[3].amount}/>
//         <Item title={data[4].title} amount={data[4].amount}/>
//         <Item title={data[5].title} amount={data[5].amount}/>
//       </ul>
//     );
//   };
//   export default Transaction;



// //ใช้วิธีArray map
// import Item from './Itam';
// import './transaction.css'

// const Transaction = () => { 
//   const data =[
//     {title:"แมนยู",amount:75000},
//     {title:"ลิเวอร์พลู",amount:55000},
//     {title:"อาเซนอล",amount:55000},
//     {title:"แมนซิตี้",amount:50000},
//     {title:"สเปอร์",amount:50000},
//     {title:"เซลลซี",amount:45000},
//   ]
//     return (
//       <ul className="item-list">
//         {data.map((element)=>{
//           //วิธีแรก
//           // return <Item title={element.title}  amount={element.amount}/>
//           //วิธีที่สองแบบสั้น
//           return <Item {...element} />
//         })}
//       </ul>
//     );
//   };
// export default Transaction;



// //ใช้วิธี props key
// import Item from './Itam';
// import './transaction.css'

// const Transaction = () => { 
//   const data =[
//     {id:1,title:"แมนยู",amount:75000},
//     {id:2,title:"ลิเวอร์พลู",amount:55000},
//     {id:3,title:"อาเซนอล",amount:55000},
//     {id:4,title:"แมนซิตี้",amount:50000},
//     {id:5,title:"สเปอร์",amount:50000},
//     {id:6,title:"เซลลซี",amount:45000},
//   ]
//     return (
//       <ul className="item-list">
//         {data.map((element)=>{
//           //วิธีเรียกkey
//           return <Item {...element} key ={element.id} />
//         })}
//       </ul>
//     );
//   };

//   export default Transaction;



// //ใช้วิธี key props  UUID
// import Item from './Itam';
// import './transaction.css'
// import { v4 as uuidv4 } from 'uuid';

// const Transaction = () => { 
//   const data =[
//     {title:"แมนยู",amount:75000},
//     {title:"ลิเวอร์พลู",amount:55000},
//     {title:"อาเซนอล",amount:55000},
//     {title:"แมนซิตี้",amount:50000},
//     {title:"สเปอร์",amount:50000},
//     {title:"เซลลซี",amount:45000},
//   ]
//     return (
//       <ul className="item-list">
//         {data.map((element)=>{
//           //วิธีเรียกkey
//           return <Item {...element} key ={uuidv4()} />
//         })}
//       </ul>
//     );
//   };

//   export default Transaction;

  

// //ใช้วิธี props Types
// import Item from './Itam';
// import './transaction.css'
// import { v4 as uuidv4 } from 'uuid';

// const Transaction = () => { 
//   const data =[
//     {title:"แมนยู",amount:75000},
//     {title:"ลิเวอร์พลู1" ,amount:55000},
//     {title:"ลิเวอร์พลู" ,amount:55000},
//   ]
//     return (
//       <ul className="item-list">
//         {data.map((element)=>{
//           //วิธีเรียกkey
//           return <Item {...element} key ={uuidv4()} />
//         })}
//       </ul>
//     );
//   };

//   export default Transaction;


//ใช้วิธี props Types
import Item from './Itam';
import './transaction.css'
import DataContext from '../data/DataContext';


const Transaction = (props) => { 
  const {items} = props
    return (
      <div>
        <ul className="item-list">
          {items.map((element)=>{
            return <Item {...element} key={element.id} />
          })}
        </ul>
         
      </div>
      
    );
  };

  export default Transaction;
