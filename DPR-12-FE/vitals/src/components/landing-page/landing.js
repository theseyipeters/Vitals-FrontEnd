import './landing.css';
/*import Testimonials from './components/Testimonials';*/
import logo from './landing-components/images/pic1.png';
import image from './landing-components/images/pic8.png';
import image1 from './landing-components/images/pic2.png';
import image2 from './landing-components/images/pic3.png';
import image3 from './landing-components/images/pic4.png';
import image5 from './landing-components/images/pic5.png';
import image6 from './landing-components/images/pic6.png';
import image7 from './landing-components/images/pic12.png';
import image8 from './landing-components/images/pic13.png';
import image9 from './landing-components/images/pic14.png';
import image10 from './landing-components/images/pic15.png';
import image11 from './landing-components/images/pic16.png';
import image12 from './landing-components/images/pic17.png';
import image13 from './landing-components/images/pic18.png';
import image14 from './landing-components/images/pic19.png';
import image15 from './landing-components/images/pic9.png';
import image16 from './landing-components/images/pic10.png';
import image17 from './landing-components/images/pic11.png';
import image18 from './landing-components/images/pic21.png';





export default function App() {
  return (
    <div className="container">

      <div className="nav-bar">
        <div className="logo">
          <img src={image7} />
        </div>

        <div className="menus">
          <a href="">Home</a>
          
          <div className="menu">
            <a href="">Product & Solutions</a>
            <a href=""> <img src ={image12}/> </a>
          </div>

          <div className="menu">
            <a href="">Resources</a>
            <a href=""> <img src ={image12}/> </a>
          </div>

          <a href="">Our Company</a>
          
          <a href="">Contact</a>

          <div className="btn7">
            <div className="btn-7">
              <a href="#">SCHEDULE A DEMO</a>
            </div>
          </div>
          
            
        </div>
      </div>

      <div className="block1">

        <div className="rt1">
          <div className="title">
            <h3>Revolutionizing Healthcare <br /> Medical Record Efficiency. </h3>
          </div>

          <div className="content">
            <h4>providing our users with a system that helps manage <br/>medical records and automate clinical workflow with <br/>optimal security measures.</h4>
          </div>

          <div className="btn1">
            <div className="btn">
              <a href="">LEARN MORE</a>
            </div>
          </div>

          
        </div>

        <div className="lt1">
          <img src={image} height="450px" width="550px"/>
        </div>
        
      </div>

      <div className="block2">

        <div className="title2">
          <h6>Who We Are!</h6>
        </div>

        <div className="subtitle">
          <h3>Leading provider of healthcare<br/> software solutions and services</h3>
        </div>

        <div className="grids">
          <div className="grid">
            
            <div className="gimg">
              <img src={image1} />
            </div>
            
            <div className="gtit">
              <h4>A proven EHR system</h4>
            </div>

            <div className="gcont">
              <h5>An all in one interoperable healthcare software solution and client service experience that accomodates the needs of medical reports specialties</h5>
            </div>
            
          </div>
          
          <div className="grid">

            <div className="gimg">
              <img src={image2} />
            </div>
            
            <div className="gtit">
              <h4>Data security and privacy</h4>
            </div>

            <div className="gcont">
              <h5>Robust security measures are in place to protect your data from unauthorised access, breaches and cyber threats. This includes encryption, user authentication, regular security assessments, and compliance with privacy regulations.</h5>
            </div>
            
          </div>
          
          <div className="grid">

            <div className="gimg">
              <img src={image3} />
            </div>
            
            <div className="gtit">
              <h4>Integrated Telehealth</h4>
            </div>

            <div className="gcont">
              <h5>Vitals has provisions that help primary and specialty providers deliver in-office quality remotely, improving safety and access to health care, for patients who find travel difficult because of distance, age, condition or during a time of crisis.</h5>
            </div>
            
          </div>
          
        </div>

        
      </div>

      <div className="block3">

        <div className="mid">
           <div className="rt3">

            <div className="title3">
              <h3>Your practice. Our purpose.</h3>
            </div>

            <div className="subtitle3">
              <h4>A streamline and efficient electronic health record, designed for independent practices like<br/> yours. There is no risk, no commitment and no credit card required to start a free EHR trial.</h4>
            </div>
             
            
          </div>

          <div className="lt3">
            
            <div className="btn1">
              
              <div className="btn3">
                <a href="">START YOUR FREE TRIAL</a>
              </div>
              
            </div>
            
          </div>
          
        </div>
       
      </div>

      <div className="block4">
        
        <div className="rt4">
          <div className="pic">
            <img src={image5} />
          </div>

          <div className="content4">
            <h4>Our mission is simple: to enable the success of <br/> your practice. From day one we make it easy to get up and <br/>running with Vitals. Once onboarded, our support team <br/> is ready to make sure that your success continues. Free <br/>for vitals customers. </h4>
          </div>

          <div className="pic2">
            <div className="btn">
              <a href>LEARN MORE</a>
            </div>

            <div className="pic4">
              <img src={image6} />
            </div>
            
          </div>
          
        </div>
        
      </div>

      <div className="block5">
        
        <div className="title2">
          <h6>What customers say!</h6>
        </div>

        <div className="subtitle">
          <h3>Why choose Vitals?</h3>
        </div>

        <div className="content5">
          <h4>At Vitals, we believe in practice well-being. Our customers face a wide range of challenges but all want to improve their practice, productivity and care delivery. Vitals provide proven solutions backed by quality customer care and training support.See what vitals customers have to say about their experiences. </h4>
        </div>

        <div className="grid5">
          
          <div className="testifiers">

            <div className="arrow">
              <img src={image13} />
            </div>

            <div className="testifier">
              <div className="pict">
                <img src={image15} className="image" />
                <div class="overlay"></div>
              </div>

              <div className="namet">
                <h4>Dr. Victoria Phd</h4>
              </div>
            </div>

            <div className="testifier">
              <div className="pict">
                <img src={image16} className="image"/>
                <div class="overlay1"></div>
                
              </div>

              <div className="namet">
                <h4>Dr. Victoria Phd</h4>
              </div>
            </div>

            <div className="testifier">
              <div className="pict">
                <img src={image17} />
              </div>

              <div className="namet">
                <h4>Dr. Victoria Phd</h4>
              </div>
            </div>

            <div className="testifier">
              <div className="pict">
                <img src={image16} className="image" />
                <div class="overlay1"></div>
              </div>

              <div className="namet">
                <h4>Dr. Victoria Phd</h4>
              </div>
            </div>

            <div className="testifier">
              <div className="pict">
                <img src={image15} className="image" />
                <div class="overlay"></div>
              </div>

              <div className="namet">
                <h4>Dr. Victoria Phd</h4>
              </div>
            </div>

            <div className="arrow">
              <img src={image14} />
            </div>
            
            
          </div>
          
        </div>

        <div className="texts">
          <h6>"Vitals is user-friendly and easy for your clients to use too. Helps you manage your database"</h6>
        </div> 

        
        
      </div>

      <div className="block6">
        
        <div className="title2">
          <h6>FAQs</h6>
        </div>

        <div className="subtitle">
          <h4>Frequently Asked Questions</h4>
        </div>

        <div className="bottom">
          <div className="rt6">
            <div class="question-lists">
              <details class="d1">
                  
                  <summary> What is an EMR? </summary>
      
                  <div>
                      The Markets in Financial Instruments Directive (MiFID) is a regulatory framework that aims to increase investor protection and reduce systemic risk by setting common standards and rules for investment firms operating in the EU. 
                  </div>
      
              </details>
      
              <details class="d1">
                  
                  <summary> Does the EMR support interoperability with other systems and health care providers? </summary>
      
                  <div>
                      The Packaged Retail and Insurance-based Investment Products (PRIIPs) regulation aims to 
                  </div>
      
              </details>
      
              <details class="d1">
                  
                  <summary> Are there any additional cost or fees beyond the initial purchase or subscription? </summary>
      
                  <div>
                      The Prospectus regulation creates a framework for the format, content, and approval of base 
                  </div>
      
              </details>
      
              <details class="d1">
                  
                  <summary> Can the EMR accomodate different medical specialties and workflow </summary>
      
                  <div>
                      The Investment Firms directive and regulation (IFD and IFR) introduce a prudential framework for investment firms.
                  </div>
      
              </details>
    
              <details class="d1">
                  
                  <summary> Does EMR offer features for clinical documentation, including progress notes and medical orders? </summary>
      
                  <div>
                      The Investment 
                  </div>
      
              </details>
              
            </div>
            
          
          </div>
  
          <div className="lt6">
            <img src={image18} />
          </div>
  
        
        </div>

        
        
      </div>

      <div className="block7">

        <div className="inner">

          <div className="title2">            
            <h6>Ready to Practice?</h6> 
          </div>

          <div className="subtitle">
            <h4>Tranform Your Practice with </h4>
            <h4 className="blue">Vitals</h4>
          </div>

          <div className="btn7">
            <div className="btn-7">
              <a href="#">SCHEDULE A DEMO</a>
            </div>
          </div>
          
        </div>
      </div>

      <footer className="footer">
        
        <div className="fblocks">

          <div className="fblock1">

            <div className="logo1">
              <img src={logo} />
            </div>

            <div className="socials">
              <img src={image8} />
              <img src={image9} />
              <img src={image10} />
              <img src={image11} />
            </div>

            <div className="form-title">
            
              <h4>Stay informed with Vitals on the  latest<br/> health news</h4>
              
            </div>

            <div className="form">
              <div className="input1">
                <input type="email" placeholder="enter your email address"/>
              </div>

              <div className="input2">
                <input type="button" value="Subscribe"/>
              </div>
              
            </div>
            
          </div>

          <div className="other-blocks">

            <div className="fblock2">
              
              <div className="ftitle">
                <h5>EHR PRODUCT & FEATURES</h5>
              </div>
  
              <div className="fcontents">
                <ul>
                  <li>EHR</li>
                  <li>Charting</li>
                  <li>Electronic Prescribing</li>
                  <li>Labs and Imaging</li>
                </ul>
              </div>
          
            </div>

            <div className="fblock3">
              
              <div className="ftitle">
                <h5>Solutions</h5>
              </div>
  
              <div className="fcontents">
                <ul>
                  <li>Electronic Health Record</li>
                  <li>Care Delivery</li>
                  <li>Patient Collections</li>
                  <li>Interoperability</li>
                  <li>Telehealth</li>
                  <li>Patient Engagement</li>
                </ul>
              </div>
          
            </div>

            <div className="fblock4">
              
              <div className="ftitle">
                <h5>Company</h5>
              </div>
  
              <div className="fcontents">
                <ul>
                  <li>About Vitals</li>
                  <li>Contact Us</li>
                  <li>Our Podcasts</li>
                  <li>Events</li>
                  <li>Support</li>
                </ul>
              </div>
          
            </div>
            
          </div>
          
        </div>

        <div className="copy-right">
          <h6>@2023 Vitals.com | site map | Terms | Privacy Policy | EHR Certification | EHR Status</h6>
        </div>
        
      </footer>
      
    </div>
  )
}
