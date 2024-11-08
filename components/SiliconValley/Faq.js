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

function FaqCard(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const faqBkgr = props.bkgrs ? faqBkgrs[props.bkgrs[props.id - 1] - 1] : null;

  const style = {
    transform: dndCSS.Transform.toString(transform),
    transition,
    backgroundImage: faqBkgr ? `url(${faqBkgr})` : undefined,
  };

  const faqItem = props.faqData[props.id - 1];

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
          <p className="mb-2 text-lg uppercase retro">{faqItem?.question}</p>
          <p
            className="text-xl leading-6 text-justify neuebit"
            dangerouslySetInnerHTML={{ __html: faqItem?.answer }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [faqItems, setFaqItems] = useState([]);
  const [randomFaqBkgrs, setRandomFaqBkgrs] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [prevSolved, setPrevSolved] = useState(false);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch(
          "https://adamxu.net/counterspell/faq.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await response.json();
        setFaqData(data);
        const numFaq = data.length;
        const faqIds = Array.from({ length: numFaq }, (_, i) => i + 1);
        setFaqItems(faqIds);

        setScreenWidth(window.innerWidth);
        const randArray = Array.from({ length: numFaq }, (_, i) => i + 1).sort(
          () => Math.random() - 0.5
        );
        setRandomFaqBkgrs(randArray);
        const correct = faqIds.toSorted(
          (a, b) => randArray[a - 1] - randArray[b - 1]
        );
        setCorrectOrder(correct);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqData();
  }, []);

  useEffect(() => {
    if (
      !prevSolved &&
      JSON.stringify(faqItems) === JSON.stringify(correctOrder)
    ) {
      setPrevSolved(true);
    }
  }, [faqItems, correctOrder, prevSolved]);

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
              <FaqCard
                id={id}
                key={id}
                bkgrs={randomFaqBkgrs}
                faqData={faqData}
              />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        faqItems.map((id) => <FaqCard id={id} key={id} faqData={faqData} />)
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
