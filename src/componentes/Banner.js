import React from 'react'
import styled, { css } from "styled-components"
import bg from "../assets/Deslizador/bg.png"
import BannerText from './BannerText';
import bannerCard from '../assets/thumbnails/bannerCard.png';
import Button from '../componentes/Button'

import { colorGreyLight, colorBlackDark } from '../ui/colores';


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  border-radius: 10px; /* Opcional: para bordes redondeados */
  border-top: 2px solid #2A7AE4;
  min-width:320px;

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 65vh;
      
   ` }

    
`;


const BannerImage = styled.div`
    position:relative;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
      border: 3px solid #2271D1; /* Borde sólido */
  box-shadow: 0 0 25px #2271D1; /* Efecto de brillo */
    height: 90vh;
    
    
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 65vh;
      
   ` }

    
`


const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index:10;
  border-radius: 25px;

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 65vh;
      
   ` }


`;

const Titulo = styled.div`
   background-color:#6BD1FF;
   ;
   border
   color:F5F5F5;
   height:6rem; 
   width:20rem;
   display:flex;
   align-items:center;
   justify-content:center;
   font-family: 'Roboto', sans-serif;
   font-size:4rem;
   border-radius: 25px;


   ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: none;
      
   ` }




`;
const SubTitulo = styled.div`
  font-family: 'Roboto', sans-serif;
  color:white;
  
  font-size: 2.5rem;
  margin-top:1.5rem;
 
  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
   
      font-size: 2.5rem;
      min-width:320px;
      font-weight:203;
      margin-left:8%;
   
      
   

      
      
   
   ` }


`;

const TextoBanner = styled.div`
    color:white;
    margin-top: 1rem;
    width:600px;
    font-family: 'Roboto', sans-serif;
    font-weight:140;
    font-size: 1.0rem;
    
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: none;
      
   ` }

`

const BannerContent = styled.div`
position:absolute;
height:35vh;
top:35vh;
width:96%;
left: 2%;
z-index:1000;
display:flex;
justify-content:space-between;


${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      top:60%;
      left: 0%;
      position:relative;
      margin:0 auto;
      max-width:320px;

      
   ` }



`;

const BannerTexContent = styled.div`
    display:flex;
    flex-direction:column;
    max-width:45%;
    height:20vh;
    //margin-top:2rem;
    
    justify-content:space-between;
    

    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      height: 20vh;
      min-width:320px;
     
 
   ` }
    

`;


const BannerCard = styled.img`
  max-height:100%;
  border: 5px solid  #2A7AE4;
  border-radius: 25px;
 

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      display: none;
      
   ` }

`;


const ver = styled(Button)`

align-self:center;
${props => css`
    @media (min-width: ${props.theme.breakpoints.laptop}) {
      display: none;
    
      
      
   ` }


  



`



const Banner = () => {
  return (
    <Container>

      <BannerImage>
        <BannerContent>
          <BannerTexContent>
            <Titulo>Front End</Titulo>
            <SubTitulo>
              Challenge React
            </SubTitulo>


            <TextoBanner>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </TextoBanner>



          </BannerTexContent>
          <BannerCard src={bannerCard} alt="Aluraflix Logo" />
        </BannerContent>

      </BannerImage>




      <Overlay />


    </Container>
  )
}

export default Banner


