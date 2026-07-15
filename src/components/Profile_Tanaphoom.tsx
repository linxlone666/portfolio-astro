import "./Profile.css"
interface ProfileProps {
    img_profile?: string;
    Name?: string;
    About_me?: string;
    img_experience?:string;
    About_experience?:string;
}

export default function Profile_Tanaphoom({
        // for image profile style you name & About for you
        img_profile = "https://i.pinimg.com/736x/bd/33/14/bd33149f3226511fad6c6f7b9fd0799e.jpg" ,
        Name = "Profile - Tanaphoom",
        About_me = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus ipsum quasi quis, et dicta laboriosam aliquid ut libero, accusamus fuga sequi cum, amet a reprehenderit dolorem atque similique eum!",

        // for experience style & text About you experience
        img_experience = "https://i.pinimg.com/1200x/90/d6/16/90d616365c29d7cad0949d26ee585060.jpg",
        About_experience = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis, provident corporis est ratione consequuntur aliquid ipsa voluptatem officiis porro! Dolorem, necessitatibus. Necessitatibus repellendus in nihil accusantium harum a consequatur.",
        
    }:ProfileProps) {
    return(
        <div className="main_box">
            <div className="img_box">
                    <img src={img_profile} alt="" />
                    </div>
                <div className="is_me">
                    <h1>{Name}</h1>
                    <h2>{About_me}</h2>
                </div>

                <div className="xp_box">
                    <img src={img_experience} alt="" />
                    </div>
                <div className="xp_experience">
                    <h2>{About_experience}</h2>
                </div>
        </div>
    )
}