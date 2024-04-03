import { fireEvent, render, screen } from '@testing-library/react';
import Welcome from './components/Welcome'
import App from './App';
import fantasy from './data/fantasy.json'
import CommentArea from './components/CommentArea';


test("Verifica del componente <Welcome>", () => {
  render(<Welcome/>);

  const welcomeElement = screen.getByText("Benvenuti in EpiBooks!");
  expect(welcomeElement).toBeInTheDocument();
});

test("Controllo array libri", () => {
  render(<App/>);

  const bookCards = screen.getAllByTestId("book-card");
  expect(bookCards.length).toBe(fantasy.length);
});

test("Verifica del componente <CommentArea>", () =>{
  render(<CommentArea asin="0316438960" selctedTitle="The Last Wish: Introducing the Witcher"/>);

  const commentArea = screen.getByPlaceholderText("Inserisci qui il testo");
  expect(commentArea).toBeInTheDocument();
});

describe("Verifica della ricerca dei libri", () => {
  it("Ricerca dell'elemento WISH", () => {
    render(<App />)
    const search = screen.getByPlaceholderText("Cerca un libro")
    fireEvent.change(search, { target: { value: "wish" } })
    const cards = screen.getAllByTestId("book-card")
    expect(cards).toHaveLength(2)
  })

  it("Ricerca dell'elemento D&D", () => {
    render(<App />)
    const search = screen.getByPlaceholderText("Cerca un libro")
    fireEvent.change(search, { target: { value: "d&d" } })
    const cards = screen.getAllByTestId("book-card")
    expect(cards).toHaveLength(2)
  })
})

it("Verifica del bordo del libro al click", () => {
  render(<App />)
  const books = screen.getAllByTestId("book-card")
  const book = books[0]
  fireEvent.click(book)
  expect(book).toHaveStyle("border: 3px solid red")
})

it("Verifica di un singolo bordo rosso ad ogni click", () => {
  render(<App />)
  const books = screen.getAllByTestId("book-card")
  const book1 = books[0]
  fireEvent.click(book1)
  expect(book1).toHaveStyle("border: 3px solid red")
  const book2 = books[1]
  fireEvent.click(book2)
  expect(book1).not.toHaveStyle("border: 3px solid red")
  expect(book2).toHaveStyle("border: 3px solid red");
})

it("Verifica del componente <SingleComment> settato a 0", () => {
  render(<App />)
  const comments = screen.queryAllByTestId("single-comment")
  expect(comments).toHaveLength(0)
})

it("Verifica caricamento corretto recensioni", async () => {
  render(<App />)
  const cards = screen.getAllByTestId('book-card')
  const book = cards[0]
  fireEvent.click(book)
  const infoButton = screen.getByTestId("info-button")
  fireEvent.click(infoButton)
  const comments = await screen.findAllByTestId("single-comment")
  expect(comments).not.toHaveLength(0)
})






