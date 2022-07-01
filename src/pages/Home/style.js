import styled from "styled-components";
export const HomeDom = styled.div`
    .m-titen{
        font-size: 30px;
        margin-bottom: 12px;
        text-align: center;
        color: #e41e1e;
        font-family: 'bellmt',"Times New Roman", Georgia, Serif;
    }
    .m-titcn{
        font-size: 20px;
        padding-bottom: 18px;
        margin-bottom: 12px;
        color: #323232;
        position: relative;
        text-align: center;
    }
    
`;

export const LeftButton = styled.div`
    width: 50px;
    height: 50px;
    display: block;
    z-index: 98;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    position:absolute;
    left: 3%;
    top: 40%;
    .icon1{
        content: '';
        position: absolute;
        width:20px;
        height: 20px;
        display: block;
        border-left:2px solid rgba(255, 255, 255, 0.5);
        border-bottom: 2px solid rgba(255, 255, 255, 0.5);
        border-top: 0;
        border-right: 0;
        transform: rotate(45deg);
        top: 15px;
        left: 20px;
    }
`;
export const RightButton = styled.div`
    width: 50px;
    height: 50px;
    display: block;
    z-index: 98;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    position:absolute;
    right: 3%;
    top: 40%;
    .icon2{
        content:'';
        position: absolute;
        width:20px;
        height: 20px;
        display: block;
        border-left:2px solid rgba(255, 255, 255, 0.5);
        border-bottom: 2px solid rgba(255, 255, 255, 0.5);
        border-top: 0;
        border-right: 0;
        transform: rotate(225deg);
        top: 15px;
        left: 10px;
    }
`;
export const CarouselItem = styled.div`
    .CarouselImg{
        width: 100%;
    }
`;
export const AboutWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding-top:68px;
    padding-bottom: 60px;
    
    .indexjunda-con{
        text-align: center;
        line-height: 22px;
        h5{
            font-size: 30px;
            line-height: 40px;
            margin-bottom: 20px;
        }
        p{
            font-size: 14px;
            line-height: 22px;
            color: #666;
        }
    }
`;
export const Li = styled.div`
    font-size: 13px;
    padding-bottom: 20px;
    width: 25%;
    text-align: center;
`;
export const AboutImg = styled.p`
    margin-bottom: 8px;
    font-size: 0;
    line-height: 0;
    transition: all .4s;
`;
export const AboutNum = styled.p`
    
    margin-bottom: 10px;
    color: #404040;
    font-family: 'rubik';
    span{
        font-size: 48px;
        line-height: 40px;
    }
    i{
        font-size: 20px;
        vertical-align: 10px;
    display: inline-block;
    font-style: normal;
    }
