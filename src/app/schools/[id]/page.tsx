import { atob } from "buffer";
import { log } from "console";
import { useRouter } from "next/router";
import { Buffer } from "buffer";
import BallIcon from "@/app/ui/icons/ball";

export default function UserDashboard({ params }: { params: { id: string } }) {
  const schoolId = params.id;

  function decodeBase64ToUUID(base64: string): string | null {
    try {
      // Decode base64 string using Buffer
      let base64Decoded = base64.replace(/-/g, "+").replace(/_/g, "/");
      // Add padding if needed
      base64Decoded += "=".repeat((4 - (base64Decoded.length % 4)) % 4);

      const bytes = Buffer.from(base64Decoded, "base64");
      const hexArray = Array.from(bytes).map((byte) =>
        byte.toString(16).padStart(2, "0")
      );

      // Reconstruct the UUID string with hyphens
      return `${hexArray.slice(0, 4).join("")}-${hexArray
        .slice(4, 6)
        .join("")}-${hexArray.slice(6, 8).join("")}-${hexArray
        .slice(8, 10)
        .join("")}-${hexArray.slice(10).join("")}`;
    } catch (error) {
      console.error("Error decoding base64 string:", error);
      return null;
    }
  }

  const userId = decodeBase64ToUUID(schoolId);
  console.log(userId);

  return (
    <>
      <p>aaaaaaaa</p>
    </>
  );
}
