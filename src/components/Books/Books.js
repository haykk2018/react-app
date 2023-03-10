import BookItem from "./BookItem";

const DUMMY_BOOKS = [
    {
        id: "m1",
        name: 'The Tragedy of Hamlet: Prince of Denmark',
        author: 'William Shakespeare',
        description:
            "Hamlet is Shakespeare's most popular, and most puzzling, play. It follows the form of a \"revenge tragedy,\" in which the hero, Hamlet, seeks vengeance against his father's murderer, his uncle Claudius, now the king of Denmark.",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Animal Farm",
        author: 'Orwell, George',
        description: "George Orwell's timeless and timely allegorical novel",
        price: 3.99,
    },
    {
        id: "m3",
        name: 'The Old Man and the Sea',
        author: 'Hemingway, Ernest',
        description: "it is the story of an old Cuban fisherman, down on his luck, and his supreme ordeal--a relentless, agonizing battle with a giant marlin far out in the Gulf Stream",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Салат "Поке с лососем"',
        description:
            "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
        price: 7.99,
    },
];

const Books = (props) => {

        const bookList = DUMMY_BOOKS.map((book) => (
            <BookItem
                key={book.id}
                id={book.id}
                name={book.name}
                author={book.author}
                description={book.description}
                price={book.price}
            />
        ));

    return bookList

}
export default Books;