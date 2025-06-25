type Props = {
  repos: any[];
};

export default function RepoList({ repos }: Props) {
  return (
    <div className="max-w-3xl mx-auto space-y-4 mt-4">
      <h3 className="text-xl font-bold mb-4">Public Repositories</h3>
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-700 p-4 rounded">
            <h4 className="text-lg font-semibold">{repo.name}</h4>
            <p className="text-sm text-gray-300">{repo.description}</p>
            <p className="text-xs mt-2">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
