import React from 'react';
import { Link } from 'react-router-dom';
import { RiUserLine, RiSearchLine, RiShoppingBagLine } from "react-icons/ri";

import { Container, Logo, Menu, ContentLink, LinkText, ContentIcon } from './styles';

function Header() {
    return (
        <Container>
            <Menu>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
                    <Logo>Bookstore</Logo>
                </Link>

                <ContentLink>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <LinkText check >
                            Books
                        </LinkText>
                    </ Link>
                    <LinkText>
                        Audiobooks
                    </LinkText>
                    <LinkText>
                        Stationery & gifts
                    </LinkText>
                    <LinkText>
                        Blog
                    </LinkText>
                </ContentLink>
                <ContentIcon>
                    <RiUserLine size={20} style={{ marginLeft: '40px' }} />
                    <RiSearchLine size={20} style={{ marginLeft: '40px' }} />
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/cart">
                        <RiShoppingBagLine size={20} style={{ marginLeft: '40px' }} />
                    </Link>

                </ContentIcon>
            </Menu>
        </Container>
    );
}

export default Header;