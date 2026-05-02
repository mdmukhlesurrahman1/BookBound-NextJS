export async function getBooks() {
    const res = await fetch(
        "https://book-bound-next-js.vercel.app/data.json"
    );
    const books = await res.json();
    return books;
}