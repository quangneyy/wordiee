import React from 'react'
import Square from '../Square/Square';
import './board.css';

interface IProps {
    board: string[]
}

const Board: React.FC<IProps> = (props) => {
    const { board } = props; 
    return (
        <>
        <div className="board">
            {board.map((square, idx) => {
                return (
                    <>
                    <Square val={square} squareIdx={idx} />
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Board;
