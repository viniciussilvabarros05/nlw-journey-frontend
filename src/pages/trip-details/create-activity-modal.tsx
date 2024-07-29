import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps{
    closeCreateActivityModal: ()=>void;

}
export function CreateActivityModal({closeCreateActivityModal}:CreateActivityModalProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
              <button onClick={closeCreateActivityModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Todos convidados podem visualizar as atividades.
            </p>
          </div>

          <form className="p-2.5 rounded-lg flex items-center gap-3 flex-col">
            <div className="space-y-2 w-full">
              <div className="h-14 flex items-center gap-2 bg-zinc-950 border-zinc-800 p-2 rounded-md">
                <Tag className="size-5 text-zinc-400 ml-3.5 " />
                <input
                  type="email"
                  name="name"
                  placeholder="Qual a atividade?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 w-full"
                />
              </div>

              <div className="h-14 flex items-center gap-2 bg-zinc-950 border-zinc-800 p-2 rounded-md flex-1">
                <Calendar className="size-5 text-zinc-400 ml-3.5" />
                <input
                  type="datetime-local"
                  name="email"
                  defaultValue="20 de agosto"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 "
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-lime-300 text-lg text-lime-950 w-full rounded-lg px-5 h-11 font-medium text-center hover:bg-lime-400 transition"
            >
              Salvar atividade
            </button>
          </form>
        </div>
      </div>
    )
}