import BookCard from "@/components/shared/BookCard";
import { getBooks } from "@/lib/data";
import Form from "next/form";
import Link from "next/link";

export const metadata = {
    title: "BookBound | All Books",
};

const AllBooks = async ({ searchParams }) => {
    const books = await getBooks();
    const { category, search } = await searchParams;
    const categories = ["story", "science", "tech"];

    const filteredBooks = books.filter((book) => {
        const matchesCategory = category
            ? book.category.toLowerCase() === category.toLowerCase()
            : true;

        const matchesSearch = search
            ? book.title.toLowerCase().includes(search.toLowerCase())
            : true;

        return matchesCategory && matchesSearch;
    });

    let headingText = "All Books";
    if (search) {
        headingText = `Search results for "${search}"`;
    } else if (category) {
        headingText = `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }

    return (
        <div className="w-11/12 max-w-7xl mx-auto my-5 md:my-10">
            <Form action="" className="flex mb-5">
                <input
                    type="text"
                    name="search"
                    defaultValue={search}
                    placeholder="Search Here by Books Title"
                    className="bg-transparent border border-base-300 shadow-sm rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-primary"
                />
                <button
                    type="submit"
                    className="bg-primary active:scale-97 transition-all text-white px-4 py-2 rounded-r-md font-medium cursor-pointer"
                >
                    Search
                </button>
            </Form>

            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {headingText}{" "}
                {filteredBooks.length > 0 && `(${filteredBooks.length})`}
            </h2>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
                    <Link href="/all-books">
                        <button
                            className={`btn w-full rounded-full ${!category ? "btn-primary" : "btn-outline btn-primary"}`}
                        >
                            All Categories
                        </button>
                    </Link>

                    {categories.map((c, i) => (
                        <Link
                            key={i}
                            href={`?category=${c}${search ? `&search=${search}` : ""}`}
                        >
                            <button
                                className={`btn w-full rounded-full ${
                                    category === c
                                        ? "btn-primary"
                                        : "btn-outline btn-primary"
                                }`}
                            >
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </button>
                        </Link>
                    ))}
                </div>

                <div className="col-span-12 md:col-span-9">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-base-200 rounded-xl">
                                <p className="text-xl opacity-50">
                                    No books found!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;
