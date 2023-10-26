import { Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Spinner size="xl" />
    </div>
  );
}

export default Loading;
