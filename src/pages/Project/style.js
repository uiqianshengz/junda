import styled from "styled-components";
// Project, ProjectWrapper, ProjectLeft, ProjectTit, ProjectRight,ProjectNav 
export const Project=styled.div`
 
`;
export const ProjectNav =styled.div`
background: #f7f7f7;
img{
     width: 100%;
 }
`;
export const ProjectWrapper=styled.div`
width: 1200px;
margin: 0 auto;
display: flex;
justify-content: space-between;
`;

export const ProjectLeft=styled.div`
width: 270px;
line-height: 60px;
display: flex;
justify-content: space-between;
font-size: 15px;
p{
    margin-top: -18px;
    width: 60px;
    text-align: center;
    height: 3px;
    background-color: red;
    display: none;
}
.p{
    margin-top: -18px;
    width: 90px;
    text-align: center;
    height: 3px;
    background-color: red;
    display: none;
}
      a{
         color: gray;
       } 

 a:hover{
     color: red;
     p{
         display: block;
     }
     .p{
         display: block;
     }
 }
 .active{
     color: red;
     p{
         display: block;
     }
     .p{
         display: block;
     }

 }
`;
export const ProjectTit=styled.div`
   
`;
export const ProjectRight=styled.div`
    li{
        line-height: 60px;
    }
`;
// ProjectCon,BusinessWrapper,ProjectTit1,ProjectTit2
export const BusinessCon =styled.div`
`;
export const BusinessWrapper =styled.div`
width: 1200px;
margin: 0 auto;
p{
    margin-top: 20px;
    width: 20px;
    height: 2px;
    background-color: red;
    margin-bottom: 20px;
}
`;

export const BusinessTit1=styled.div`
font-size: 28px;
color: red;
font-family: "Times New Roman", Georgia, Serif;
font-weight: 500;
margin-top: 40px;
`;
export const BusinessTit2=styled.div`
 font-size: 22px;
   margin-top: 15px;
   font-weight: 600;
`;
export const BusinessBlock=styled.div`
width: 1170px;
height: 216px;
/* border: 1px solid; */
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

export const BusCon=styled.div`
div{
    transition: 0.5s;
}
 div:hover{
     background-color: gainsboro;
     img{
       transform: scale(1.2);
   }
   span{
       color: red;
   }
 }
`;
export const BusinessText=styled.div`
width: 770px;
`;
export const BusinessImg=styled.div`
   width: 375px;
   height: 217px;
    overflow: hidden;
   img{
    transition: 1.5s;
      width: 100%;
      height: 100%;
   }
   img:hover{
       transform: scale(1.2);
   }
`;
 export const BusTitle=styled.div`
 margin-top: 50px;
 color: #EF1414;
 font-size: 20px;
 font-weight: bold;
`;
export const BusText=styled.div`
font-size: 14px;
    color: #666;
    line-height: 22px;
    margin-top: 10px;
   
`;
export const BusTips=styled.div`
font-size: 14px;
color: #666;
margin-top: 20px;
span:hover{
        color: red;
    }
`;