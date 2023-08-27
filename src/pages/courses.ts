enum CourseCategory {
  Blockchain,
  Trading,
  'App Development',
}

interface Course {
  title: string;
  stars: number;
  creator: string;
  price: number;
  category?: CourseCategory;
}

export const courses: Course[] = [
  {
    title: 'Blockchain is like Basketball',
    stars: 4.1,
    creator: 'Michael Jordan',
    price: 500.0,
  },
  {
    title: 'A hill on the mountain',
    stars: 4.9,
    creator: 'James Cameron',
    price: 23.99,
  },
  {
    title: 'How to get rich quick',
    stars: 2,
    creator: 'Maddie Money',
    price: 39.9,
    category: CourseCategory.Trading,
  },
  {
    title: 'How to replace the government with blockchain',
    stars: 3,
    creator: 'Freddy Martins',
    price: 25.0,
    category: CourseCategory.Blockchain,
  },
  {
    title: 'Wtf is a block chain??',
    stars: 4.3,
    creator: 'Lisa Mollins',
    price: 20.0,
  },
  {
    title: "What's the next world currency?",
    stars: 5,
    creator: 'Sam Altman',
    price: 36.89,
  },
  {
    title: 'Mad Money explains which altcoin to buy in 2024',
    stars: 2.99,
    creator: 'Jim Cramer',
    price: 500.0,
    category: CourseCategory.Blockchain,
  },
];
