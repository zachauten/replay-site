import { Signal } from "@preact/signals";
import Input from "./Input.tsx";

export default function UploadZone(props: { files: Signal<File[]> }) {
  if (props.files.value.length > 0) throw Error("Files should be empty");
  function inputHandler(e: Event) {
    const { files } = e.target as HTMLInputElement;
    selectFirstFile(files);
  }

  function dropHandler(event: DragEvent) {
    event.preventDefault();
    const filelist = event.dataTransfer?.files;
    selectFirstFile(filelist);
  }

  function selectFirstFile(filelist: FileList | null | undefined) {
    if (filelist) {
      const files: File[] = [];
      for (let i = 0; i < filelist.length; i++) {
        files.push(filelist[i]);
      }
      props.files.value = files;
    }
  }

  return (
    <div id="dropzone" class="flex items-center justify-center w-full">
      <label
        onDrop={dropHandler}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray border-dashed rounded-lg cursor-pointer hover:bg-gray dark:border-gray dark:hover:border-gray dark:hover:bg-gray"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            class="w-10 h-10 mb-3 text-black dark:text-yellow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            >
            </path>
          </svg>
          <p class="mb-2 text-sm text-black dark:text-yellow">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-black dark:text-yellow">
            MP3 (Max 30MB)
          </p>
        </div>
        <Input
          id="dropzone-file"
          type="file"
          class="hidden"
          onInput={inputHandler}
          multiple
        />
      </label>
    </div>
  );
}
