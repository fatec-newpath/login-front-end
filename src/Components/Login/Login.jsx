import { FaUser, FaLock } from "react-icons/fa"; // Importa ícones para os campos de entrada
import { useState } from "react"; // Importa o hook useState para gerenciar estados
import "./Login.css"; // Importa o arquivo de estilos CSS para a tela de login

const Login = () => {
    // Estados para armazenar os valores dos campos de entrada
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

    // Função chamada ao enviar o formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o recarregamento da página

        // Verificação simples para evitar envio de campos vazios
        if (!username || !password) {
            setError("Preencha todos os campos.");
            return;
        }

        // Simula o envio dos dados (aqui entraria a lógica de autenticação real)
        console.log("Usuário:", username, "Senha:", password);

        setError(""); // Limpa a mensagem de erro ao enviar corretamente
    };

    return (
        <div className="container"> {/* Div principal que contém o formulário */}
            <form onSubmit={handleSubmit}> {/* Formulário com evento de submissão */}
                <h1>Acesse o Sistema</h1> {/* Título da tela de login */}
                
                {/* Exibe mensagens de erro se houver */}
                {error && <p className="error-message">{error}</p>}
                
                {/* Campo de entrada para e-mail */}
                <div className="input-field">
                    <input type="email" placeholder="E-mail" 
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    aria-label="Digite seu e-mail" /> {/* Adicionado aria-label para acessibilidade */}
                    <FaUser className="icon" /> {/* Ícone de usuário */}
                </div>
                
                {/* Campo de entrada para senha */}
                <div className="input-field">
                    <input type="password" placeholder='Senha' 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Digite sua senha" /> {/* Adicionado aria-label para acessibilidade */}
                    <FaLock className="icon" /> {/* Ícone de cadeado */}
                </div>
                
                {/* Opção para lembrar usuário e link de recuperação de senha */}
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar usuário
                    </label>
                    <a href="#">Esqueci minha senha</a>
                </div>
                
                {/* Botão de envio do formulário */}
                <button>Entrar</button>
                
                {/* Link para registro de novo usuário */}
                <div className="signup-link">
                    <p>
                        Não possui uma conta? <a href="#">Registrar-se</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login; // Exporta o componente para ser usado em outros arquivos
