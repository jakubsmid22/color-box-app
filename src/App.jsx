import ColorBoxContainer from "./ColorBoxContainer"

const App = () => {
  return (
    <main className="min-h-screen flex flex-col items-center gap-5 justify-center py-10">
      <h1 className="font-bold text-3xl">Color Box App</h1>
      <ColorBoxContainer/>
    </main>
  )
}

export default App