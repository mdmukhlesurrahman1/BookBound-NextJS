import { getBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";

const Featured = async () => {
    const books = await getBooks();
    const featuredbooks = books.slice(0, 4);

    return (
        <div className="w-11/12 max-w-7xl mx-auto">
            <h1 className="my-5 text-2xl font-bold">Featured Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {featuredbooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Featured;
