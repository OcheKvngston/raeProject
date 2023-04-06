import React from "react";

const Card = ({title,content,name
})=>{
    return(
        <div style={{
            width:"280px",
            height:"180px",
            background:"white",
        }}>
            <div style={{
                height:"30px",
                width:"100%",
                fontWeight:"600",
                display:"flex",
                alignItems:"center",
            }}
            >
                {title}
            </div>
            <div style={{
                height:"120px",
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
            }}>
                {content}
            </div>
            <div style={{
                height:"30px",
                width:"98%",
                display:"flex",
                justifyContent:"flex-end",
                marginRight:"5px"
            }}>
                {name}
            </div>
        </div>
    )
}
export default Card