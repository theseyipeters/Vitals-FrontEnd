import './Update.css'

export default function App() {
  return (
    <div className="container">
      
      <div className="body">
        
        <div className="heading">
          <h3>New Records</h3>
        </div>
        
        <div className="subheading">
          <h4>You are viewing Sarah Umeh Ogechukwu's Health Record </h4>
        </div>

        <form>
          <div className="sign">
            
            <div className="title">
              <h3>Signs and Symptoms</h3>
            </div>
  
            <div className="input1">
  <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>          
            </div>
            
          </div>
  
          <div className="signs">
            
            <div className="title">
              <h3>Lab Test</h3>
            </div>
  
            <div className="input">
              <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>
            </div>
            
          </div>
  
          <div className="signs">
            
            <div className="title">
              <h3>Test Result</h3>
            </div>
  
            <div className="input">
              <textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>
            </div>
            
          </div>
  
          <div className="vitals">
            
            <div className="title">
              <h3>Vital signs</h3>
            </div>
  
            <div className="vinputs">
  
              <div className="input">
                
                <div className="input-title">
                  <h4>Blood pressure</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="input">
                
                <div className="input-title">
                  <h4>Blood sugar</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="input">
                
                <div className="input-title">
                  <h4>Temperature</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
              
            </div>
  
            <div className="vinputs">
  
              <div className="vinput">
                
                <div className="input-title">
                  <h4>Heart rate</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="vinput">
                
                <div className="input-title">
                  <h4>Oxygen level</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
  
              <div className="vinput">
                
                <div className="input-title">
                  <h4>Respiratory rate</h4>
                </div>
  
                <div className="input-bar">
                  <textarea rows="5" cols="60" name="text"></textarea>
                </div>
                
              </div>
              
            </div>
            
          </div>
  
          <div className="btns">
           
            <div className="btn">
              <input type="submit" value="Cancel" />
            </div>
            
            <input type="submit" value="Update Record" />
            
          </div>
        </form>

        
    
      </div>
      
    </div>
  )
}
