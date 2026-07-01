const baseURL =
  process.env.NEXT_PUBLIC_SKIPPER_API_URL ?? "http://localhost:8080";

export type RegistrarBrokerInput = {
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string | null;
  email: string;
  telefono: string;
  cedula: string;
  password: string;
  acepta_terminos: boolean;
  terminos_version: string;
};

export type RegistrarBrokerResponse = {
  id: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string | null;
  email: string;
  telefono?: string | null;
  cedula: string;
};

export type ApiErrorPayload = {
  error?: string;
  mensaje?: string;
  detalles?: Record<string, string[]>;
  errors?: Record<string, string[]>;
};

export class ApiError extends Error {
  status: number;
  code?: string;
  fieldErrors?: Record<string, string[]>;

  constructor(
    message: string,
    status: number,
    code?: string,
    fieldErrors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fieldErrors = fieldErrors;
  }
}

export async function registrarBroker(
  input: RegistrarBrokerInput,
): Promise<RegistrarBrokerResponse> {
  const res = await fetch(`${baseURL}/api/brokers/registro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    let payload: ApiErrorPayload | undefined;
    try {
      payload = (await res.json()) as ApiErrorPayload;
    } catch {
      // Sin JSON; nos quedamos con el status.
    }
    throw new ApiError(
      payload?.mensaje ?? mensajePorStatus(res.status),
      res.status,
      payload?.error,
      payload?.detalles ?? payload?.errors,
    );
  }

  return (await res.json()) as RegistrarBrokerResponse;
}

function mensajePorStatus(status: number) {
  if (status === 0) {
    return "No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.";
  }
  if (status >= 500) {
    return "Estamos teniendo un problema técnico. Intenta de nuevo en unos minutos.";
  }
  if (status === 429) {
    return "Demasiados intentos en poco tiempo. Espera un momento e intenta de nuevo.";
  }
  return "Ocurrió un problema, intenta de nuevo. Si persiste, contáctanos.";
}
