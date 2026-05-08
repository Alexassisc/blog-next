export default function LoadingHome() {
  return (
    <div className="container mx-auto p-4 animate-pulse">
      <div className="h-10 w-48 bg-gray-300 rounded mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-48 bg-gray-200 rounded-xl w-full"></div>{' '}
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>{' '}
            <div className="h-4 bg-gray-200 rounded w-full"></div>{' '}
          </div>
        ))}
      </div>
    </div>
  );
}
