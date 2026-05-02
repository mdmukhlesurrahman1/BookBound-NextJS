import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 border border-base-300 shadow-sm flex flex-col justify-between items-center p-5 gap-4">
            <div className="relative">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={200}
                    height={280}
                    className="h-70"
                />
                <div
                    className={` ${(book.category === "Story" && "badge-secondary") || (book.category === "Science" && "badge-info") || (book.category === "Tech" && "badge-success")} badge absolute rounded-full font-semibold -top-2 -right-6 p-3 border-4 border-base-100`}
                >
                    {book.category}
                </div>
            </div>
            <div className="text-center">
                <h2 className="card-title mb-4">{book.title}</h2>
                <Link href={`/all-books/${book.id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
