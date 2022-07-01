import styled from "styled-components";
// import imgUrl from '../../assets/logo';
export const Header=styled.div`
    width: 100%;
    height: 90px;
`;
export const HeaderWrapper=styled.div`
       width: 1200px;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
`;
export const HeaderLeft=styled.div`
   img{
       width: 162px;
       height: 77px;
   }
`;

export const HeaderRight=styled.div`
     width: 600px;
     display: flex;
     line-height: 90px;
     justify-content: space-between;
     font-size: 14px;
    color: #323232;
    /* text-align: center; */
    p{
        width: 60px;
        height: 2px;
        background-color: red;
        margin-top: -30px; 
        display: none;
    }
    
     a:hover{
         color: red;
         p{
             display: block;
         }
     }
     a{
         text-align: center;
         display: inline-block;
         width: 60px;
         color:black
    }
    .active{
         color: red;
         p{
             display: block;
         }
     }
`;