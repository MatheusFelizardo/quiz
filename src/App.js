import React from "react";
import Radio from "./Radio";
import img0 from "./img/insultado.png";
import img1 from "./img/facepalm.jpg";
import img2 from "./img/acertou2.jpg";
import img3 from "./img/acertou3.jpg";
import img4 from "./img/chucknorrisapproves.jpg";
import img5 from "./img/acertoutodas.jpg";
import "./style/style.css";

const perguntas = [
  {
    pergunta: "Qual é o meu nome completo?",
    options: [
      "Matheus Felizardo",
      "Matheus Santos Felizardo",
      "Matheus Rodrigues Felizardo",
    ],
    resposta: "Matheus Rodrigues Felizardo",
    id: "p1",
  },
  {
    pergunta: "De onde eu sou cria?",
    options: [
      "Jardim Gramacho, Duque de Caxias",
      "Cachambi, Rio de Janeiro",
      "Gramacho, Duque de Caxias",
    ],
    resposta: "Gramacho, Duque de Caxias",
    id: "p2",
  },
  {
    pergunta: "Em que ano comecei a estudar programação?",
    options: ["2016", "2019", "2020"],
    resposta: "2020",
    id: "p3",
  },
  {
    pergunta: "Qual hobbie eu mais gosto de fazer?",
    options: ["Jogar", "Conversar com os amigos", "Jogar futebol"],
    resposta: "Conversar com os amigos",
    id: "p4",
  },
  {
    pergunta: "Qual meu time do coração?",
    options: ["Flamengo", "Duque de Caxias", "Ponte Preta"],
    resposta: "Flamengo",
    id: "p5",
  },
];

function App() {
  const [responses, setResponses] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
  });
  const [slide, setSlide] = React.useState(0);
  const [finalResult, setFinalResult] = React.useState("");

  function calculateFinalResult() {
    const correctAnswers = perguntas.filter(({ id, resposta }) => {
      return responses[id] === resposta;
    });
    setFinalResult(correctAnswers.length);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      calculateFinalResult();
    }
  }

  function handleChange({ target }) {
    
    setResponses({ ...responses, [target.id]: target.value });
  }

  function handleBack() {
    window.location.pathname = "/";
  }
  return (
    <>
      {slide < perguntas.length && (
        <h1>Tens o que é necessário para responder as perguntas?</h1>
      )}
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            active={slide === index}
            value={responses[pergunta.id]}
            key={pergunta.id}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {slide < perguntas.length && (
          <button onClick={handleClick}>Próxima</button>
        )}
        {finalResult === 0 && (
          <div>
            <h2>NÃO ACERTOU NEM MEU NOME? :(</h2>
            <img src={img0} alt="" />
            <br />
            <button onClick={handleBack}>Voltar</button>
          </div>
        )}
        {finalResult > 0 && (
          <div>
            <h4>
              Você acertou {finalResult}{" "}
              {finalResult > 1 ? "perguntas" : "pergunta"} de {perguntas.length}
              .
            </h4>

            {finalResult === 1 && <img src={img1} alt="" />}
            {finalResult === 2 && <img src={img2} alt="" />}
            {finalResult === 3 && <img src={img3} alt="" />}
            {finalResult === 4 && <img src={img4} alt="" />}
            {finalResult === 5 && <img src={img5} alt="" />}
          </div>
        )}

        {finalResult > 0 && <button onClick={handleBack}>Voltar</button>}
      </form>
    </>
  );
}

export default App;
