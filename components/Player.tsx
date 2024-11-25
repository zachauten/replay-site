import { JSX } from "preact/jsx-runtime";
import Link from "./Link.tsx";

interface PlayerProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
    player: number;
}

export default function Player(props: PlayerProps) {
    return <Link href={`https://sc2pulse.nephest.com/sc2/?type=character&id=${props.player}`}>{props.children}</Link>
}