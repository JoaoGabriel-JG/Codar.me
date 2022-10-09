import { Icon } from './../../components'

const Input = ({ name, label, ...props }) => ( 
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
    </div>
)

export const Login = () => {
    return (
    <div>
        <header className="p-4 border-b border-red-300">
            <div className="container max-w-xl flex justify-center">
                <img src="/imgs/logo/logo-fundo-branco.svg" className="w-32 md:w-40"/>
            </div>
        </header>

        <main className="container max-w-xl p-4">
            <div className="p-4">
                <Icon name="arrowLeft"/>
                <h2 className="text-xl font-bold">Entre na sua conta</h2>
            </div>

            <form className="space-y-6">
                <Input 
                    type="text"
                    name="email"
                    label="Seu e-mail"
                    placeholder="Digite seu e-mail"
                />

                <Input 
                    type="password"
                    name="password"
                    label="Sua senha"
                    placeholder="Digite sua senha"
                />

            <button className="w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                Criar minha conta
            </button>
            </form>
        </main>
    </div>
    )
}