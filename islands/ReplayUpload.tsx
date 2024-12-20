import { useSignal } from "@preact/signals";
import UploadZone from "../components/UploadZone.tsx";
import { asset } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import init, { Replay } from "../static/pkg/sc2_parser.js";
import ReplayList from "../components/ReplayList.tsx";

export default function ReplayUpload() {
  const [replays, setReplays] = useState<Replay[]>([]);

  useEffect(() => {
    async function initWasm() {
      const url = new URL(
        asset("pkg/sc2_parser_bg.wasm"),
        globalThis.location.toString(),
      );
      await init(url);
    }
    initWasm();
  }, []);

  const files = useSignal<File[]>([]);
  if (files.value.length < 1) {
    return <UploadZone files={files} />;
  } else {
    useEffect(() => {
      async function parse() {
        const replays = files.value.map(async (file) => {
          const buffer = await file.arrayBuffer();
          const bytes = new Uint8Array(buffer);
          return new Replay(bytes, file.name);
        });
        const result = await Promise.all(replays);
        setReplays(result);
      }
      parse();
    });
    return <ReplayList replays={replays} />;
  }
}
