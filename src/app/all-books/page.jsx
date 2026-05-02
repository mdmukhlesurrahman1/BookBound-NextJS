import BookCard from "@/components/shared/BookCard";
import { getBooks } from "@/lib/data";

export const metadata = {
    title: "BookBound | All Books",
};

const AllBooks = async () => {
    const books = await getBooks();

    return (
        <div className="w-11/12 max-w-7xl mx-auto my-5 md:my-10">
            <div className="flex">
                <input
                    type="text"
                    placeholder="Search Here by Books Title"
                    className="bg-transparent border border-base-300 shadow-sm rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-primary"
                />
                <button className="bg-primary active:scale-97 transition-all text-white px-4 py-2 rounded-r-md font-medium cursor-pointer">
                    Search
                </button>
            </div>
            <h1 className="my-5 text-xl font-bold">All Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default AllBooks;
