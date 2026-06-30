import { useForm } from "react-hook-form";

export function RegisterSetup() {
  // Estraiamo la funzione register dal modulo useForm
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onValid = (data) => {
    // I dati contengono le chiavi registrate nei campi
    console.log("Dati del form:", data);
  };

  const onInvalid = (error) => {
    console.log(error)
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      {/* Registriamo l'input con la chiave 'email' */}
      <input
        {...register("username", {
          required: "Il nome utente è richiesto",
          minLength: {
            value: 4,
            message: "Il nome deve contenere almeno 4 caratteri",
          },
        })}
      />
      <input {...register("name")} placeholder="Inserisci nome" />
      <input {...register("firstName")} placeholder="Inserisci cognome" />
      <input {...register("email")} placeholder="Inserisci email" />


      {errors.username && <span style={{color:"red"}}>{errors.username.message}</span>}
      <button type="submit">Conferma</button>
    </form>
  );
}
