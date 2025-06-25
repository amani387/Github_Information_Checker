import { useState } from "react";

type Props = {
  onSearch: (username: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) onSearch(input.trim());
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onSearch(input.trim());
    }
  };
  return (
    <div className="flex justify-center mb-6 py-4">
      <input
        type="text"
       className="w-full p-3 mr-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
