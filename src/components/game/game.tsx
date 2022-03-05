import { useState } from "react";
import style from './styles.css'

const TicTacToe = () => {
    const [positions, setPositions] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
    const [player, setPlayer] = useState("X");
    const [isGameOn, setIsGameOn] = useState(true);
    const [winnerArr, setWinnerArr] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const itemClicked = (x: number, y: number) => {
        const points: string[][] = [...positions];
        points[x][y] = points[x][y] ? points[x][y] : player;
        setPositions(points);
        updatePlayer();
        const { isWinner, winner } = checkWinner(points);
        if (isWinner) {
            setIsGameOn(false);
            setWinnerArr([...winner].map(arr => [...arr]));
        } else {
            if (positions.reduce((a, b) => a + (b.reduce((_a, _b) => (_a + (_b ? 1 : 0)), 0)), 0) === 9) {
                setIsGameOn(false);
                setPlayer("D");
            }
        }
    }
    const updatePlayer = () => {
        const nextPlayer = player === "X" ? "0" : "X";
        setPlayer(nextPlayer);
    }
    const resetGame = () => {
        setPositions([["", "", ""], ["", "", ""], ["", "", ""]]);
        setWinnerArr([["", "", ""], ["", "", ""], ["", "", ""]]);
        setPlayer("X");
        setIsGameOn(true);
    }
    const checkWinner = ($points: string[][]) => {
        const points: string[][] = [...$points].map(arr => [...arr]);
        let isWinner = false;
        let winner: string[][] = [];

        const rows = points.map((v) => ((v[0] && v[1] && v[2] && v[0] === v[1] && v[1] === v[2]) && !isWinner ? (isWinner = true, v) : ["", "", ""]));

        if (isWinner) {
            winner = rows;
        } else {
            const d = points.map((a, x) => (a.map((b, y) => (x === y || x + y === 2 ? b : ""))));
            if (d[0][0] && d[1][1] && d[2][2] && d[0][0] === d[1][1] && d[2][2] === d[1][1]) {
                winner = d.map((a, x) => (a.map((b, y) => (x === y ? b : ""))));
                isWinner = true;
            } else {
                if (d[0][2] && d[1][1] && d[2][0] && d[0][2] === d[1][1] && d[1][1] === d[2][0]) {
                    winner = d.map((a, x) => (a.map((b, y) => (x + y === 2 ? b : ""))));
                    isWinner = true;
                } else {
                    const cols = points.map((v, i, ar) => {
                        if (ar[0][i] && ar[1][i] && ar[2][i] && ar[0][i] === ar[1][i] && ar[1][i] === ar[2][i] && !isWinner) {
                            isWinner = true;
                        } else {
                            ar[0][i] = ar[1][i] = ar[2][i] = "";
                        }
                        return v;
                    });
                    if (isWinner) {
                        winner = cols;
                    }
                }
            }

        }


        return { isWinner, winner };
    }
    return (
        <>
            <style>{style}</style>
            <div className="game-wrapper">
                {positions.map((val, inx) => (
                    val.map((inrVal, inrInx) => (<button tabIndex={0} type="button" aria-label={inrVal ? `${inrVal} chosen` : `click to Place ${player}`} onClick={() => { isGameOn && !inrVal && itemClicked(inx, inrInx) }} className={`item ${winnerArr[inx][inrInx] ? "winner" : ""}`} key={`${inx}_${inrInx}`}>{inrVal ? inrVal : ""}</button>))
                ))}
            </div>
            <div className="game-footer">
                <div className="status">
                    <ul>
                        <li>{isGameOn ? `Current Player: ${player}` : <span className={"winner-player"}>{player === "D" ? "No Result" : `Winner: ${player === "X" ? "0" : "X"}`}</span>}</li>
                        <li>Game Status: {isGameOn ? "Playing" : "Over"}</li>

                    </ul>
                </div>
                <div className="text-center"><button className="reset-btn" onClick={resetGame}>Reset</button></div>
            </div>
        </>
    )
}

export default TicTacToe;