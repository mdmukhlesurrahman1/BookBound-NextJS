import BorrowButton from "@/components/shared/BorrowButton";
import { getBooks } from "@/lib/data";
import Image from "next/image";

const BookDetails = async ({ params }) => {
    const { id } = await params;
    const books = await getBooks();
    const book = books.find((b) => b.id == id);

    return (
        <div className="w-11/12 max-w-7xl mx-auto py-10">
            <div className="card bg-base-100 border border-base-300 shadow-sm grid md:grid-cols-2 p-10 gap-20">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={280}
                    height={380}
                    className="w-full"
                />
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl ">{book.title}</h1>
                    <p className="text-gray-600 font-semibold">
                        <em>by {book.author}</em>
                    </p>
                    <p>{book.description}</p>
                    <div className="flex gap-4 items-center">
                        <h3 className="font-bold">Category:</h3>
                        <div
                            className={` ${(book.category === "Story" && "badge-secondary") || (book.category === "Science" && "badge-info") || (book.category === "Tech" && "badge-success")} badge rounded-full font-semibold p-2`}
                        >
                            {book.category}
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h3 className="font-bold">Available Quantity:</h3>
                        <p>{book.available_quantity} copies left</p>
                    </div>
                    <BorrowButton />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
