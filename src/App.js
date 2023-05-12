import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");

  const handleChange = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          placeholder="place your markdown text here"
          onChange={handleChange}
          value={markdown}
        />
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
