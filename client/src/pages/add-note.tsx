export default function AddNote() {
  return (
    <section className="overflow-y-scroll">
      <input
        type="text"
        placeholder="Untitled."
        className="border-none outline-none ring-0 w-full p-2 text-xl md:text-2xl lg:text-4xl font-bold bg-transparent"
      />
      <textarea
        name=""
        id=""
        className="p-2 w-full h-fit outline-none bg-transparent border"
        placeholder="Start writing here..."
      ></textarea>
    </section>
  );
}
