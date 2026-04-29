import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Content 1
export const Background1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
  z-index: -1;
`;

export const Content1 = styled.div`
  padding-bottom: 74px;
`;

export const BannerArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding-left: 12vw;
  padding-right: 12vw;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeImage1 = styled.img`
  height: auto;
  max-width: 100%;
`;

export const BannerText = styled.div`
  margin-right: 10vw;
  text-align: center;
  
  > h1, h2 {
    color: #000;
    margin-top: 20px;
  }

  > h1 {
    font-size: 30px;
    line-height: 40px;
  }

  > h2 {
    font-size: 28px;
  }
`;

export const ButtonArea = styled.div`
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

// Content 2
export const Content2 = styled.div`
  background-color: #EAEAEA;
  display: flex;
  justify-content: space-between;
  padding-left: 12vw;
  padding-right: 12vw;
  padding-top: 60px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BlobArea = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Blob = styled.img`
  height: auto;
  width: 100%;
`;

export const HomeImage2 = styled.img`
  height: auto;
  max-width: 100%;
`;

export const SH1 = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 17rem;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    top: 10%;
  }
`;

export const ST1 = styled.p`
  position: absolute;
  width: 22.188rem;
  left: 19%;
  top: 30%;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 2.2rem;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 768px) {
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 22.188rem;
  }
`;

// Content 3
export const Content3 = styled.div`
  padding-left: 12vw;
  padding-right: 12vw;
  padding-top: 60px;
  background: linear-gradient(0deg, #8966FF 25.5%, #765BCF 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > h2 {
    color: #FFFF;
    text-align: center;
    font-size: 40px;
    padding-bottom: 50px;
  }
`;

export const ImageRows = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
`;

export const ImageRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  color: #fff;
  font-size: 25px;

  > h3 {
    padding-top: 10px;
  }
`;

export const C3_1 = ImageRow;
export const IC3_2 = ImageRow;
export const C3_3 = ImageRow;

export const Title2 = styled.div`
`;
