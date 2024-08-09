import { useContext } from "react"
import DataContext from "../data/DataContext"
import './reportComponent.css'

const ReportComponent = ()=>{
    const {income , expense} = useContext(DataContext)
    //format , ขั้นตัวเลข
    const formatNumber=(num)=>{
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return(
        <div>
                <h4>ยอดคงเหลือ (บาท)</h4>
                <h1>{formatNumber((income-expense).toFixed(2))} ฿</h1>
                <div className="report-container">
                    <div>
                        <h4>ยอดรายได้ทั้งหมด</h4>
                        <p className="report plus">{formatNumber(income)} ฿</p>
                    </div>
                    <div>
                        <h4>ยอดรายจ่ายทั้งหมด</h4>
                        <p className="report minus">{formatNumber(expense)} ฿</p>
                    </div>
               </div>
        </div>
    )
}

export default ReportComponent