import React from 'react'
import { Image } from 'antd';

const Ynquiz2 = () => { 
  return (
    
    <div className='Ynquiztion'>
    <h2> เป้าหมายที่คุณต้องการ ลดไขมัน</h2>
      <Image 
        width={500}
        height={500}
        src="l.jpg"
      /><br></br>
      
      <div className="button-container">
    
          <button className='yes-button' >ใช่</button>
          <h4>&nbsp; &nbsp; &nbsp; หรือ &nbsp; &nbsp; &nbsp;</h4>
          <button className='no-button' >ไม่</button>
      
      </div>
    </div>  
    

    
  )
}

export default Ynquiz2;

