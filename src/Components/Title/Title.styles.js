import styled from "styled-components";


export const TitleDiv = styled.div`
  width: 100%;
  height: 800px;
  background-color: rgb(255,107,129);
  display: flex;
  padding-left: 15%;
  padding-right: 15%;
  gap: 5px;
  margin-top: 10vh; 


@media (max-width:1570px){
padding-left:100px;
padding-right:20px;
};

@media (max-width:1250px){
padding-left:60px;
padding-right:20px
};
@media (max-width:1070px){
height: 600px
};
@media (max-width:990px){
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:auto
};
@media (max-width:640px){
// padding-left:0px;

justify-content:center;
align-items:center
}
`;

export const TitleInner = styled.div`
width:50%;
height:auto;
// background-color:lightblue;
margin-top:30px;
z-index:1;
margin-top:230px;
padding-right:20px;


@media (max-width:1070px){
margin-top:180px
};
@media (max-width:990px){
margin-top:100px;
width:auto;
};
@media (max-width:770px){
width:70%;
text-align:center;
margin-top:40px
};
@media (max-width:600px){
width:auto
}

`

export const TitlePara = styled.p`
font-size:40px;
color:white;
font-family:sans-serif;
font-weight:bold;
margin-bottom:40px;

@media (max-width:990px){
font-size:30px;
text-align:center
}


`
export const TitleDescrip = styled.p`
color:white;
font-family:sans-serif;
margin-bottom:30px;

`
export const TitleBtns = styled.div`
width:auto;
height:auto;
display:flex;
// gap:10px;
// background-color:lavender;


@media (max-width:990px){
width:auto;
justify-content:center;
align-items:center
};
@media (max-width:770px){
display:flex;
flex-direction:column;
gap:10px
}


`

export const TitleBtn = styled.button`
width:30%;
height:50px;
background:whitesmoke;
color:rgb(255,107,129);
display:flex;            
align-items: center;        
justify-content: center; 
gap: 8px; 
cursor:pointer; 
border:none;
border-radius:10px;
font-weight:bold;   


&:hover{
background:black;
transition-duration:1s;
color:white;
};

@media (max-width:1250px){
width: 40%;
text-align:center;

};
@media (max-width:990px){
width:30%
};
@media (max-width:770px){
width:60%
}


`
export const TitleBtn2 = styled.button`
width:30%;
height:50px;
background:none;
color: white;
display:flex;            
align-items: center;        
justify-content: center; 
gap: 8px; 
cursor:pointer; 
border-radius:10px;
font-weight:bold; 
border:1px solid whitesmoke;  


&:hover{
background:whitesmoke;
transition-duration:1s;
color:rgb(255,107,129);
};


@media (max-width:1250px){
width: 40%;
text-align:center;

};
@media (max-width:990px){
width:30%
};
@media (max-width:770px){
width:60%
}
`


export const TitleInner2 = styled.div`
width:70%;
height:78%;
z-index:1;
margin-top:75px;
display:flex;


@media (max-width:600px){
width: auto;
// border:1px solid black;
// margin:auto
}



// @media (max-width:1250px){
// width:80%;

// };
// @media (max-width:1070px){
// width:60%;
// height:450px;
// margin-top:6%;
// };
// @media (max-width:990px){
// width: auto;
// height:600px
// };
// @media (max-width:770px){
// width:80%;
// margin:auto;
// height:400px
// };
// @media (max-width:640px){
// width: 90%;
// margin:auto;
// margin-right:40px
// };
// @media (max-width:600px){
// width: 20%;
// margin-right:400px
// }



`
export const TitleImage = styled.img`
width: 100%;
height:100%;
// @media (max-width:640px){
// width:auto
// }

`
