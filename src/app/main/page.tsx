"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [result, setResult] = useState<boolean | undefined>();

  useEffect(() => {
    setResult(window.location.pathname === "/main");
  }, []);

  if (typeof result === "undefined") {
    return <></>;
  }

  return (
    <>
      <pre style={{ display: "inline-block" }}>
        window.location.pathname === &quot;/main&quot;
      </pre> is <output style={{ color: result ? "unset" : "red" }}>{JSON.stringify(result)}.</output></>
  );
}
