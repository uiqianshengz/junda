import styled from "styled-components";
export const NewsWrapper = styled.div`
`
export const NewsCarou = styled.div`
img{
    width: 100%;
}
`
export const NewsLin = styled.div`
    width: 100%;
    height: 60px;
    background-color: #f7f7f7;
`
export const Newswr = styled.div`
    width: 1200px;
    margin: 0 auto; 
    .linkname{
    width: 60px;
    height: 60px;
    font-size: 15px;
    color: #737373;
    line-height:60px ;
    text-align: center;
    margin-left: 20px;
   
     }
     .linkname:hover{
        border-bottom: 2px solid red;
     }
     .active{
         color: red;
         border-bottom: 2px solid red;
     }
`
export const PressWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    .next{
        width: 1200px;
        height: 160px;
    }
    .next:hover{
        border: 1px solid red;
    }
    .next:hover h4{
        color: red;
    }
    .next:hover img{ 
        transform: scale(1.2);
        transition: 1s;
    }
`;
export const PressCarou = styled.div`
    width: 1200px;
    height: 258px;
    background-color: #fafafa;
    margin-top: 50px; 
`;
export const PressLeft = styled.div`
     width: 450px;
    height: 258px; 
    overflow: hidden;
    img{
         width: 100%;
        height: 100%;
        transition: 1s;
    }
    img:hover{    
        transform: scale(1.2);
        transition: 1s;
    }
`;
export const PressRight = styled.div`
    width: 690px;
    float: right;
    margin-top: -220px;
    margin-right: 20px;
    h3{
        font-size: 30px;
        color: red;
        font-weight: bold;
    }
    h4{
        font-size: 18px;
        font-weight: bold;
        color: #555;
        margin-top: 10px;
    }
    p{
        font-size: 13px;
        color: #666;
        margin-top: 10px;
    }
`;
export const PressNex = styled.div`
margin-bottom: 50px;
    width: 1200px;
    height: 160px;
    margin-top: 50px; 
    border: 1px solid #efefef;
`;
export const PressImg = styled.div`
    width: 260px;
    height: 160px;    
    overflow: hidden;
     img{
    width: 260px;
    height: 160px; 
    transition: 1s;
    }
`;
export const PressTit = styled.div`
    width: 878px;
    float: right;
    margin-top: -120px;
    margin-right: 20px;
    h3{
        font-size: 30px;
        color: red;
        font-weight: bold;
    }
    h4{
        font-size: 18px;
        font-weight: bold;
        color: #555;
        margin-top: 10px;
    }
    p{
        font-size: 13px;
        color: #666;
        margin-top: 10px;
    }
`;
export const PressDa = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ShineWrapper = styled.div`
width: 1200px;
margin: 0 auto;
p{
color: #e41e1e;
font-size: 30px;
margin-top: 40px;
}
h4{
font-size: 20px;
font-weight: bold;
margin-top: 10px;
}
`;
export const ShineJun = styled.div`
width: 285px;
height: 220px;
margin-right: 15px;
overflow: hidden;
margin-top: 50px;
img{
    width: 285px;
    height: 160px;
    transition: 1s;
}
div{
    width: 285px;
    height: 60px;
    background-color: #efefef;
    line-height: 60px;
    text-align: center;
    font-size: 13px;
    overflow: hidden;
    margin-top: -5px;
    transition: all 1s;
}
`
export const Shinesmail = styled.div`
margin-bottom: 50px;
display: flex;
flex-wrap: wrap;
.ShineJun:hover{
    img{
        transform: scale(1.05);
        transition: 1s;
    }
    div{
        background-color: red;
        color: white;
    }
}
`
