import { getBooks } from "@/lib/data";
import Image from "next/image";

const BookDetails = async ({ params }) => {
    const { id } = await params;
    const books = await getBooks();
    const book = books.find((b) => b.id == id);
    return (
        <div className="w-11/12 max-w-7xl mx-auto py-20">
            <div className="card bg-base-100 border border-base-300 shadow-sm grid md:grid-cols-2 p-10">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={280}
                    height={380}
                    className="w-full"
                />
            </div>
            <div>

            </div>
        </div>
    );
};

export default BookDetails;
