// import HelloComponent from "./components/HelloComponent";
// import Item from "./components/Itam";
// import Transaction from "./components/Transaction";
// import './App.css'
// import FormComponent from "./components/FormComponent";
// import { v4 as uuidv4 } from 'uuid';

// const Title =()=><h1 style={{color:"blue"}}> รายได้สโมสรพรีเมียร์ลีก</h1>

// const data =[
//   {id:1,title:"แมนยู",amount:75000},
//   {id:2,title:"ลิเวอร์พลู1" ,amount:55000},
//   {id:3,title:"ลิเวอร์พลู" ,amount:55000},
// ]


// function App() {
//   return (
//   <div clsssNAme="container">
//       <Title/>
//       <Transaction/>
//       <FormComponent/>
//     </div>
//   );
// }

// export default App;



import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useState , useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Title =()=><h1 style={{color:"blue", display:"flex",justifyContent:"center"}}> เว็บรายรับ - รายจ่าย</h1>


function App() {

// const initState = [
//   {id:1,title:"ค่าเช่าบ้าน", amount:-8000},
//   {id:2,title:"หี", amount:-1500},
//   {id:3,title:"เงินเดือน", amount:75000},
//   {id:4,title:"ธุรกิจ", amount:250000}
// ]

const initData =[
  {id:1,title:"ค่ารถซุปเปอร์คาร์",amount:-95000},
  {id:2,title:"ธุรกิจออนไลน์",amount:200000},
]
const [items,setitems] = useState(initData)
const [reportIncome , setReportIncome] = useState(0)
const [reportExpense , setReportExpense] = useState(0)

const onAddNewItem = (newItem) =>{

  setitems((prevItem)=>{
    return [newItem,...prevItem]
  })
}

useEffect(()=>{
  const amounts = items.map(items=>items.amount)
  const incomes = amounts.filter(items=>items>0).reduce((total,items)=>total+=items,0)
  const expenses = (amounts.filter(items=>items<0).reduce((total,items)=>total+=items,0))*-1
  
  setReportIncome(incomes.toFixed(2))
  setReportExpense(expenses.toFixed(2))
  
},[items,reportIncome,reportExpense])



  return (
    ////แบบหลายบรรทัดเผื่อให้เข้าใจ
    // <DataContext.Provider value={
    //   {
    //     income:reportIncome,
    //     expense:reportExpense
    //   }}>
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}> 
      <div className="container">
        <Title/>
        <Router>
        <div>
          <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
          </ul>
          <Routes>
            <Route path="/" element={<ReportComponent/>}>
            </Route>
            <Route path="/insert"element={
              <div>
                <Transaction items={items}/>
                <FormComponent onAddItem={onAddNewItem}/>
              </div>
            }>
            </Route>
          </Routes>
        </div>
        </Router>
        
    </div>
    </DataContext.Provider>
  );
}

export default App;
