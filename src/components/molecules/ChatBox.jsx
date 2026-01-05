import React from "react";

export default function ChatBox({ messages = [], meId, header }) {
  const [text, setText] = React.useState("");

  return (
    <div className="chat">
      <div className="chatHeader">
        <div style={{ fontWeight: 800 }}>{header}</div>
        <div className="muted small">Mock chat (UI only)</div>
      </div>

      <div className="chatBody">
        {messages.map((m, idx) => {
          const mine = m.from === meId;
          return (
            <div key={idx} className={`bubbleRow ${mine ? "mine" : ""}`}>
              <div className={`bubble ${mine ? "mine" : ""}`}>
                <div>{m.text}</div>
                <div className="muted tiny">{m.at}</div>
              </div>
            </div>
          );
        })}
        {messages.length === 0 && <div className="muted">No messages yet.</div>}
      </div>

      <div className="chatComposer">
        <input
          className="input"
          value={text}
          placeholder="Type a message (disabled prototype)…"
          onChange={(e) => setText(e.target.value)}
          disabled
        />
        <button className="btn" type="button" disabled>
          Send
        </button>
      </div>
    </div>
  );
}
