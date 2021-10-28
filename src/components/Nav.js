// Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState} from 'react';
import logo from '../images/logo.svg';
// Redux
import { searchGames } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
// Animation
import {fadeIn} from '../animations';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput,setTextInput] = useState('');

    const inputHandler = (event) => {
        setTextInput(event.target.value);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        dispatch(searchGames(textInput));
        setTextInput('');
    }

    const clearSearch = () => {
        dispatch({
            type:'CLEAR_SEARCHED'
        });
    }

    return(
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <StyledLogo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>INGAMES</h1>
            </StyledLogo>

            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type='submit'>Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;

    input{
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border:none;
        margin-top: 1rem;
        box-shadow: 0px 10px 30px rgba(0,0,0,0.2);
    }

    button{
        font-size: 1.5rem;
        border:none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`;

const StyledLogo = styled(motion.div)`
    display:flex;
    justify-content: center;
    padding: 1rem;
    cursor:pointer;

    img{
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;