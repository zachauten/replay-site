import { JSX } from "preact";
import { Replay } from "../static/pkg/sc2_parser.js";

interface ReplayListProps extends JSX.HTMLAttributes<HTMLTableElement> {
  replays: Replay[];
}

//TODO: Link to SC2Pulse for player data https://sc2pulse.nephest.com/sc2
export default function ReplayList(
  props: ReplayListProps,
) {
  return (
    <table id="replay-list">
      <thead>
        <tr>
          <th scope="col">Filename</th>
          <th scope="col">Map</th>
        </tr>
      </thead>
      {props.replays.map((replay) => (
        <tbody>
          <tr>
            <th scope="row">{replay.file_path}</th>
            {/* TODO: Update rust parser to structure the metadata */}
            <td>{replay.parsed.metadata.Title}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
