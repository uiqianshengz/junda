import styled from "styled-components"
export const FooterCon = styled.div`
height: 300px;
width: 100%;
background-color: #363636;
position: absolute;
color: #666;
font-size: 16px;
padding: 40px;
bottom: 0px;
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
export const FooterLeft = styled.div``
export const FooterRight = styled.div`
display: flex;
position: absolute;
right: 50px;
top: 60px;
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