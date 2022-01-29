import React from 'react';
import { Link } from 'react-router-dom';

const JobCategories = () => {
    return (
       <div style={{backgroundColor:'#ddd'}}>
           <div style={{paddingTop:'80px'}}  className='text-center'>
                <h3  >Popular Job <span style={{color:'#e8be2f'}}>Categories</span></h3>
                <p>One of our jobs has some kind of flexibility option - such as telecommutinga <br /> part-time schedule or a flexible or flextime schedule</p>
            </div>
            
            <div className='container text-center'>
                <div style={{marginTop:'80px'}} className='row ms-2 '>
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}}  className="fas fa-truck "></i></h1>
                         <h6>Customer Services</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fas fa-paint-brush"></i></h1>
                         <h6>Design</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fas fa-code"></i></h1>
                         <h6>Developer</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fas fa-coins"></i></h1>
                         <h6>Finance</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fab fa-sourcetree"></i></h1>
                         <h6>Human Resource</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fas fa-info-circle"></i></h1>
                         <h6>Information Technology</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fas fa-poll"></i></h1>
                         <h6>Markating</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    
                    <div className='col-12 col-lg-3 col-md-3 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-3'>
                         <h1><i style={{color:'#e8be2f'}} class="fab fa-salesforce"></i></h1>
                         <h6>Sales</h6>
                         <small>(0 Jobs)</small>
                     </div>
                    </div>
                    
                </div>
                <Link to="/jobs"><button style={{backgroundColor:'#e8be2f'}} className='btn px-4 mb-5 text-light fw-bold '>All Categories</button></Link>
        </div>
       </div>
    );
};

export default JobCategories;