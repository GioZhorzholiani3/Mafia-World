export interface Step {
  title: string
  body: string
  tip: string
}

export const STEPS: Step[] = [
  {
    title: 'Gather and deal',
    body: 'Seat 7 to 12 players in a circle and pick one host to run the game. The host deals one role card face-down to each player. Look at yours in secret — never show it.',
    tip: 'Use around one Mafia card for every three or four players.',
  },
  {
    title: 'Night falls',
    body: 'The host says “Town, go to sleep” and everyone closes their eyes. The Mafia wake, silently agree on a victim, then sleep. The Detective wakes to check one player, and the Doctor wakes to protect one.',
    tip: 'Tap the table or hum while roles wake so no one hears movement.',
  },
  {
    title: 'Day breaks',
    body: 'Everyone wakes up. The host reveals who was eliminated in the night — unless the Doctor saved them. Now the town talks: share suspicions, defend yourself, and watch for lies.',
    tip: 'Eliminated players stay silent until the game ends.',
  },
  {
    title: 'The vote',
    body: 'Any player can nominate a suspect. The town votes, and the player with the most votes is eliminated and reveals their card. Then night falls again.',
    tip: 'Set a time limit for discussion to keep the game moving.',
  },
  {
    title: 'Who wins?',
    body: 'The town wins when every Mafia member has been voted out. The Mafia win as soon as they equal the number of remaining town players.',
    tip: 'Swap the host each game so everyone gets to play.',
  },
]
