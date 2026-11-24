
export default function Login() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md rounded-2xl border border-border/20 bg-white/60 p-8 shadow-xl">

                <h1 className="mb-2 text-center font-heading text-3xl font-bold text-primary">
                    Bem-vindo
                </h1>

                <p className="mb-8 text-center text-foreground">
                    Faça login para continuar
                </p>

                <form className="flex flex-col gap-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-primary">
                            E-mail
                        </label>

                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full rounded-lg border border-border/30 bg-background px-4 py-3 text-primary outline-none transition placeholder:text-foreground/50 focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-primary">
                            Senha
                        </label>

                        <input
                            type="password"
                            placeholder="Sua senha"
                            className="w-full rounded-lg border border-border/30 bg-background px-4 py-3 text-primary outline-none transition placeholder:text-foreground/50 focus:border-primary"
                        />
                    </div>

                    <button type="submit"
                        className="mt-2 rounded-lg bg-primary py-3 font-semibold text-background transition hover:bg-primary/90">
                        Entrar
                    </button>
                </form>

            </div>
        </main>
    );
}
