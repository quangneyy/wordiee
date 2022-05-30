import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setBoard } from '../../redux/boardSlice';
import { rootState } from '../interafce';
import './key.css';

interface IProps {
    letter: string;
}

const Key: React.FC<IProps> = (props) => {
    const { letter } = props;
    const board = useSelector((state:rootState)=>state.board.board);
    const dispatch = useDispatch();
    const chooseLetter = () => {
        const newBoard = [...board];
        newBoard[0] = letter;
        dispatch(setBoard(newBoard));
    }
    return (
        <div className="letter" onClick={chooseLetter}>
            {letter}
        </div>
    )
}

export default Key
