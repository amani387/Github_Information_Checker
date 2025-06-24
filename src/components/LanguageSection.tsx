// src/components/LanguageSection.tsx
interface LanguageSectionProps {
  languages: Record<string, number>;
}

const LanguageSection: React.FC<LanguageSectionProps> = ({ languages }) => {
  if (!languages || Object.keys(languages).length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white/10 rounded-lg shadow backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-3 text-white">Languages Used</h2>
      <div className="flex flex-wrap gap-2">
        {Object.entries(languages).map(([lang]) => (
          <span
            key={lang}
            className="bg-purple-600/70 text-white px-3 py-1 rounded-full text-sm"
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageSection;
