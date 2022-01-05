import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FooterMain, FooterContainer, FooterTextBox, FooterP, SocialMediaIcons } from './FooterElements';


const Footer = () => {
    return (
        <>
         <FooterMain>
             <FooterContainer>
                 <FooterTextBox>
                     <FooterP>Jacob Saphra {new Date().getFullYear()}</FooterP>
                 </FooterTextBox>
                 <SocialMediaIcons>
                     <FaFacebookF/>
                     <FaInstagram/>
                 </SocialMediaIcons>
             </FooterContainer>
        </FooterMain>   
        </>
    )
}

export default Footer;
