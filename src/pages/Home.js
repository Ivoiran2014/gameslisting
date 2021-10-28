import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import {useLocation} from 'react-router-dom';

// Import Styled Component and motion
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
// Component
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
// Animation
import { fadeIn } from '../animations';

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    },[dispatch]);

    const {popular,upcoming,newGames,searched} = useSelector(state => state.gamesReducer);

    return(
        <StyledGameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence> 
                    {pathId && <GameDetail pathId={pathId}/>} 
                </AnimatePresence>

                {searched.length ? 
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <StyledGames>
                            {searched.map(
                                (popularGame) => (
                                    <Game 
                                        name={popularGame.name}
                                        released={popularGame.released}
                                        image={popularGame.background_image}
                                        id={popularGame.id}
                                        key={popularGame.id}
                                    />
                                ))}
                        </StyledGames>
                    </div> 
                    : 
                    ''
                }

                <h2>Upcoming Games</h2>
                <StyledGames>
                    {upcoming.map(
                        (popularGame) => (
                            <Game 
                                name={popularGame.name}
                                released={popularGame.released}
                                image={popularGame.background_image}
                                id={popularGame.id}
                                key={popularGame.id}
                            />
                        ))}
                </StyledGames>

                <h2>Popular Games</h2>
                <StyledGames>
                    {popular.map(
                        (popularGame) => (
                            <Game 
                                name={popularGame.name}
                                released={popularGame.released}
                                image={popularGame.background_image}
                                id={popularGame.id}
                                key={popularGame.id}
                            />
                        ))}
                </StyledGames>

                <h2>New Games</h2>
                <StyledGames>
                    {newGames.map(
                        (popularGame) => (
                            <Game 
                                name={popularGame.name}
                                released={popularGame.released}
                                image={popularGame.background_image}
                                id={popularGame.id}
                                key={popularGame.id}
                            />
                        ))}
                </StyledGames>
            </AnimateSharedLayout>
        </StyledGameList>
    );
};

const StyledGameList = styled(motion.div)`
    padding: 0rem 5rem;

    h2{
        padding: 5rem 0rem;
    }
`;

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;