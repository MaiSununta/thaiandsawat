import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import photo from './โลโก้.png';

const Contact = () => {
  return (
    <MainLayout>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>ติดต่อ</h2>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <img src={photo} className="App-photo" style={{ width: '30%', height: 'auto' }} alt="photo" />
            <h3>ร้านไทยและสวัสดิ์</h3>
            <p><strong>Address:</strong> เลขที่ 337 ถ.เจริญรัถ อยู่เยื้องๆกับซอยเจริญรัถ 10 วงเวียนใหญ่</p>
            <p><strong>Tel:</strong> 02-438-3454 หรือ 081-3725-900</p>
            <p><strong>LINE:</strong> @thaiandsawat (พิมพ์ @ ด้วยนะคะ)</p>
          </div>
          {/* เพิ่มส่วนการติดต่ออื่น ๆ ที่ต้องการ */}
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;