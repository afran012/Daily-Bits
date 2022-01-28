import React from 'react';
import { ItemDiv, ItemIcon, MenuDiv, MenuLink, NavDiv,  } from '../styles/MenuStyles';

const Menu = () => {
    return (
        <MenuDiv>
            <nav>
                <NavDiv>
                    <ItemDiv>
                        <ItemIcon src='https://res.cloudinary.com/jadergomez/image/upload/v1643391244/9e8eb0c3ea3141b66500d7f18542a650-icono-de-inicio-plano_xhzyst.png'alt='home'/>
                        <MenuLink href='#'>Home</MenuLink>
                    </ItemDiv>
                    <ItemDiv>
                        <ItemIcon src='https://res.cloudinary.com/jadergomez/image/upload/v1643391161/images_iilndy.png'alt='Estadisticas'/>
                        <MenuLink href='#'>Estadísticas</MenuLink>
                    </ItemDiv>
                    <ItemDiv>
                        <ItemIcon src='https://res.cloudinary.com/jadergomez/image/upload/v1643391566/png-clipart-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service_dotvqf.png'alt='usuario'/>
                        <MenuLink href='#'>Perfil</MenuLink>
                    </ItemDiv>
                </NavDiv>
            </nav>
        </MenuDiv>
    );
};

export default Menu;
