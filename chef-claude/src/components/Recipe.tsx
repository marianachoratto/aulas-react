import ReactMarkdown from "react-markdown";
import Loading from "./Loading.tsx";

export function Recipe(props: any) {
  console.log(props);
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      {props.loading && <Loading />}
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}
