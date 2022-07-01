import styled from "styled-components"
export const FooterCon = styled.div`
height: 300px;
width: 100%;
background-color: #363636;
color: #666;
font-size: 16px;

.guanzhu{
    margin-left: 60px;
    margin-top: -60px;
}
p{
    margin-top: 10px;
}
.fuwu{
        font-size: 35px;
        margin-left: 10px;
}
img{
    width: 50px;
    height: 50px;
    margin-top: 20px;
}
`
export const Footerwr = styled.div`
width: 1200px;
margin: 0 auto;
`
export const FooterLeft = styled.div`
padding: 50px;
`
export const FooterRight = styled.div`
display: flex;
margin-left: 600px;
margin-top: -200px;
dl{
    margin-left: 50px;
    overflow: hidden;
}
dt{
    color: #bababa;
}
dd{
    margin-top: 10px;
}
dd:hover{
    color: red;
}
`