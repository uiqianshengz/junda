import styled from "styled-components";
export const Business = styled.div`

`;
export const BusinessNav = styled.div`
background: #f7f7f7;
img{
     width: 100%;
 }
`;
export const BusinessWrapper = styled.div`
width: 1200px;
margin: 0 auto;
display: flex;
justify-content: space-between;
`;

export const BusinessLeft = styled.div`
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
      a{
         color: gray;
       } 

 a:hover{
     color: red;
     p{
         display: block;
     }
 }
 .active{
     color: red;
     p{
         display: block;
     }

 }
`;
export const BusinessTit = styled.div`
    
`;
export const BusinessRight = styled.div`
    li{
        line-height: 60px;
    }
`;
export const EstateCon = styled.div`
margin-bottom: 80px;
   img{
       width: 100%;
       margin-top: -60px;
       z-index: -2;
   }
`;
export const EstateWrapper = styled.div`
width: 1200px;
margin: 0px auto;
p{
    margin-top: 20px;
    width: 20px;
    height: 2px;
    background-color: red;
    margin-bottom: 20px;
}
`;
export const EstateTit1 = styled.div`
font-size: 28px;
color: red;
font-family: "Times New Roman", Georgia, Serif;
font-weight: 500;
margin-top: 40px;
`;
export const EstateTit2 = styled.div`
   font-size: 22px;
   margin-top: 15px;
   font-weight: 600;
`;
export const EstateBorder = styled.div`
width: 1100px;
height: 300px;
border: 1px solid gainsboro;
margin-left: 50px;
margin-top: 40px;
/* background-color: gainsboro; */
position: relative;
z-index: 3;
`;
export const EstateText = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    font-family: Arial, 'Microsoft YaHei','Hiragino Sans GB', sans-serif;
`;
export const EstateClass = styled.div`
    display: flex;
    justify-content: space-between;
    div:hover{
        color: red;
    }
`;
export const EstateTit = styled.div`
font-size: 18px;
padding-top: 25px;
line-height: 20px;
font-weight: normal;
cursor: pointer;
`;
export const EstateLast = styled.div`
    height: 370px;
    background: url(http://szjddc.com/Uploads/20181105091407_652317.jpg) no-repeat;
    background-size:100%;
    /* background-attachment: fixed; */
    /* width: 100%; */
    margin-top: 70px;
`;
export const EstatePosition = styled.div`
   padding-top: 1%;
`;
export const EstateFooter = styled.div`
  width: 100%;
`;
export const EstateBlock = styled.div`
   margin-top: 30px;
   display: flex;
   justify-content: space-between;
   img{
       margin-top: 0px;
       height: 240px;
       transition: 1.5s;
   }
`;
export const EstateImg = styled.div`
  width: 380px;
  height: 240px;
  overflow: hidden;

  img:hover{
    /* transition: 1s; */
      transform: scale(1.2);
  }
`;
export const EstateBlock1 = styled.div`
width: 380px;
`;
export const EstateBlock2 = styled.div`
width: 380px;
`;
export const EstateBlock3 = styled.div`
width: 380px;
`;
export const StandardsTit1 = styled.div`
 font-size: 20px;
 margin-top: 30px;
   font-weight: 600;
`;
export const StandardsTit2 = styled.div`
font-size: 28px;
color: red;
font-family: "Times New Roman", Georgia, Serif;
font-weight: 500;
margin-top: 10px;
`;

export const StandardsText = styled.div`
  width: 340px;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    line-height: 25px;
    font-family: Arial, 'Microsoft YaHei','Hiragino Sans GB', sans-serif;
`;
export const BeforeTit = styled.div`
     font-size: 18px;
    color: #e51212;
    font-weight: bold;
    text-align: center;
    margin: 30px 0px;
`;
// BeforeTImg,BeforeTitt

export const BeforeTits = styled.div`
    color: #363636;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 20px;
   img{
       width: 30px;
       height: 30px;
       margin-left:-20px;
   }
`;
export const P = styled.div`
margin-left: 20px;
margin-top: -20px;
`;
export const BeforeText = styled.div`
    width: 100%;
   font-size: 13px;
   margin-left: 20px;
   color: #666666;
   line-height: 20px;
 
`;
export const BeforeCon = styled.div`
display: flex;
justify-content: space-around;
`;
export const BeforeBlock = styled.div`
width: 260px;
height: 200px;
margin-top: 20px;
margin-left: 50px;
`;

//SellTit,SellCon,SellText
export const SellTit = styled.div`
font-size: 18px;
    color: #e51212;
    font-weight: bold;
    text-align: center;
    margin: 30px 0px;
`;
export const SellCon = styled.div`
  width: 926px;
  margin: 0 auto;
  display: flex;
  flex-wrap:wrap;
  justify-content: flex-start;
`;
export const SellText = styled.div`
 width: 220px;
 line-height: 30px;
`;
export const MediaCon = styled.div`
margin-bottom: 80px;
`;
export const MediaWrapper = styled.div`
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

export const MediaTit1 = styled.div`
font-size: 28px;
color: red;
font-family: "Times New Roman", Georgia, Serif;
font-weight: 500;
margin-top: 40px;
`;
export const MediaTit2 = styled.div`
 font-size: 22px;
   margin-top: 15px;
   font-weight: 600;
`;
export const MediaText = styled.div`
 margin-top: 10px;
   font-size: 14px;
    color: #666;
    font-family: Arial, 'Microsoft YaHei','Hiragino Sans GB', sans-serif;
`;
export const MediaImg = styled.div`
  width: 585px;
  height: 360px;
  position: relative;
  span{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 24px;
      color: white;
      padding: 40px 30px;

  }
  /* border: 1px solid; */
  overflow: hidden;
  img{
    transition: 1.5s;
  }
  img:hover{
    transform: scale(1.2);
  }
`;
export const MediaBlock = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom:-40px;
`;