import React, { useState } from "react";
import "./ExceptionFormatter.css"

export function ExceptionFormatter() {
  const [text, setText] = useState("")

  let inactive = ""
  if (text !== "") {
    inactive = "formatter-hint--inactive"
  }

  return <div className="wrapper">
    <div className={`formatter-hint ${inactive}`} data-testid="hint">
      <h2>Paste escaped exception here...</h2>
    </div>
    <textarea
      className="code"
      onChange={ event => setText(formatException(event.target.value)) }
      value={ text }
    ></textarea>
  </div>;
}

function formatException(text: string): string {
  let result = text

  if (result.startsWith("\"")) {
    result = result.substring(1)
  }
  if (result.endsWith("\"")) {
    result = result.substring(0, result.length - 1)
  }

  result = result.replaceAll("\\n", "\n")
  result = result.replaceAll("\\t", "\t")

  return result
}