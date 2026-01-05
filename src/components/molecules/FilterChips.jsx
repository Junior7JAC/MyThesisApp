export default function FilterChips({ options, value, onChange }) {
  return (
    <div className="chips">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            className={`chip ${active ? "active" : ""}`}
            onClick={() => onChange(opt)}
            type="button"
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
