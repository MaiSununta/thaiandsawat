import React from "react";
import MainLayout from "../Layouts/MainLayout";
import กระเป๋าถือ from './กระเป๋าถือ.jpg';
import  คลัช from './คลัช.jpg';
import  กำไร from './กำไร.jpg';
import  รองเท้า from './รองเท้า.jpg';
import  เข็มขัด from './เข็มขัด.jpg';



const Product = (props) => {
  const product = [
    {
      image: กระเป๋าถือ,
      name: "Mini June",
      price: "2,290.-",
      details: "กระเป๋าเล็กกระทัดรัด สำหรับคนชอบของเล็กๆ คุณลูกค้าที่ชอบพกของเล็กๆน้อยๆ แต่ไม่อยากถือกระเป๋าใหญ่ Precia จัดให้ กับกระเป๋า Mini June ที่จะทำให้คุณสามารถถือกระเป๋าสวยๆ ใบไม่ใหญ่มาก เหมาะกับการใช้งานของคุณ ไม่ว่าจะเดินไปช็อปปิ้ง ทำงาน ก็สามารถอวดกระเป๋าสวยได้อย่างง่ายๆเลย",
    },
    {
      image: คลัช,
      name: "Romantic black clutch bag",
      price: "2,280.-",
      details: "ขนาดกระทัดรัด ใส่ของใช้จำเป็นระหว่างวันได้ครบ ตั้งแต่เช้าจรดค่ำ เช่น โทรศัพท์ กระเป๋าสตางค์ใบเล็ก มีช่องใส่บัตร สิปสติก สายสะพายปรับได้หลายแบบ แบบบอดี้ครอสเวลากลางวัน ปรับสั้นแบบหิ้ว หรือถอดสายออกใช้เป็นคลัทช์ไปปาร์ตี้",
    },
    {
      image: กำไร,
      name: "Blue data profit",
      price: "880.-",
      details: "เท่ห์ สวย มีสไตล์ Big Bangle กำไลข้อมือสำหรับคนชอบ Size ใหญ่",
    },
    {
      image: รองเท้า,
      name: "High heel shoes model 14138",
      price: "1,299.-",
      details: "รองเท้าส้นสูง รุ่น 14138 ทำงานหนังงูแท้ ลายสวย ออกแบบโดยช่างมืออาชีพ สวมใส่สบาย",
    },
    {
      image: เข็มขัด,
      name: "Lady Belt",
      price: "590.-",
      details: "เข็มขัดหนังงูแท้ สีและลายสวย ใส่แล้วดูดีมีสไตส์",
    },
  ];

  return (
    <MainLayout>
      <div style={{ marginTop: 20 }}>
        {product.map((c) => (
          <ProductCard
            name={c.name}
            price={c.price}
            details={c.details}
            image={c.image}
          />
        ))}
      </div>
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      <div style={divStyle}>
      <img src={props.image} alt={props.name} style={{ display: 'block', margin: '0 auto', maxWidth: '50%', height: 'auto', marginBottom: 20 }} />
        <p style={textStyle}>{props.name}</p>
        <p style={textStyle}>Price: {props.price}</p>
        <p style={textStyle}>Details: {props.details}</p>
      </div>
    </>
  );
};

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginLeft: "20%",
  marginRight: "20%",
  marginBottom: 15,
  fontWeight: "bold",
  fontFamily: "courier",
};

const textStyle = {
  marginBottom: 10,
};


export default Product;