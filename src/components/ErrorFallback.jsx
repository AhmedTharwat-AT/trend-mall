function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 text-center text-xl">
      <div role="alert">
        <p className="mb-2 text-4xl">Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
      <div>
        <button
          className="bg-indigo-500 px-7 py-3 font-medium tracking-wider text-gray-100"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
