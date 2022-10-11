type Ranking = {
  id: number;
  name: string;
  rate: number;
  rank: number;
};

export const rankingMockData: Ranking[] = [
  { id: 1, name: '伊藤', rate: 100, rank: 1 },
  { id: 2, name: '村井', rate: 200, rank: 2 },
  { id: 3, name: '田中', rate: 300, rank: 3 },
];
