import React from 'react';
import img1 from '../../../images/blog_10-600x450.jpg'
import img2 from '../../../images/blog_08-600x450.jpg'
import img3 from '../../../images/blog_13-600x450.jpg'

const CareerTips = () => {
    return (
        <div style={{marginTop:'80px'}}>
            <div className='container'>
                <div className='row'>
                    <div className='text-center m-2'>
                        <h3><span style={{color:'#e8be2f'}}>Quick</span> Career Tips</h3>
                        <p>Found by employers communicate directly with hiring <br />  managers and recruiters.</p>
                    </div>
                <div  className='col-12 col-lg-4 col-md-6  mb-5'>
                    <div className='m-2 border'> 
                        <img src={img1} width="100%" height="260px" alt="" />
                    
                       <div className='p-2'>
                       <h6 className='text-secondary mt-3'>Career Fair 2016. </h6>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore eligendi ex impedit, distinctio, incidunt sequi eius modi quae commodi vero quam quia eaque ipsum 
                       
                        </p>
                        <button  style={{ height:'35px'}} className='btn text-warning'>DwonLoad Now</button>
                       </div>

                      
                    
                    </div>
                </div>
                <div  className='col-12 col-lg-4 col-md-6  mb-5'>
                    <div className='m-2 border'> 
                        <img src={img2} width="100%" height="260px" alt="" />
                    
                       <div className='p-2'>
                       <h6 className='text-secondary mt-3'>Career Fair 2016. </h6>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore eligendi ex impedit, distinctio, incidunt sequi eius modi quae commodi vero quam quia eaque ipsum
                        </p>
                        <button  style={{ height:'35px'}} className='btn text-warning'>DwonLoad Now</button>
                       </div>

                      
                    
                    </div>
                </div>
                <div  className='col-12 col-lg-4 col-md-6  mb-5'>
                    <div className='m-2 border'> 
                        <img src={img3} width="100%" height="260px" alt="" />
                    
                       <div className='p-2'>
                       <h6 className='text-secondary mt-3'>Career Fair 2016. </h6>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore eligendi ex impedit, distinctio, incidunt sequi eius modi quae commodi vero quam quia eaque ipsum 
                        </p>
                        
                        <button  style={{ height:'35px'}} className='btn text-warning'>Dwonload Now</button>
                       </div>

                      
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CareerTips;