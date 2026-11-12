import { useState } from 'react'

export default function App() {
  const [players, setPlayers] = useState(6)

  return (
    <main className="app">
      <h1 className="title">Mafia World</h1>
      <p className="lead">
        The town sleeps. Someone among you isn’t who they say they are.
      </p>

      <section className="setup" aria-label="Game setup">
        <label htmlFor="players">Players</label>
        <div className="stepper">
          <button onClick={() => setPlayers(p => Math.max(4, p - 1))} aria-label="Remove a player">−</button>
          <output id="players">{players}</output>
          <button onClick={() => setPlayers(p => Math.min(20, p + 1))} aria-label="Add a player">+</button>
        </div>
        <button className="start">Start game</button>
      </section>
    </main>
  )
}
