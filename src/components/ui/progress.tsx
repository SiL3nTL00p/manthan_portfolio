

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div
        className="w-12 h-12 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
