// import styled from "styled-components";

// export const FeatureSection = styled.div`
// width: 80%;
// height:auto;
// margin:auto;


// `

// export const FeatureHeading = styled.p`
// color:rgb(255,107,129);
// font-family:sans-serif;
// font-size:15px;
// text-align:center;
// font-weight:bold;
// margin-top:80px;
// margin-bottom:30px
// `

// export const FeatureParaDiv = styled.div`
// width:50%;
// height:200px;
// margin:auto;
// // background:purple;
// text-align:center;

// `

// export const FeaturedPara = styled.p`
// color:black;
// font-weight:bold;
// font-family:sans-serif;
// font-size:36px;
// margin-bottom:20px
// `

// export const FeaturedDescrip = styled.p`
// color:gray;
// text-align:center;
// font-size:15px;
// font-family:sans-serif;
// font-weight:none

// `



// export const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;      
//   justify-content: center;
//   gap: 20px;
//   width: 80%;
//   margin: 30px auto;
// `;

// export const Card = styled.div`
//   flex: 1 1 calc(33.33% - 20px);
//   background-color: whitesmoke;
//   height: auto;
//   border-radius: 10px;
//   padding:30px;
//   padding-bottom:50px;
// `;

// export const CardsIcon = styled.div`
// width: 60px;
// height:60px;
// background:rgb(255,107,129);
// border-radius:7px;
// text-align:center;
// font-size:20px;
// color:white;
// padding-top:20px;
// font-weight:bold

// `

// export const CardsHeading = styled.p`
// color:black;
// font-size:20px;
// margin-top:30px;
// margin-bottom:20px

// `

// export const CardPara = styled.p`
// color:gray

// `






import styled from "styled-components";

export const FeatureSection = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FeatureHeading = styled.p`
  color: rgb(255, 107, 129);
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 50px;
  }
`;

export const FeatureParaDiv = styled.div`
  width: 50%;
  height: auto;
  margin: auto;
  text-align: center;

  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const FeaturedPara = styled.p`
  color: black;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const FeaturedDescrip = styled.p`
  color: gray;
  text-align: center;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;      
  justify-content: center;
  gap: 20px;
  width: 80%;
  margin: 30px auto;

  @media (max-width: 1024px) {
    width: 90%;
    gap: 15px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 95%;
  }
`;

export const Card = styled.div`
  flex: 1 1 calc(33.33% - 20px);
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 50px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(45% - 20px);
  }
  @media (max-width: 768px) {
    flex: 1 1 100%;
    width: 90%;
  }
`;

export const CardsIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgb(255, 107, 129);
  border-radius: 7px;
  text-align: center;
  font-size: 20px;
  color: white;
  padding-top: 20px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
    padding-top: 15px;
  }
`;

export const CardsHeading = styled.p`
  color: black;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CardPara = styled.p`
  color: gray;
  font-size: 15px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
