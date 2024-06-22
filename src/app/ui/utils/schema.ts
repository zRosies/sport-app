export interface MessagesProps {
  setDisplay: Function;
  display: boolean;
  children: React.ReactNode;
}

export interface ErrorMessage {
  message: string;
}

export interface User {
  email: string;
  password: string;
  userId: string;
  birthdate: string;
  fullName: string;
  phone: string;
  picture: string;
  cpf: string;
  time: string;

  address: {
    uf: string;
    city: string;
    cep: string;
  };
}
