import "./Profile.css";

export default function Profile_Nutthawat({
  // for image profile style you name & About for you
  img_profile = (
    <img
      src="https://i.pinimg.com/1200x/1a/11/0e/1a110e1509a0b87928f8a36ebaf055e8.jpg"
      alt=""
    />
  ),
  Name = "Profile Nutthawat",
  About_me = "สวัสดีครับ ผมชื่อ ณัฐวัฒน์ เป็นนักพัฒนาเว็บที่มีความสนใจในการสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจและมีประสิทธิภาพ ผมมีความชำนาญในการใช้เทคโนโลยีเว็บสมัยใหม่ เช่น React, Vue และ Node.js เพื่อสร้างแอปพลิเคชันที่ตอบสนองต่อความต้องการของผู้ใช้ได้อย่างดี นอกจากนี้ ผมยังมีความสนใจในการเรียนรู้เทคโนโลยีใหม่ ๆ และพัฒนาทักษะของตัวเองอย่างต่อเนื่อง เพื่อให้สามารถสร้างผลงานที่มีคุณภาพและเป็นประโยชน์ต่อผู้ใช้งานได้มากที่สุดครับ",

  // for experience style & text About you experience
  img_experience = (
    <img
      src="https://i.pinimg.com/1200x/90/d6/16/90d616365c29d7cad0949d26ee585060.jpg"
      alt=""
    />
  ),
  About_experience = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis, provident corporis est ratione consequuntur aliquid ipsa voluptatem officiis porro! Dolorem, necessitatibus. Necessitatibus repellendus in nihil accusantium harum a consequatur.",
}) {
  return (
    <div className="main_box">
      <div className="img_box">{img_profile}</div>
      <div className="is_me">
        <h1>{Name}</h1>
        <h2>{About_me}</h2>
      </div>

      <div className="xp_box">{img_experience}</div>
      <div className="xp_experience">
        <h2>{About_experience}</h2>
      </div>
    </div>
  );
}
