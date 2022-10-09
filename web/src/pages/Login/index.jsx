export const Login = () => {
    return (
    <div>
        <header className="container flex justify-center max-w-5xl p-4 border-b border-red-300">
            <img src="/imgs/logo/logo-fundo-branco.svg" className="w-32 md:w-40"/>
        </header>

        <main className="p-4">
            <div className="p-4">
                <h2 className="text-xl font-bold">Entre na sua conta</h2>
            </div>

            <form>
                <label htmlFor="email">Seu e-mail</label>
                <input name="email" id="email" type="text" placeholder="Digite seu e-mail" />

                <label htmlFor="password">Sua senha</label>
                <input name="password" id="password" type="password" placeholder="Digite sua senha" />
            </form>
        </main>
    </div>
    )
}