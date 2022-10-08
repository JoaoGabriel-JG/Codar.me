export function App() {
  return (
    <div className="h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6">

    <header className="p-4">
      <img src="/imgs/logo/logo-fundo-vinho.svg" className="w-40"/>
    </header>

    <div className="container flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        <div className="md:flex-1 flex justify-center">
          <img src="/imgs/photo.png" className="full max-w-md"/>
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
          
          <button className="text-red-700 bg-white text-lg px-8 py-4 rounded-xl">
            Criar minha conta
          </button>
          <button className="text-white border border-white text-xl px-8 py-4 rounded-xl">
            Fazer login
          </button>
        </div>
    </div>
    </div>
  )
}
