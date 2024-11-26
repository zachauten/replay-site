/* tslint:disable */
/* eslint-disable */
/**
 * @returns {string}
 */
export function test(): string;
export type EventType = "ObjectEvent" | "PlayerStatsEvent";

export type EventEntry = [string, DecoderResult];

export type DecoderResult = { Name: string } | { Value: bigint } | { Blob: string } | { Array: DecoderResult[] } | { DataFragment: number } | { Pair: [bigint, number] } | { Gameloop: [string, bigint] } | { Bool: boolean } | { Struct: EventEntry[] } | "Null" | "Empty";

export interface Event {
    entries: [string, DecoderResult][];
}

export interface Parsed {
    player_info: EventEntry[];
    tracker_events: Event[];
    metadata: Metadata;
}

export class Metadata {
  free(): void;
  BaseBuild: string;
  DataBuild: string;
  DataVersion: string;
  Duration: number;
  GameVersion: string;
  Players: (PlayerMetadata)[];
  Title: string;
}
export class PlayerMetadata {
  free(): void;
  APM: number;
  AssignedRace: string;
  PlayerID: number;
  Result: string;
  SelectedRace: string;
}
export class Replay {
  free(): void;
  /**
   * @param {Uint8Array} bytes
   * @param {string} path
   */
  constructor(bytes: Uint8Array, path: string);
  content_hash: string;
  file_path: string;
  parsed: Parsed;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_playermetadata_free: (a: number, b: number) => void;
  readonly __wbg_get_playermetadata_PlayerID: (a: number) => number;
  readonly __wbg_set_playermetadata_PlayerID: (a: number, b: number) => void;
  readonly __wbg_get_playermetadata_APM: (a: number) => number;
  readonly __wbg_set_playermetadata_APM: (a: number, b: number) => void;
  readonly __wbg_metadata_free: (a: number, b: number) => void;
  readonly __wbg_get_metadata_Title: (a: number) => Array;
  readonly __wbg_set_metadata_Title: (a: number, b: number, c: number) => void;
  readonly __wbg_get_metadata_GameVersion: (a: number) => Array;
  readonly __wbg_set_metadata_GameVersion: (a: number, b: number, c: number) => void;
  readonly __wbg_get_metadata_DataBuild: (a: number) => Array;
  readonly __wbg_set_metadata_DataBuild: (a: number, b: number, c: number) => void;
  readonly __wbg_get_metadata_DataVersion: (a: number) => Array;
  readonly __wbg_set_metadata_DataVersion: (a: number, b: number, c: number) => void;
  readonly __wbg_get_metadata_BaseBuild: (a: number) => Array;
  readonly __wbg_set_metadata_BaseBuild: (a: number, b: number, c: number) => void;
  readonly __wbg_get_metadata_Duration: (a: number) => number;
  readonly __wbg_set_metadata_Duration: (a: number, b: number) => void;
  readonly __wbg_get_metadata_Players: (a: number) => Array;
  readonly __wbg_set_metadata_Players: (a: number, b: number, c: number) => void;
  readonly __wbg_replay_free: (a: number, b: number) => void;
  readonly __wbg_get_replay_parsed: (a: number) => number;
  readonly __wbg_set_replay_parsed: (a: number, b: number) => void;
  readonly replay_new: (a: number, b: number, c: number, d: number) => number;
  readonly test: () => Array;
  readonly __wbg_set_playermetadata_Result: (a: number, b: number, c: number) => void;
  readonly __wbg_set_playermetadata_SelectedRace: (a: number, b: number, c: number) => void;
  readonly __wbg_set_playermetadata_AssignedRace: (a: number, b: number, c: number) => void;
  readonly __wbg_set_replay_file_path: (a: number, b: number, c: number) => void;
  readonly __wbg_set_replay_content_hash: (a: number, b: number, c: number) => void;
  readonly __wbg_get_playermetadata_Result: (a: number) => Array;
  readonly __wbg_get_playermetadata_SelectedRace: (a: number) => Array;
  readonly __wbg_get_playermetadata_AssignedRace: (a: number) => Array;
  readonly __wbg_get_replay_file_path: (a: number) => Array;
  readonly __wbg_get_replay_content_hash: (a: number) => Array;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
