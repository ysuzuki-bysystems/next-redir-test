"use client";

import { useFormState } from "react-dom";
import { login } from "./actions";

export default function Page() {
  const [ _, dispatch] = useFormState(login, void 0);

  return (
    <>
      <form action={dispatch}>
        <button type="submit">login</button>
      </form>
    </>
  );
}
