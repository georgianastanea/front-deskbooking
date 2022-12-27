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

      <div style={{ width: "100%", height: "100px" , justifyContent:'center', display:'flex'}}>
        <div>
            
            <div style={{width:'300px', height:'100px'}}>
                <h2>Choose a day</h2>
                <Calendar 
                onChange={onChange} 
                value={value} />
            </div>
            
            
        </div>
        
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
