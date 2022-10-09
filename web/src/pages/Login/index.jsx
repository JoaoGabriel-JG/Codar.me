const input = ({ name, type, placeholder, label }) => {
    <div className="flex flex-col">
        <label htmlFor="{name}">{label}</label>
        <input name="{name}" id="{name}" type="text" placeholder="Digite seu e-mail" />
    </div>
}

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
                <div className="flex flex-col">
                    <label htmlFor="email">Seu e-mail</label>
                    <input name="email" id="email" type="text" placeholder="Digite seu e-mail" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Sua senha</label>
                    <input name="password" id="password" type="password" placeholder="Digite sua senha" />
                </div>
            </form>
        </main>
    </div>
    )
}