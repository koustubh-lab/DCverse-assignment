import { Suspense, useEffect, useState } from "react";
import WelcomeHeader from "./welcome-header";
import AvatarGrid from "./avatar-grid";
import CreateAvatarButton from "./create-avatar-button";

export default function AvatarDashboard() {
  const [avatars, setAvatars] = useState([]);

  async function fetchDummyData() {
    const userResponse = await fetch("https://reqres.in/api/users?page=1");
    const userData = await userResponse.json();

    setAvatars(userData.data.slice(0, 3));
  }

  useEffect(() => {
    fetchDummyData();
  }, []);

  return (
    <div className="mx-auto">
      <WelcomeHeader username="Alex" />

      <section className="mt-8 px-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Your AI Avatars
        </h2>

        <Suspense fallback={<div>Loading avatars...</div>}>
          <AvatarGrid avatars={avatars} />
        </Suspense>
      </section>

      <CreateAvatarButton />
    </div>
  );
}
