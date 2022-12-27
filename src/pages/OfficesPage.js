import React, { useEffect, useState } from 'react';
import Office from '../components/office/Office';
import getOffices from '../services/Offices/getOffices';
import styles from './officesPage.module.scss';

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

    const getResult = async () => {
        const result = await getOffices();
        setOffices(result);
    };

    useEffect(() => {
        getResult();
    }, []);


    return (
        <div className={styles.wrapperContent}>
        <div style={{width:'100%', height:'100px'}}>Offices </div>
        <div className={styles.container}>
            {offices.map(office => 
                ( 
                    <div key={office.id}>
                        <Disabled disabled={!office.available}>
                        <Office 
                        office={office}
                        className={styles.office}
                        />
                        </Disabled>
                    </div>
                        
                )
                )}
        </div>
        </div>
    )
}

export default OfficesPage