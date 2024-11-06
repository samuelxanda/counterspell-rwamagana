import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro">
            Como uma <span className="text-pink">game jam</span> funciona?
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              <StepCard
                img="/photos/3.png"
                // TODO: Change `São Paulo` to the name of your city
                text="Registre-se para Counterspell São Paulo"
              />
              <StepCard
                img="/photos/4.png"
                text="Ache um time em Counterspell"
              />
              <StepCard
                img="/photos/5.png"
                text="Comece desenvolver jogos (experiência não necessária)"
              />
              <StepCard
                img="/photos/6.png"
                text="Participe de workshops, ou converse com um de nossos mentores para ajuda"
              />
              <StepCard
                img="/photos/7.png"
                text="Lance o que você fez e compartilhe com o resto do mundo!"
              />
            </div>
          </div>
          <div className="py-10 mx-6 space-y-4 text-xl uppercase retro">
            <p>
              {/* TODO: Change `São Paulo` to the name of your city */}
              Counterspell São Paulo vai acontecer por{" "}
              {/* TODO: Change `24 hours` to match your event duration */}
              <span className="text-pink">12 hours</span>
            </p>
            <p>Aqui uma programação bruta do que você deve esperar!</p>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide bg-pink neuebit">
      <div className="justify-center items-center flex flex-col w-[200px]">
        <img
          src={props.img}
          alt="Steps"
          className="flex flex-col items-center justify-center overflow-hidden"
        />
      </div>

      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
