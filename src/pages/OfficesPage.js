import React, { useEffect, useState } from "react";
import Office from "../components/office/Office";
import getOffices from "../services/Offices/getOffices";
import styles from "./officesPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Disabled({ disabled, children }) {
  if (disabled) {
    return (
      <div style={{ opacity: 0.5, pointerEvents: "none" }} disabled>
        {children}
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
}

function OfficesPage() {
  const [offices, setOffices] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [value, onChange] = useState(new Date());

  const getResult = async () => {
    const result = await getOffices();
    setOffices(result);
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    
    <div className={styles.wrapperContent}>

      
        <div style={{marginLeft:'80px',marginRight:'80px'}}>
            
            <div>
                <h2>Choose a day</h2>
                <Calendar 
                className={styles.reactCalendar}
                onChange={onChange} 
                value={value} />
            </div>

           <span>
            <button style={{width:'110px', height:'40px',textAlign:'center',borderStyle:'double',marginTop:'20px',marginLeft:'107px', backgroundColor:'#F7eff6'}}>Book Desk</button>
           </span>
            
        </div>
        

    
      <div className={styles.container}>
        {offices.map((office) => (
          <div key={office.id}>
            <Disabled disabled={!office.available}>
              <Office office={office} className={styles.office} />
            </Disabled>
          </div>
        ))}
      </div>

      
    </div>

   
   
  );
}

export default OfficesPage;
