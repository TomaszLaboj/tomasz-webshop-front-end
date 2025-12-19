import {LuStar} from "react-icons/lu";


interface RatingProps {
    rating: number;
}

const Rating = ({rating}: RatingProps) => {
    const percentage = Math.round((rating / 5) * 100);
    return (
        <div className='star-container'>
            <LuStar className='star' fill='gold'/>
            <LuStar className='star' fill='gold'/>
            <LuStar className='star' fill='gold'/>
            <LuStar className='star' fill='gold'/>
            <LuStar className='star' fill='gold'/>
            <div className='star-overlay' style={{width: `${100 - percentage}%`}}/>
        </div>
    )
};
export default Rating;