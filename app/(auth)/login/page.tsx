
export default function Login() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
            <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">

                <h1 className="mb-2 text-center text-3xl font-bold text-white">
                    Bem-vindo
                </h1>

                <p className="mb-8 text-center text-gray-400">
                    Faça login para continuar
                </p>

                <form className="flex flex-col gap-5">
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            E-mail
                        </label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Senha
                        </label>
                        <input
                            type="password"
                            placeholder="Sua senha"
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Entrar
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Ainda não tem conta?{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                        Cadastre-se
                    </a>
                </p>

            </div>
        </main>
    );
}
