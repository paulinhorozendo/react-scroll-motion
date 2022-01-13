import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  Zoom,
  batch,
  ZoomIn,
  FadeIn,
  Move,
  MoveIn,
} from "react-scroll-motion";
import "./App.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>Animação feita com react-scroll 😁</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <h2>O barato eh loko 😵 </h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <h2>Eh nóis que avoa 🛴</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <div className="section-3">
          <h2>
            <Animator animation={MoveIn(-1000, 0)}>Aew galera 🖖</Animator>
            <Animator animation={MoveIn(1000, 0)}>Hoje tá chovendo 🌨</Animator>
            <Animator animation={MoveOut(1000, 0)}>
              Mas tá um dia baum 😃
            </Animator>
            <Animator animation={MoveOut(-1000, 0)}>
              Bora terminar logo isso aqui 😎
            </Animator>
          </h2>
        </div>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <h2>
            Nem sempre a gente tá criatividade pra escrever os textos. 😅 Vlws
            👍
          </h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
