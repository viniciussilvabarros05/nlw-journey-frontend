import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerEmail: (ownerEmail:string) =>void;
  setOwnerName: (ownerName:string) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-bold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-bold">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form
          onSubmit={createTrip}
          className="p-2.5 rounded-lg flex items-center gap-3 flex-col"
        >
          <div className="space-y-2 w-full">
            <div className="h-14 flex items-center gap-2 bg-zinc-950 border-zinc-800 px-4 rounded-md">
              <User className="size-5 text-zinc-400 ml-3.5" />
              <input
                type="text"
                name="name"
                onChange={(event)=>setOwnerName(event.target.value)}
                placeholder="Seu nome completo"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 w-full"
              />
            </div>
            <div className="h-14 flex items-center gap-2 bg-zinc-950 border-zinc-800 p-2 rounded-md">
              <Mail className="size-5 text-zinc-400 ml-3.5" />
              <input
                type="email"
                onChange={(event)=>setOwnerEmail(event.target.value)}
                name="email"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <Button type="submit" size="full">Confirmar criação de viagem</Button>
        </form>
      </div>
    </div>
  );
}
