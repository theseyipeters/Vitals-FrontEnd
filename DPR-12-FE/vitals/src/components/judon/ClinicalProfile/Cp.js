import './Cp.css';
import RecentMedTable from './components/RecentMedTable';
import image from './components/images/Icon.png';
import image1 from './components/images/Ellipse8.png';



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
              <img src={image1} height="50px" />
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
              
              
              <div className="last-content">
                
                <div className="content1">
                  
                  <div className="title">
                    <h5>Height</h5>
                  </div>
  
                  <div className="input">
                    <input />
                  </div>
                  
                </div>

                <div className="content2">
                  
                  <div className="title">
                    <h5>Weight</h5>
                  </div>
  
                  <div className="input">
                    <input />
                  </div>
                  
                </div>
                
              </div>

              <div className="last-content1">
                
                <div className="content1">
                  
                  <div className="title">
                    <h5>Blood Group</h5>
                  </div>
  
                  <div className="input">
                    <input />
                  </div>
                  
                </div>

                <div className="content2">
                  
                  <div className="title">
                    <h5>Genotype</h5>
                  </div>
  
                  <div className="input">
                    <input />
                  </div>
                  
                </div>
                
              </div>
              
            </div>

            
          </div>

          <div className="allergies">

            <div className="title-text">
              <h4>Allergies</h4>
            </div>

            <div className="sections">

              <div className="section">
                
                <div className="stitle">
                  <h4>Medication</h4>
                </div>

                <div className="scontents">
                  
                  <div className="inner-section">
                    
                    <div className="drug">
                      <h5>Septrin</h5>
                    </div>

                    <div className="cancel">
                      <img src={image} />
                    </div>
                    
                  </div>

                  <div className="inner-section1">
                    
                    <div className="drug">
                      <h5>Sulphur containing Med</h5>
                    </div>

                    <div className="cancel">
                      <img src={image} />
                    </div>
                    
                  </div>

                  
                </div>

                <div className="sub-txt">
                  <h5>+ Add allergy</h5>
                </div>
                
              </div>

              <div className="section">
                
                <div className="stitle">
                  <h4>Food</h4>
                </div>

                <div className="scontents">
                  
                  <div className="inner-section">
                    
                    <div className="drug">
                      <h5>Nuts</h5>
                    </div>

                    <div className="cancel">
                      <img src={image} />
                    </div>
                    
                  </div>

                  <div className="inner-section1">
                    
                    <div className="drug">
                      <h5>Lactose</h5>
                    </div>

                    <div className="cancel">
                      <img src={image} />
                    </div>
                    
                  </div>

                  
                </div>

                <div className="sub-txt">
                  <h5>+ Add allergy</h5>
                </div>
                
              </div>

              <div className="section">
                
                <div className="stitle">
                  <h4>Eniviroment</h4>
                </div>

                <div className="scontents">
                  
                  <div className="inner-section2">
                    
                    <div className="drug">
                      <h5>No known allergy</h5>
                    </div>
                    
                  </div>

                  
                </div>

                <div className="sub-txt">
                  <h5>+ Add allergy</h5>
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
