import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("taskinho-user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-primary">Taskinho</h1>
            <p className="text-gray-600">
              Gerencie suas tarefas de forma simples
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Criar conta</h2>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
