export const Landing=()=> {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
        <h1 className="text-4xl font-bold">Welcome to Slaytm</h1>
        <p className="mt-4 text-lg text-gray-700">try this because i am unemployed and bored</p>
        <div className="mt-6 flex gap-4">
          <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Get Started
          </a>
          <a href="/signin" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Sign In
          </a>
        </div>
      </div>
    );
  }
  