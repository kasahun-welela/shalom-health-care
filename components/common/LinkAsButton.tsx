import Link from "next/link";

interface LinkAsButtonProps {
  title: string;
  path: string;
}

function LinkAsButton({ title, path }: LinkAsButtonProps) {
  return (
    <Link
      className="mt-4 px-6 py-3 rounded-full bg-[#99c25c] text-white font-semibold text-lg shadow-lg hover:bg-[#7fa84a] transition-colors duration-200"
      href={path}
    >
      {title}
    </Link>
  );
}

export default LinkAsButton;
