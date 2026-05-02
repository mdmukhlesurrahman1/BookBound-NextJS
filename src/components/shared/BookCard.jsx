import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 border border-base-300 shadow-sm flex flex-col justify-between items-center p-5 gap-4">
            <Image
                src={book.image_url}
                alt={book.title}
                width={200}
                height={280}
                className="h-70"
            />
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
