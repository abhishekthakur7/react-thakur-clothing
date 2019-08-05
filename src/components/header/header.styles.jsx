import styles from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styles.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

//styles(Link), here styles component is wrapping Link component
export const LogoContainer = styles(Link).div`   
    height: 100%;
    width: 70px;
    padding: 25px;
`;

