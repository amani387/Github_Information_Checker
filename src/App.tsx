interface Repo {
  name: string;
  language: string | null;
  [key: string]: unknown; 
}

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import LanguageSection from "./components/LanguageSection";

export default function App() {
  
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [repoNumber, setRepoNumber] = useState(0);
   const [languages, setLanguages] = useState<Record<string, number>>({});
const isValidGitHubUsername = (username: string) => {
  const regex = /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/;
  return regex.test(username);
};

  const fetchData = async (user: string) => {
     if (!isValidGitHubUsername(user)) {
    alert("Invalid GitHub username. Please try again.");
    return;
  }
    try {
      const profileRes = await fetch(`https://api.github.com/users/${user}`);
        if (profileRes.status === 404) {
      alert("User not found.");
      return;
    }
      const repoRes = await fetch(`https://api.github.com/users/${user}/repos`);
      if (repoRes.status === 404) {
      alert("Repo not found.");
      return;
    }
      const profileData = await profileRes.json();
      const repoData = await repoRes.json();
    
      setProfile(profileData);
      setRepos(repoData);
         setRepoNumber(repoData.length || 0);
      const langCount: Record<string, number> = {};

     repoData.forEach((repo: { language: string | null ; }) => {
      if (repo.language) {
        langCount[repo.language] = (langCount[repo.language] || 0) + 1;
      }
    });

    setLanguages(langCount);
 
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex items-center justify-center p-4">
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-6xl p-8">
    <h1 className="text-4xl font-bold text-center mb-6 text-white drop-shadow">
      GitHub Profile Explorer
    </h1>
    <SearchBar onSearch={fetchData} />
    {profile &&  (
      <div className="bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-lg border-b border-white/30 py-4 rounded-2xl"
>
        <ProfileCard profile={profile} repoNumber={repoNumber}/>
      </div>
    )}
  
    {Object.keys(languages).length > 0 &&    <div className="bg-gradient-to-r from-white/30 via-white/20 to-white/10 backdrop-blur-lg border-b border-white/30 p-10 rounded-2xl mt-4"
> <LanguageSection languages={languages} />  </div>}
   
    {repos.length > 0 && (
      <div className="max-h-[500px] overflow-y-auto mt-4 space-y-4">
        <RepoList repos={repos} />
      </div>
    )}
  </div>
</div>

  );
}
