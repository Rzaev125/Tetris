import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className='app'>
      <div className="video-background">
        <video src='/src/assets/back.webm' autoPlay muted loop id="myVideo"></video>
      </div>
      <img className='logo' src='/src/assets/tetris.png' />
      <Board currentBoard={board} />
      <div className="controls">
        <h2>SCORE: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  )
}

export default App
