import './HospDash.css';
import image from './components/images/Icon1.png';
import image1 from './components/images/Vector.png';
import image2 from './components/images/Frame.png';
import image3 from './components/images/Frame1.png';
import image4 from './components/images/Frame2.png';
import image5 from './components/images/Frame3.png';
import image6 from './components/images/Vector4.png';
import image7 from './components/images/Icon.png';
import HdTable from './components/HdTable';







export default function App() {
  return (
    <div className="container">
      
      <div className="body">
        
        <div className="side-bar">
        
        </div>

        <div className="main-bar">
          <div className="nav-bar">
            <div className="right">
              <h3><i>Dashboard</i></h3>
            </div>

            <div className="left">
              <div className="limg">
                <img src={image1} className="dp"/>
              </div>

              <div className="ltxt">
                <h5 className="admin">admin</h5>
              </div>

              <div className="lid">
                <img src={image} className="idown" />
              </div>
              
              
            </div>
            
          </div>

          <div className="middle">
            <div className="mid-bars">

              <div className="bar">
                <div className="icon">
                  <img src={image2} />
                </div>

                <div className="text">
                  
                  <div className="up">
                    <h4>1000</h4>
                  </div>

                  <div className="down">
                    <h4>Doctors</h4>
                  </div>
                </div>
                
              </div>

              <div className="bar">
                <div className="icon">
                  <img src={image3} />
                </div>

                <div className="text">
                  
                  <div className="up">
                    <h4>900</h4>
                  </div>

                  <div className="down">
                    <h4>Patients</h4>
                  </div>
                </div>
                
              </div>

              <div className="bar">
                <div className="icon">
                  <img src={image4} />
                </div>

                <div className="text">
                  
                  <div className="up">
                    <h4>600</h4>
                  </div>

                  <div className="down">
                    <h4>Appointments</h4>
                  </div>
                </div>
                
              </div>

              <div className="bar">
                <div className="icon">
                  <img src={image5} />
                </div>

                <div className="text">
                  
                  <div className="up">
                    <h4>900</h4>
                  </div>

                  <div className="down">
                    <h4>Documents</h4>
                  </div>
                </div>
                
              </div>
              
              
            </div>
            
          </div>

          <div className="calendar">
            <div className="cbtn">
              <div className="cimg">
                <img src={image6} />
              </div>
  
              <div className="ctxt">
                <h4>06/02/2023 - 05/03/2023</h4>
              </div>
  
              <div className="cidown">
                <img src={image7} />
              </div>
            </div>
            
            
          </div>

          <div className="block">
            
            <div className="top">
              
              <div className="rt">
                <h3><i>Doctors Pending Request</i></h3>
              </div>

              <div className="lt">
                <h4>See all</h4>
              </div>
              
            </div>

            <div className="table">
                <HdTable />
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}
