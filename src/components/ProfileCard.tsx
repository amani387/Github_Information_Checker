type props = {
 
    profile: any;
    repoNumber?: number;
}
export default function ProfileCard({ profile,repoNumber }: props) {
 return (
      <div className="bg-gray-800 p-6 rounded-xl max-w-4xl mx-auto mb-6 text-center">
      <img
        src={profile.avatar_url}
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold">{profile.name}</h2>
      <p className="text-sm text-gray-400">@{profile.login}</p>
      <p className="mt-2">{profile.bio}</p>
      <p className="mt-2">Total Repository {repoNumber}</p>
    </div>
 );   
}