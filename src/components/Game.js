import styled from "styled-components";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
// Redux
import {useDispatch} from 'react-redux';
import {loadDetailAction} from '../actions/detailAction';
import {smallImage} from '../util';
// Animate
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
    const dispatch = useDispatch();
    const stringPathId = id.toString();

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetailAction(id));
    }

    return (
        <StyledGame 
            layoutId={stringPathId} 
            onClick={loadDetailHandler}
            variants={popup}
            initial='hidden'
            animate='show'>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <motion.img 
                    layoutId={`image ${stringPathId}`}
                    src={smallImage(image,640)} 
                    alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow : hidden;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
