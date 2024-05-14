import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const FlightinfoPage = () => {
  const [allFlightinfo, setAllFlightinfo] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/flights',{
      method:"GET"
    }).then(response=>{
      return response.json();
    }).then(data=>{
      console.log("data",data)
      return setAllFlightinfo(data)
    })
  }, [])

  console.log("allFlightinfo",allFlightinfo)

  if(allFlightinfo.length>  0){
    return (
      <>
        <Header />
  
        <div className="page-content">
          <h1>Flightinfo Page</h1>
          <div>
  
          
          <p>{allFlightinfo[0].airline }</p>
          <p>{allFlightinfo[0].arrivalAirport }</p>
          <p>{allFlightinfo[0].arrivalCity }</p>
          <p>{allFlightinfo[0].arrivalDate }</p>
          <p>{allFlightinfo[0].arrivalTime }</p>
          <p>{allFlightinfo[0].departureCity }</p>
        </div>
        </div>
      </>
    )
  }
 
}

export default FlightinfoPage;