import styled from "styled-components";
export const Img = styled.div`
    width: 100%;
    overflow: hidden;
    img{
        display: block;
        width: 100%;
    }
`;
export const CommonWeb = styled.div`
    margin-bottom: 20px;
    h3{
        color: #e41e1e;
        line-height: 1.2;
        font-family: "Times New Roman", Georgia, Serif;
        font-size: 30px;
    }
    h4{
        font-size: 20px;
        color: #323232;
    font-weight: bold;
    line-height: 1.5;
    padding-top: 5px;
        span{
            display: inline-block;
            vertical-align: top;
            padding-bottom: 16px;
            position: relative;
        }
        span:after {
            content: '';
            position: absolute;
            width: 18px;
            height: 2px;
            background-color: #e41e1e;
            left: 0;
            bottom: 0;
}
    }
`;
export const ProfileContent = styled.div`
    color: #666;
    font-size: 13px;
    line-height: 20px;
    margin: 0px auto;
    max-width: 1200px;
    padding: 0;
    padding-top: 40px;
`;
export const Txt = styled.div`
    padding-bottom: 65px;
    line-height: 20px;
    display: flex;
    justify-content:space-between;
    .left{
        width: 50%;
        padding: 0 70px 0 0;
        h4{
            font-size: 30px;
            margin-bottom: 20px;
            color: #323232;
            line-height: 30px;
        }
    }
    .right{
    width: 50%;
    margin-top: -50px;
    padding-left: 16px;
    position: relative;
    img{
        display: block;
    width: 100%;
    }
    }
`;
export const CultureWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .culture-img{
        position: absolute;
        right: 0;
        bottom: -50px;
        font-size: 0;
        line-height: 0;
        z-index: 0;
        width: 60%;
        padding-bottom: 0;
        text-align: center;
        overflow: hidden;
        img{
            border: 0px;
            max-width: 100%;
        }
        }
    .culture-content{
        max-width: 460px;
        box-sizing: border-box;
        background-repeat: no-repeat;
        p{
            color: #666;
            font-size: 13px;
            line-height: 20px;
        }
        .form-group{
            margin-top: 20px;
            padding: 20px 0 0;
            background: url(http://szjddc.com/dist/images/wicon09.png
) repeat-x;
        p{
            background: url(http://szjddc.com/dist/images/wicon10.png
) 0 center no-repeat;
            padding-left: 16px;
            float: left;
            width: 50%;
        }
        }
    }
    .culture-list{
        padding-top: 60px;
        position: relative;
        z-index: 1;
        ul{
            margin: 0 -2px;
            li{
                float: left;
                font-size: 13px;
                padding: 0 2px 4px;
                /* animation-duration: 0.7s; */
                width: 25%;
                .cultureList{
                    height: 154px;
                    background: #fff;
                    padding: 20px 28px 30px;
                    color: #666666;
                    .incon{
                        margin-bottom: 15px;
                        position: relative;
                        img{
                            height: 38px;
                        }
                        .afterimg{
                            /* display: none; */
                        }
                    }
                    h4{
                        font-size: 18px;
                        color: #333333;
                        margin-bottom: 5px;
                        transition: all ease 0.7s;
                    }
                    p{
                        transition: all ease 0.7s;
                    }
                }
            }
            li:hover{
                div{
                    background-color: #E11B1A;
                }
                .beforeimg{
                    display:none;
                }
                afterimg{
                    /* display:block; */
                }
                h4,p{
                    color:white;
                }

            }
        }
    }
`;
export const CultureContent = styled.div`
    padding: 80px 0 50px;
    background-color: #EEEEEE;
    background-size: cover;
`;
export const PartnerWrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 45px;
    margin: 0px auto;
    max-width: 1200px;
    .row{
        padding-top: 20px;
        margin: 0 -8px;
        .col{
            padding: 0 9px 0;
            width: 16.66666667%;
            div{
                display: block;
                border: 1px solid #E5E5E5;
                overflow: hidden;
                transition: all ease 0.7s;
                cursor: pointer;
                img{
                    transition: all .3s;
                }
            }
            div:hover{
                border: 1px solid red;
                img{
                    transform:scale(1.05);
                }
            }
        }
    }
`;
export const DevelopmentContent = styled.div`
    padding-top: 75px;
    padding-bottom: 80px;
    background: url(http://szjddc.com/dist/images/aboutimg04.jpg) center 0 no-repeat;
    color: #fff;
    min-height: 484px;
    background-size: cover;
    position: relative;
    overflow: hidden    ;
    .china{
        position: absolute;
        left: 33%;
        width: 64%;
        transform:translateY(-260px);   
        z-index: 1;
        img{
            top: 40%;
            border: 0px;
            max-width: 100%;
        }
    }
`;
export const DevelopmentWrapper = styled.div`
    margin: 0px auto;
    max-width: 1200px;
    overflow: hidden;
    padding: 0;
    ul{
        margin-top: 12%;
        width: 100%;
        z-index: 10;
        text-align: center;
        /* overflow: hidden; */
        li{
            padding-right: 38px;
            width: auto;
            text-align: left;
            float: left;
            padding-bottom: 20px;
            div{
                span{
                    font-size: 50px;
                    line-height: 50px;
                    vertical-align: -8px;
                    font-family: 'rubik';
                    display: inline-block;
                }
                p{
                    font-size: 13px;
                    line-height: 20px;
                }
            }
        }
        .redLi{
            position: absolute;
            left: 532px;
            z-index: 100;
            color: red;
        }
    }
    .container{
            /* width: 40%; */
            z-index: 0;
            transform:translateY(-120px);
            transform:translateX(332px);
            display: flex;
            justify-content: space-between;
            div{
                width: 77%;
                font-size: 24px;
                line-height: 28px;
                padding: 0 0 0 25px;
                letter-spacing: 3px; 
                color: #fff;
                .nattitle{
                    font-size: 36px;
                    letter-spacing: 0px;
                    color: rgba(222, 0, 56, 0.4);
                    margin-top: 14px;
                }
            }
                
        }
`;