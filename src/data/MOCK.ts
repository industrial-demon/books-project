import { faker } from "@faker-js/faker";

const mockComment =
  "This is my all-time favorite book. It is magical, exciting, and inspiring.";

type Review = {
  userName: string;
  comment: string;
};

export type Book = {
  id: string;
  author: string;
  name: string;
  description: string;
  img: number;
  rating: number;
  revised: boolean;
  downloads: number;
  releaseDate: string;
  reviews: Array<Review>;
};

const createBook = (): Book => ({
  id: faker.string.uuid(),
  author: faker.person.fullName(),
  name: faker.company.catchPhrase(),
  description: faker.lorem.lines({
    min: 6,
    max: 10,
  }),
  img: faker.number.int({ min: 1, max: 10 }),
  rating: faker.number.int({ min: 1, max: 5 }),
  revised: false,
  downloads: faker.number.int({ min: 65, max: 1000 }),
  releaseDate: faker.date
    .between({
      from: "2019-01-01T00:00:00.000Z",
      to: "2024-01-01T00:00:00.000Z",
    })
    .toISOString(),
  reviews: [
    { userName: faker.person.firstName(), comment: mockComment },
    {
      userName: faker.person.firstName(),
      comment: mockComment,
    },
  ],
});

export const BOOKS: Book[] = faker.helpers.multiple(createBook, {
  count: 50,
});

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


/**
 fetch mimicry
 */
export const fetchBooks = async (page: number, size: number) => {
  await delay(3000);
  return BOOKS.slice((page - 1) * size, size * page);
};
