import React, { useEffect, useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS as dndCSS } from "@dnd-kit/utilities";
import { confetti } from "@tsparticles/confetti";

const faqBkgrs = [
  "/faqbkgr/faq1.png",
  "/faqbkgr/faq2.png",
  "/faqbkgr/faq3.png",
  "/faqbkgr/faq4.png",
  "/faqbkgr/faq5.png",
  "/faqbkgr/faq6.png",
  "/faqbkgr/faq7.png",
  "/faqbkgr/faq8.png",
];

const faqData = [
  {
    question: "Sou eligível para participar?",
    answer: `Se você tem 18 anos ou menos, sim, nós estamos anciosos para te conhecer! Se você tem mais de 18 mas
        ainda no ensino médio, nos envie um email para
        <a href="mailto:saopaulo@counterspell.hackclub.com">saopaulo@counterspell.hackclub.com</a>.`,
  },
  {
    question: "Quanto custa para participar?",
    answer: `É completamente de graça! Teremos refeições, snacks e bebidas (não alcoólicas!) no hackathon, como também brindes, prêmios e mini-eventos divertidos.`,
  },
  {
    question: "Onde vai ser?",
    answer: "Estamos fechando os últimos detalhes disso! Garantimos ser um lugar próximo a metrô ou ponto de ônibus."
  },
  {
    question: "O que Hack Club já fez no passado?",
    answer: `Nós já executamos multiplos eventos ao redor do mundo. No verão (hemisfério norte) de '21, nós 
        <a href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub">reservamos um trem atravessando os EUA</a>
        e executamos o maior hackathon em terra do mundo. Ano passado, nós executamos um do-it-yourself <a href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub">aventura
        acampamento</a> em Cabot, Vermont, EUA. Esse ano, <a href="https://youtu.be/hiG3fYq3xUU?si=upoCudpNJvrs2Ax7">reservamos um trem atravessando o Canadá</a> e fizemos um hackathon dentro.`,
  },
  {
    question: "Eu não sou bom programando, posso participar?",
    answer: `Esse hackathon é para hackers (hackers do bem!) de todos níveis de habilidade! Nós vamos ter workshops e outros eventos para unir-mos e aprender juntos. Se você gostaria de começar explorando alguns projetos introdutórios, check <a href="https://workshops.hackclub.com/">Hack Club Workshops</a>.`,
  },
  {
    question: "O que posso fazer na Counterspell?",
    answer: `Na Counterspell, nós vamos construir video games de todos tipos! O tema será revelado no começo do hackathon.`,
  },
  {
    question: "O que devo levar para Counterspell?",
    answer: `Seu laptop, carregador, e uma mente aberta!`,
  },
  {
    question: "Meus pais estão preocupados!",
    answer: `Estamos aqui para ajudar! Peça para eles mandarem um email para
          <a href="mailto:saopaulo@counterspell.hackclub.com">saopaulo@counterspell.hackclub.com</a>
          e nós vamos garantor de responder todos emails!`,
  },
  {
    question: "Tenho mais perguntas!",
    answer: `Contacte-nos! Mande um email para
          <a href="mailto:saopaulo@counterspell.hackclub.com">saopaulo@counterspell.hackclub.com</a>.
          Estamos aguardando para te responder!`,
  },
];

function FaqCard(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const faqBkgr = props.bkgrs ? faqBkgrs[props.bkgrs[props.id - 1] - 1] : null;

  const style = {
    transform: dndCSS.Transform.toString(transform),
    transition,
    backgroundImage: faqBkgr ? `url(${faqBkgr})` : undefined,
  };

  const faqItem = faqData[props.id - 1];

  return (
    <div
      className="bg-pink max-w-lg lg:w-[445px] lg:h-[280px] bg-cover bg-center"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="h-full p-5">
        <div className="flex flex-col justify-center h-full p-3 bg-black/40">
          <p className="mb-2 text-lg uppercase retro">{faqItem.question}</p>
          <p
            className="text-xl leading-6 text-justify neuebit"
            dangerouslySetInnerHTML={{ __html: faqItem.answer }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const numFaq = faqData.length;
  const faqIds = Array.from({ length: numFaq }, (_, i) => i + 1);
  const [faqItems, setFaqItems] = useState(faqIds);
  const [randomFaqBkgrs, setRandomFaqBkgrs] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [prevSolved, setPrevSolved] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const randArray = Array.from({ length: numFaq }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setRandomFaqBkgrs(randArray);
    const correct = faqIds.toSorted(
      (a, b) => randArray[a - 1] - randArray[b - 1]
    );
    setCorrectOrder(correct);
  }, []);

  useEffect(() => {
    if (
      !prevSolved &&
      JSON.stringify(faqItems) === JSON.stringify(correctOrder)
    ) {
      confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 1 },
        startVelocity: 75,
        colors: ["#65FF96", "#43DDFF", "#2A2AFF", "#FF4387"],
      });
      setPrevSolved(true);
    }
  }, [faqItems, correctOrder]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="grid gap-8 p-5 inter lg:grid-cols-2">
      {screenWidth > 1024 ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={faqItems}>
            {faqItems.map((id) => (
              <FaqCard id={id} key={id} bkgrs={randomFaqBkgrs} />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        faqItems.map((id) => <FaqCard id={id} key={id} />)
      )}
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFaqItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
