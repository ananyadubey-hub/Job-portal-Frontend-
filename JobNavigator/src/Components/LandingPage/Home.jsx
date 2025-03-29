import Typewriter from 'typewriter-effect';
import Testimonial from './Testimonial';
import Footer from './Footer';
function Home(){
    return(
        <>
        
       <div classname="container-fluid container_1">
        
        <div className="row">
            <div className="col-sm-12 hero_section">
                <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-5" style={{paddingTop:"100px"}} ><b style={{fontSize:"60px",textAlign:"left",color:"#28395a",fontWeight:"bold",lineHeight:"70px"}}><Typewriter 
                options={{
                  strings:['Find the most exciting startup jobs.'],
                  autoStart:true,
                  loop:true,
                }}
                /></b><br/><br/>
                <br/><br/>
                </div>
                <div className="col-sm-5"></div>
                </div>
            </div>
        </div>



        <div className="row package">
        
        <div className="col-sm-12" style={{textAlign:"center",color:"#fb246a",fontSize:"15px",marginTop:"30px"}}>FEATURES TOURS PACKAGES
          <p style={{textAlign:"center",color:"#242b5e",fontSize:"40px",fontWeight:"bold"}}>Browse Top Categories</p>
        </div>

        <div className="col-sm-12 package_1">

        <div className="row  package_1">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="row" style={{minHeight:"200px",display:"flex",justifyContent:"center"}}>
              <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c1.PNG"/><br/><small style={{color:"#282f50"}}>Design & Creative</small><br/><b style={{color:"#fb246a"}}>(363)</b></div>
              <div className="col-sm-3 package_3 " style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c2.PNG"/><br/><small style={{color:"#282f50"}}>Design & Development</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>
              <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c3.PNG"/><br/><small style={{color:"#282f50"}}>Sales & Marketing</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>
              <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c4.PNG"/><br/><small style={{color:"#282f50"}}>Mobile Applications</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>
            </div>
            <div className="row" style={{minHeight:"200px",display:"flex",justifyContent:"center"}}>

            <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c5.PNG"/><br/><small style={{color:"#282f50"}}>Constuction</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>
              <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c6.PNG"/><br/><small style={{color:"#282f50"}}>Information Technology</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>
              <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c7.PNG"/><br/><small style={{color:"#282f50"}}>Real Estate</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>
              <div className="col-sm-3 package_3" style={{minHeight:"160px",width:"188px",margin:"20px",border:"2px solid #dbfcef",textAlign:"center",paddingTop:"30px",boxShadow:"0px 0px 25px 20px #eaedff "}}><img src="./c8.PNG"/><br/><small style={{color:"#282f50"}}>Content Writer</small><br/><b style={{color:"#fb246a"}}>(368)</b></div>

            </div><br/>
            <div className="row" style={{minHeight:"100px"}}>

            <center><input style={{paddingLeft:"40px",paddingRight:"40px",paddingBottom:"10px",paddingTop:"10px",border:"2px solid #dadcf4",borderRadius:"4px",background:"white",color:"#aaace2"}} type="button" value="BROWSE ALL SECTORS"/></center>

            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>

        </div>
        
        
        
        
        
        
        
        </div>

        <div className="row resume ">
<div className="col-sm-2"></div>
<div className="col-sm-8"><p style={{textAlign:"center",color:"white",fontSize:"15px"}}>FEATURED TOURS PACKAGES</p><p style={{textAlign:"center",color:"white",fontSize:"40px",fontWeight:"bold"}}>Make a Difference with your Online Resume!</p><br/>
<center><input style={{paddingTop:"10px",paddingBottom:"10px", paddingLeft:"40px",paddingRight:"40px",background:"#242b5e",color:"#7d79b3",border:"1px solid #7d79b3",borderRadius:"4px"}}type="button" value="UPLOAD YOUR CV"/></center>
</div>
<div className="col-sm-2"></div>
        </div>



        <div className="row recent" style={{background:"#eaedff"}}>
        <div className="col-sm-12" style={{textAlign:"center",color:"#fb246a",fontSize:"15px",marginTop:"30px"}}>RECENT JOB
          <p style={{textAlign:"center",color:"#242b5e",fontSize:"40px",fontWeight:"bold"}}>Featured Jobs</p>
        </div>

<div className="col-sm-12 recent_1 ">

<div className="row ">
  <div className="col-sm-3"></div>
  <div className="col-sm-6">
    
    <div className="row" style={{minHeight:"100px",margin:"10px",border:"1px solid white",boxShadow:"0px 0px 25px 20px white "}}>
     <div className="col-sm-2" style={{marginTop:"6px"}}><img src="./job-list1.png"/></div>
     <div className="col-sm-8" style={{marginTop:"20px"}} ><small style={{fontSize:"20px",color:"black",}}>Digital Marketer<br/><small style={{fontSize:"13px",color:"#929595"}}>Creative Agency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Athens,Greece&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3500-$4000</small ></small></div>
     <div className="col-sm-2" style={{marginTop:"20px"}}><small style={{border:"1px solid #929595",paddingLeft:"6px",paddingRight:"6px",borderRadius:"10px"}}>full time</small><br/><small style={{fontSize:"13px",color:"#929595"}}>7 hours ago</small></div>
    </div>
  <div className="row" style={{minHeight:"100px",margin:"10px",border:"1px solid white",boxShadow:"0px 0px 25px 20px white "}}>
  <div className="col-sm-2" style={{marginTop:"6px"}}><img src="./job-list2.png"/></div>
     <div className="col-sm-8" style={{marginTop:"20px"}} ><small style={{fontSize:"20px",color:"black",}}>Digital Marketer<br/><small style={{fontSize:"13px",color:"#929595"}}>Creative Agency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Athens,Greece&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3500-$4000</small ></small></div>
     <div className="col-sm-2" style={{marginTop:"20px"}}><small style={{border:"1px solid #929595",paddingLeft:"6px",paddingRight:"6px",borderRadius:"10px"}}>full time</small><br/><small style={{fontSize:"13px",color:"#929595"}}>7 hours ago</small></div>
    </div>
  <div className="row" style={{minHeight:"100px",margin:"10px",border:"1px solid white",boxShadow:"0px 0px 25px 20px white "}}>
  <div className="col-sm-2" style={{marginTop:"6px"}}><img src="./job-list3.png"/></div>
     <div className="col-sm-8" style={{marginTop:"20px"}} ><small style={{fontSize:"20px",color:"black",}}>Digital Marketer<br/><small style={{fontSize:"13px",color:"#929595"}}>Creative Agency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Athens,Greece&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3500-$4000</small ></small></div>
     <div className="col-sm-2" style={{marginTop:"20px"}}><small style={{border:"1px solid #929595",paddingLeft:"6px",paddingRight:"6px",borderRadius:"10px"}}>full time</small><br/><small style={{fontSize:"13px",color:"#929595"}}>7 hours ago</small></div>
    </div>
  <div className="row" style={{minHeight:"100px",margin:"10px",border:"1px solid white",boxShadow:"0px 0px 25px 20px white "}}>
  <div className="col-sm-2" style={{marginTop:"6px"}}><img src="./job-list4.png"/></div>
     <div className="col-sm-8" style={{marginTop:"20px"}} ><small style={{fontSize:"20px",color:"black",}}>Digital Marketer<br/><small style={{fontSize:"13px",color:"#929595"}}>Creative Agency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Athens,Greece&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$3500-$4000</small ></small></div>
     <div className="col-sm-2" style={{marginTop:"20px"}}><small style={{border:"1px solid #929595",paddingLeft:"6px",paddingRight:"6px",borderRadius:"10px"}}>full time</small><br/><small style={{fontSize:"13px",color:"#929595"}}>7 hours ago</small></div>
    
    </div>
  
  </div>
  <div className="col-sm-3"></div>
</div>

</div>


        </div>




        <div className="row job" >

       <div className="col-sm-2 " height="600px"></div>
       <div className="col-sm-8"  height="600px">
        <div className="row  job_1" ><small style={{paddingTop:"70px",textAlign:"center",color:"#fb246a",fontSize:"15px"}}>APPLY PROCESSES</small><p style={{textAlign:"center",color:"white",fontSize:"40px",fontWeight:"bold"}}>How it Works</p></div>
        <div className="row  job_2" style={{justifyContent:"center"}}>
          
          <div className="col-sm-4 job_3" style={{paddingTop:"40px",paddingBottom:"40px",paddingLeft:"40px",paddingRight:"40px",textAlign:"center"}}><img src="./c10.PNG"/><p style={{fontWeisght:"bold",fontSize:"20px",color:"white"}}>1. Search a Job</p><p style={{color:"white",fontSize:"10px"}}>Sorem spsum dolar sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p></div>
          <div className="col-sm-4 job_3" style={{paddingTop:"40px",paddingBottom:"40px",paddingLeft:"40px",paddingRight:"40px",textAlign:"center"}}><img src="./c11.PNG"/><p style={{fontWeisght:"bold",fontSize:"20px",color:"white"}}>2. Apply for Job</p><p style={{color:"white",fontSize:"10px"}}>Sorem spsum dolar sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p></div>
          <div className="col-sm-4 job_3" style={{paddingTop:"40px",paddingBottom:"40px",paddingLeft:"40px",paddingRight:"40px",textAlign:"center"}}><img src="./c12.PNG"/><p style={{fontWeisght:"bold",fontSize:"20px",color:"white"}}>3. Get your Job</p><p style={{color:"white",fontSize:"10px"}}>Sorem spsum dolar sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p></div>
          
          </div>
       </div>
       <div className="col-sm-2 " height="600px"></div>

        </div>



        <div className="row testimonial" style={{background:"#eaedff"}}>
          {/* <div className="col-sm-4 " height="600px" style={{background:"#eaedff"}}></div>
          <div className="col-sm-4" height="600px" style={{ paddingTop:"150px",paddingBottom:"100px",textAlign:"center"}}><img src="./testimonial-founder.png"/><br/><br/><b>Margaret Lawson</b><br/><small>Creative Director</small>
          <br/><br/><i style={{fontSize:"15px",color:"#808080"}}>"I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."</i>
          </div>
          <div className="col-sm-4" height="600px" style={{background:"#eaedff"}}></div> */}
          <Testimonial/>
        </div>

<br/><br/>


        <div className="row talented">

       <div className="col-2" ></div>
       <div className="col-4 talented_2"><small style={{fontSize:"15px",color:"#fb246a"}}>WHAT WE ARE DOING</small><br/><br/><small style={{fontSize:"30px",color:"#242b5e",fontWeight:"bold"}}>24K Talented peoples getting Jobs.</small>
       <br/><br/><small style={{fontSize:"15px",color:"black",fontWeight:"bold"}}>Mollit anim laborum duis au dolor in voluptate velit ess cillujm dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillum.</small>
       <br/><br/><small style={{fontSize:"10px",color:"#a39697",fontWeight:"bold"}}>Mollit anim laborum. Duis aute irufg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihaur. Excgcepteur signjnt occa cupidatat non inulpadeserunt mollit abaru. Temnthp incididbnt ut labore mollit anim laborum anim laborum suis aute.</small>
       <br/><br/><input style={{background:"#fb246a",color:"white",border:"1px solid #fb246a",fontSize:"15px",paddingLeft:"30px",paddingRight:"30px",paddingTop:"10px",paddingBottom:"10px",borderRadius:"4px"}} type="button" value="POST A JOB"/>
       </div>
       <div className="col-4 talented_1"></div>
       <div className="col-2" ></div>
        </div>

<br/><br/><br/>
        
          <div className="row">
          <div className="col-sm-12" style={{textAlign:"center",color:"#fb246a",fontSize:"15px",marginTop:"30px"}}>OUR LATEST BLOG
          <p style={{textAlign:"center",color:"#242b5e",fontSize:"40px",fontWeight:"bold"}}>Our Recent News</p>
        </div> 
<br/><br/>
        <div className="col-sm-12 news">
          <div className="row news">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <div className="row" style={{minHeight:"250px",marginTop:"40px"}}><img src="./home-blog1.jpg"/></div>
              <div className="row" style={{minHeight:"250px",paddingTop:"20px"}}><small style={{paddingLeft:"50px"}}>| Properties<br/><br/><b style={{fontSize:"20px"}}>Footprints in Time is perfect<br/> House in Kaurashiki</b><br/><br/>READ MORE</small>
              
              </div>
              </div>
            <div className="col-sm-4">
              <div className="row" style={{minHeight:"250px",marginTop:"40px"}}><img src="./home-blog2.jpg"/></div>
              <div className="row" style={{minHeight:"250px",paddingTop:"20px"}}><small style={{paddingLeft:"50px"}}>| Properties<br/><br/><b style={{fontSize:"20px"}}>Footprints in Time is perfect<br/> House in Kaurashiki</b><br/><br/>READ MORE</small></div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
          </div>




         
          














       </div>
       

        </>
    )
}

        
export default Home;