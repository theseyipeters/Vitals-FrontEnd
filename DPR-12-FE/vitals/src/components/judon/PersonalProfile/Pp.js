import './Pp.css';
import RecentMedTable from './components/RecentMedTable';
import image from './components/images/Ellipse8.png';

export default function App() {
  return (
    <div className="container">
      
      <div className="body">
        <div className="side-bar">
      
        </div>

        <div className="main-bar">
          <div className="nav-bar">
            
            <div className="right">
              <h3>Profile</h3>
            </div>

            <div className="left">
              <img src={image} height="50px" />
            </div>
            
          </div>

          <div className="personal">
            
            <div className="headings">
              
              <div className="rt">
                <h3>Personal Information</h3>
              </div>

              <div className="lt">
                <h3>Clinical Information</h3>
              </div>
              
            </div>

            <div className="form">
              
              <div className="content">
                
                <div className="title">
                  <h5>Full Name</h5>
                </div>

                <div className="input">
                  <input />
                </div>
                
              </div>

              <div className="content1">
                
                <div className="title">
                  <h5>Email address</h5>
                </div>

                <div className="input">
                  <input />
                </div>
                
              </div>

              <div className="content1">
                
                <div className="title">
                  <h5>Residential address</h5>
                </div>

                <div className="input">
                  <input />
                </div>
                
              </div>

              <div className="last-content">
                
                <div className="content1">
                  
                  <div className="title">
                    <h5>Gender</h5>
                  </div>
  
                  <div className="input">
                    <input />
                  </div>
                  
                </div>

                <div className="content2">
                  
                  <div className="title">
                    <h5>Date of Birth</h5>
                  </div>
  
                  <div className="input">
                    <input />
                  </div>
                  
                </div>
                
              </div>
              
            </div>

            
          </div>

          <div className="block">
            
            <div className="top">
              
              <div className="rt1">
                <h3>Recent Medication</h3>
              </div>

              <div className="lt1">
                <h4>See all</h4>
              </div>
              
            </div>

            <div className="table">
                <RecentMedTable />
            </div>
        
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}
