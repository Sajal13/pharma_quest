export interface CountryData {
  id: number;
  name: string;
  coordinates: [number, number];
  quizId: string;
}

export const countries: CountryData[] = [
  {
    id: 1,
    name: 'Bangladesh',
    coordinates: [90.3563, 23.685],
    quizId: 'bangladeshQuiz'
  },
  {
    id: 2,
    name: 'Japan',
    coordinates: [138.2529, 36.2048],
    quizId: 'japanQuiz'
  },
  {
    id: 3,
    name: 'Australia',
    coordinates: [133.7751, -25.2744],
    quizId: 'australiaQuiz'
  },
  {
    id: 4,
    name: 'Sweden',
    coordinates: [18.6435, 60.1282],
    quizId: 'swedenQuiz'
  },
  {
    id: 5,
    name: 'Spain',
    coordinates: [-3.7038, 40.4168],
    quizId: 'spainQuiz'
  },
  {
    id: 6,
    name: 'England',
    coordinates: [-1.8987, 52.3555],
    quizId: 'englandQuiz'
  }
];
