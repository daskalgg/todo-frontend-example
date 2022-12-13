export default function Todo({ text, onDelete }) {
  return (
    <p
      onClick={() => {
        onDelete();
      }}
    >
      {text}
    </p>
  );
}
