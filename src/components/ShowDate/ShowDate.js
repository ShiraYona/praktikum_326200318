import { DateService } from "../../services/dateService"
import { useState} from "react"
import '../ShowDate/ShowDate.css'
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';



const ShowDate = () => {

    const [dates, setDates] = useState([])
    const [startDate, setStartDate] = useState([])
    const [endDate, setEndDate] = useState([])
    const [onlyParashot, setOnlyParashot] = useState(false)

    const getDate = async () => {
        let datesArr = await DateService(startDate, endDate)
        setDates(datesArr)
    }
    return (<>

        <div>
            <h1>תאריך התחלה</h1>
            <Calendar onChange={e => setStartDate(e.value)} dateFormat="yy-mm-dd" value={startDate}></Calendar>
            <br />
            <h1>תאריך סיום</h1>
            <Calendar onChange={e => setEndDate(e.value)} dateFormat="yy-mm-dd"  value={endDate}></Calendar>
            <br />
            <button onClick={() => { getDate() }}>הצג תאריכים בטווח</button>
            <br/>
            <h3>הצג פרשות בלבד</h3>
            <input type={"checkbox"} onChange={() => { setOnlyParashot(!onlyParashot) }}></input>
            <div className="spanOfAllCards">
                {dates && dates.map(dateObj => {

                    //return matches to the "onlyParasha" variable. nither true nor false
                   
                    if (onlyParashot === true) {
                        return (
                            dateObj.className === "parashat" && <Fieldset className="cardOfDate">
                                <h5>{dateObj.title}</h5>
                                <h5>{dateObj.start}</h5>
                                <h5>{dateObj.description}</h5>
                            </Fieldset>)
                    }
                    
                    else return (
                        <Fieldset className="cardOfDate">
                            <h5>{dateObj.title}</h5>
                            <h5>{dateObj.start}</h5>
                            <h5>{dateObj.description}</h5>
                        </Fieldset>)
                })}
            </div>
        </div>


    </>)
}
export { ShowDate }