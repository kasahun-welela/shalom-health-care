import LinkAsButton from "./LinkAsButton";

function Banner() {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-200 via-purple-500 to-purple-800 flex flex-col items-center justify-center py-10">
        <h2 className="max-w-3xl text-3xl md:text-4xl font-bold mb-10 text-white text-center drop-shadow-lg">
          Shalom Health Care Services Intellectual and developmental disability
        </h2>
        <LinkAsButton title="Reviews coming soon!" path="/" />
      </div>
    </div>
  );
}

export default Banner;
