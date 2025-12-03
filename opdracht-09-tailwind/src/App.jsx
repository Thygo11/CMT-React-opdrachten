function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Work<span className="text-purple-600 dark:text-purple-400">cation</span>
        </h1>

        
        <img
          src="../public/img/beachwork.png"
          alt=""
          className="rounded-xl shadow mb-8"
        />

        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          You can work from anywhere.{" "}
          <h3 className="text-purple-600 dark:text-purple-400">
            Take advantage of it.
          </h3>
        </h2>

   
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Workcation helps you find work-friendly rentals in beautiful
          locations so you can enjoy nice weather even when you're not
          on vacation.
        </p>

        
        <button className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow">
          BOOK YOUR ESCAPE
        </button>

      </div>
    </div>
  );
}
export default App;