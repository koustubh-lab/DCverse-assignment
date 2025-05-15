export default function WelcomeHeader({ username }) {
  return (
    <header className="pt-6 pb-4 px-4 bg-muted-foreground/10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        AI Dashboard
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Welcome back, {username}! Here are your AI avatars.
      </p>
    </header>
  );
}
