import Container from "../base/Container";
import ButtonTheme from '../ButtonTheme'

export default function Navbar({ children }) {
  return (
    <>
      <header>
        <Container>
          <h1 className="text-black dark:text-white">Navbar</h1>
          <ButtonTheme/>
        </Container>
      </header>
    </>
  );
}
