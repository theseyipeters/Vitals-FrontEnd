import image1 from './images/Avatar.png';
import image2 from './images/Vector1.png';
import image3 from './images/Vector3.png';




const HdTable = () => {
  const Hd = [
    {
      id: 1,
      pname: 'Dr. Olivia Rhye',
      specialty: 'Neurology',
      date: '10/28/12'
    },
    {
      id: 2,
      pname: 'Dr. Phoenix Baker',
      specialty: 'pediatrician',
      date: '05/03/22'
    },
    {
      id: 3,
      pname: 'Dr. Lane Steiner',
      specialty: 'Optician',
      date: '04/03/23'
    },
    {
      id: 4,
      pname: 'Dr. Lana Rhodes',
      specialty: 'Dietician',
      date: '10/08/22'
    },
    {
      id: 5,
      pname: 'Dr. Okeke Ifeanyi',
      specialty: 'Cardiologist',
      date: '06/10/21'
    },
    {
      id: 6,
      pname: 'Dr. Adesina Saka',
      specialty: 'Gynaecologist',
      date: '07/07/23'
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
              Specialty 
            </th>

            
            <th className="header3">
              Date
            </th>

            <th className="header4">
              Action
            </th>

            <th className="header5">
              
            </th>
      
          </tr>
    
        </thead>

        <tbody>
          {Hd.map((hd) => (
           <tr>
            
                    <td >
                      <input type="checkbox" className="check2" />
                    </td>
            
                    <td className="pimage">
                      <img src={image1} />
                      
                      <div className="pname">
                        {hd.pname}
                      </div>
                    </td>
    
                    <td className="specialty">
                      {hd.specialty}
                    </td>
            
                    <td className="pdate">
                       {hd.date}
                    </td>
            
                    <td className="pdelete">
                      <img src={image2} />
                    </td>
            
                    <td className="pedit">
                      <img src={image3} />
                    </td>
                    
                  </tr>
              
          ))}
  
           
          
        </tbody>
      </table>

    </>
  );
}
export default HdTable;