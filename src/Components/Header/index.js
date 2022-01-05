import React from 'react';
import { HeaderMain, HeaderContainer, HeaderInfo, HeaderH1, HeaderP } from './HeaderElements';

const Header = () => {
    return (
        <>
            <HeaderMain>
                <HeaderContainer>
                    <HeaderInfo>
                        <HeaderH1>Jacob</HeaderH1>
                        <HeaderP>Movement is my passion</HeaderP>
                    </HeaderInfo>
                </HeaderContainer>
            </HeaderMain>
        </>
    )
}

export default Header;
