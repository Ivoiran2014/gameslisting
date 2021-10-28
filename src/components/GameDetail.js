import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {smallImage} from '../util';
// Images
import playstation from '../images/playstation.svg';
import steam from '../images/steam.svg';
import xbox from '../images/xbox.svg';
import apple from '../images/apple.svg';
import gamepad from '../images/gamepad.svg';
// Stars Images
import starFull from '../images/star-full.png';
import starEmpty from '../images/star-empty.png';

const GameDetail = ({pathId}) => {
    // Click to get back to screen
    const history = useHistory();

    const exitDetailHandler = (event) => {
        const element = event.target;

        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    };

    const getPlatform = (platform) => {
        switch(platform){
            case 'PlayStation 4':
                return playstation;
            case 'PlayStation 5':
                return playstation;
            case 'Xbox Series S/X':
                return xbox;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'iOS':
                return apple;
            default:
                return gamepad;                                  
        }
    };

    // Import Data action
    const {screenshot,detail,isLoading} = useSelector(state => state.detailReducer);

    const getStars = () => {
        const stars = []
        const rating = Math.floor(detail.rating);
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                // We get a full star
                stars.push(<img key={i} src={starFull} alt='star'></img>);
            }else{
                stars.push(<img key={i} src={starEmpty} alt='star'></img>);
            }
        }
        return stars;
    }

    return(
        <>
            {!isLoading && (
                <StyledCardShadow className='shadow' onClick={exitDetailHandler}>
                    <StyledDetail layoutId={pathId}>
                        <StyledStats>
                            <div className="rating">
                                <h3>
                                    {detail.name}
                                </h3>
                                <p>Rating : {detail.rating}</p>
                                {getStars()}
                            </div>

                            <StyledInfo>
                                <h3>Platforms</h3>
                                <StyledPlatforms>
                                    {
                                        detail.platforms.map(data => (
                                            <img 
                                                alt={data.platform.name}
                                                key={data.platform.id}
                                                src={getPlatform(data.platform.name)}>
                                            </img> 
                                        ))
                                    }
                                </StyledPlatforms>
                            </StyledInfo>
                        </StyledStats>

                        <StyledMedia>
                            <motion.img 
                                layoutId={`image ${pathId}`}
                                src={smallImage(detail.background_image,1280)} 
                                alt="image"/>
                        </StyledMedia>
                        
                        <StyledDescription>
                            <p>{detail.description_raw}</p>
                        </StyledDescription>

                        <div className="gallery">
                            {
                                screenshot.results.map(screen => (
                                    <img src={smallImage(screen.image,1280)} key={screen.id} alt="game" />
                                ))
                            }
                        </div>
                    </StyledDetail>
                </StyledCardShadow>
            )}
        </>
    );
}

const StyledCardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    &::-webkit-scrollbar{
        width: .5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const StyledDetail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;

    img{
        width: 100%;
    }
`;

const StyledStats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content: space-between;

    img{
        height: 2rem;
        width: 2rem;
        display: inline;
    }
`;

const StyledInfo = styled(motion.div)`
    text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    
    img{
        margin-left: 3rem;
    }
`;

const StyledMedia = styled(motion.div)`
    margin-top: 5rem;

    img{
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`;

const StyledDescription = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;