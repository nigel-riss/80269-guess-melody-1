export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `/music/bad-kind-of-mongrel.mp3`,
        genre: `rock`,
      },
      {
        src: `/music/bluesy-mood.mp3`,
        genre: `blues`,
      },
      {
        src: `/music/dawn.mp3`,
        genre: `jazz`,
      },
      {
        src: `/music/differential-pressure.mp3`,
        genre: `rock`,
      },
    ],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `/music/welcome-to-the-jungle.mp3`,
    },
    answers: [
      {
        picture: `vinyl.png`,
        artist: `John Snow`,
      },
      {
        picture: `vinyl.png`,
        artist: `Jack Daniels`,
      },
      {
        picture: `vinyl.png`,
        artist: `Jim Beam`,
      },
    ],
  },
];
