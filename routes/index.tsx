import { useSignal } from "@preact/signals";
import UploadZone from "../components/UploadZone.tsx";
import ReplayUpload from "../islands/ReplayUpload.tsx";

export default function Home() {
  const files = useSignal([]);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <ReplayUpload />
      </div>
    </div>
  );
}
