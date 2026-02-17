import s from "./style.module.css"

const text = ["CSS".split(""), "version".split("")];

export default function Page() {
  return (
    <div className="text-black bg-blue-300">
      <div className="flex items-end h-screen overflow-hidden justify-left">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          {text[0].map((letter, i) => <span className={s.letter}
            style={{
              "--index": i,
            } as React.CSSProperties} key={i}>{letter}</span>)}
          <br />
          {text[1].map((letter, i) => <span className={s.letter} style={{
            "--index": i,
          } as React.CSSProperties} key={i}>{letter}</span>)}
        </h1>
      </div>
    </div>
  );
}