`;
export const AboutTxt = styled.p``;
export const Span = styled.span``;
export const Img = styled.img``;
export const Ul = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top:30px;
`;
export const BusinessCentent = styled.div`
    padding-top: 45px;
    padding-bottom: 90px;
    background: url(http://szjddc.com/dist/images/indebg01.jpg) center 0 no-repeat;
    background-size: cover;
`;
export const BusinessWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    .imgCard{
        margin-bottom:-5px;
        overflow: hidden;
        img{
            width: 100%;
            border: 0px;
            transition: all 0.5s;
        }
    }
    .businessTxt{
        padding: 30px 20px 40px;
        background: #F8FFFF;
        transition: all .3s;
        color: #666;
        font-size: 13px;
        h3{
            color: #323232;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        h4{
            color: rgba(146, 146, 146, 0.2);
            font-size: 24px;
            font-family: 'rubik';
            margin-bottom: 10px;
        }
        p{
            display: -webkit-box;
            height: 72px;
            line-height: 18px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .businessCard:hover{
        img{
            transform:scale(1.05)
        }
        .businessTxt{
            background-color: #e41e1e;
            h3,h4,p{
                color: #fff;
            }
        }
    }
`;
export const NewsContent= styled.div`
    padding-top: 60px;
    background: #FAFAFA;
    overflow: hidden;
`;
export const NewsWrapper= styled.div`
    margin: 0px auto;
    max-width: 1200px;
    padding: 0;
    .newsRow{
        margin: 0 -22px;
        padding: 15px 0 48px;
        .newsCard{
            padding: 0 22px;
            width: 33.33333333%;

            span{
                width: 80px;
                height: 80px;
                padding: 20px 10px 0;
                background: #614B45;
                color: #fff;
                display: block;
                position: relative;
                z-index: 2;
                em{
                    font-size: 30px;
                    margin-bottom: 5px;
                    display: block;
                    font-style: normal;
                    margin-left: -4px;
                    line-height: 24px;
                }
                i{
                    font-style: normal;
                    font-size: 14px;
                }
            }
            
            .rowContent{
                padding-bottom: 33px;
                display: block;
                border-bottom: 1px solid #F4E9E9;
                position: relative;
                cursor: pointer;
                .imgCard{
                margin-top: -22px;
                overflow: hidden;
                    img{
                        width: 100%;
                        display: block;
                        transition: all 0.7s;
                        border: 0px;
                        max-width: 100%;
                    }
                }
                h4{
                    margin: 20px 0 0;
                    font-size: 18px;
                    height: 48px;
                    line-height: 24px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #333333;
                }
            }
            .rowContent:hover{
                img{
                    transform:scale(1.05)
                }
            }
        }
    }
    .newsMore{
        text-align: center;
        .newsMoreButton{
            width: 160px;
            height: 60px;
            line-height: 60px;
            transition: all .3s;
            position: relative;
            display: block;
            margin: 0 auto;
            text-align:center;
            font-size: 16px;
            border: 1px solid #ef1919;
        }
        .moreColor{
            background-color: red;
            width: 160px;
            height: 60px;
            transform: rotateX(90deg);
            position: absolute;
        }
        .moreTxt{
            position: absolute;
            left: 30%;
            z-index: 99;
        }
        .newsMoreButton:hover .moreColor{
                transform: rotateX(180deg);
                transition: all .3s;
        }
        .newsMoreButton:hover .moreTxt{
                color:white
        }

    }
`;
export const ProjectContent = styled.div`
    padding-top: 70px;
    padding-bottom: 68px;
    .mySwiper{
        margin: 0 -22px;
        padding: 15px 0 48px;
        .swiperItem{
            width: 326px;
            margin-right: 20px;
            overflow: hidden;
            padding: 0;
            display: block;
    background: #F4F4F4;
    padding-bottom: 28px;
    color: #323232;
    transition: all ease 0.7s;
            div{
                overflow: hidden;
                position: relative;
                img{
                    display: block;
                    width: 100%;
                    transition: all .3s;
                }
            }
            h4{
                margin: 28px 0 0;
                text-align: center;
                font-size: 16px;
                height: 24px;
                line-height: 24px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
        .swiperItem:hover img{
                transform:scale(1.05);
        }
        .swiperItem:hover h4{
                color:white
        }
        .swiperItem:hover{
            background-color:#E41E1E;
        }
        .projectMore{
        text-align: center;
        .MoreButton{
            width: 160px;
            height: 60px;
            line-height: 60px;
            transition: all .3s;
            position: relative;
            display: block;
            margin: 0 auto;
            text-align:center;
            font-size: 16px;
            border: 1px solid #ef1919;
        }
        .moreColor{
            background-color: red;
            width: 160px;
            height: 60px;
            transform: rotateX(90deg);
            position: absolute;
        }
        .moreTxt{
            position: absolute;
            left: 30%;
            z-index: 99;
        }
        .MoreButton:hover .moreColor{
                transform: rotateX(180deg);
                transition: all .3s;
        }
        .MoreButton:hover .moreTxt{
                color:white
        }

    }
`;
