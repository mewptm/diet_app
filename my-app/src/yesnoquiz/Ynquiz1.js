import React from 'react'
import { Image } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

function Ynquiz1 ()  { 
  // const navigate = useNavigate();
  return (
    <>
    <div className='Ynquiztion'>
    <h2> เป้าหมายที่คุณต้องการ ลดไขมัน</h2>
      <Image 
        width={500}
        height={500}
        src="10.jpg"
      /><br></br>
      <div className="button-container">
          <button className='yes-button' 
          onClick={()=> navigate('/ynquiz2')}>ใช่</button>
          <h4>&nbsp; &nbsp; &nbsp; หรือ &nbsp; &nbsp; &nbsp;</h4>
          <button className='no-button' 
          onClick={()=> navigate('/ynquiz2')}>ไม่</button>
      </div>
    </div>  
    </> 
  )
}

export default Ynquiz1;
