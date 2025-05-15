import AvatarCard from "./avatar-card";

export default function AvatarGrid({ avatars }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {avatars.map((avatar) => (
        <AvatarCard
          key={avatar.id}
          name={`${avatar.first_name} ${avatar.last_name}`}
          image={avatar.avatar}
          id={avatar.id}
        />
      ))}
    </div>
  );
}
