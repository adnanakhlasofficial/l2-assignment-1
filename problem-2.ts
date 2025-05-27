function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const sortedItems = items.filter(
    (item: { title: string; rating: number }) => {
      return item.rating >= 4;
    }
  );
  return sortedItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
