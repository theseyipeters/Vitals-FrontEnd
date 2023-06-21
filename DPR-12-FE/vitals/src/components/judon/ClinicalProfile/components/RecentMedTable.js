import image1 from './images/Avatar.png';


const RecentMedTable = () => {
  const Rm = [
    {
      id: 1,
      pname: 'Dr. Olivia Rhye',
      medication: 'CP Ciproflaxcin 500mg',
      date: '10/28/12'
    },
    {
      id: 2,
      pname: 'Dr. Phoenix Baker',
      medication: 'AM Amphetamin 10mg',
      date: '05/03/22'
    },
    {
      id: 3,
      pname: 'Dr. Lane Steiner',
      medication: 'AR Artemeter 50mg',
      date: '04/03/23'
    },
    
  ]
  return (
    <>
      <table>
        <thead>
          <tr className="headers">
            <th className="header">
              <input type="checkbox" className="check" />
            </th>
            
            <th className="header1"> 
              Physician's Name  
            </th>

            <th className="header2"> 
              <input type="checkbox" className="check" />

              <div className="med">
                Medication
              </div>
               
            </th>

            
            <th className="header3">
              Date
            </th>

            
      
          </tr>
    
        </thead>

        <tbody>
          {Rm.map((rm) => (
           <tr>
            
                    <td >
                      <input type="checkbox" className="check2" />
                    </td>
            
                    <td className="pimage">
                      <img src={image1} height="30px"/>
                      
                      <div className="pname">
                        {rm.pname}
                      </div>
                    </td>
    
                    <td className="specialty">
                      {rm.medication}
                    </td>
            
                    <td className="pdate">
                       {rm.date}
                    </td>
            
                    
                    
                  </tr>
              
          ))}
  
           
          
        </tbody>
      </table>

    </>
  );
}
export default RecentMedTable;