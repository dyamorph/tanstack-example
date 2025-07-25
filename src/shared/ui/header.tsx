import {Link} from "@tanstack/react-router";
import type {ReactNode} from "react";

type Props = {
    renderAccountBar: () => ReactNode;
}

export const Header = ({renderAccountBar}: Props) => (
    <header className="flex items-center w-full gap-4">

        <Link className="py-3" to='/'>Playlists</Link>
        <Link className="py-3" to='/my-playlists'>My Playlists</Link>
        <Link className="py-3" to='/oauth/callback'>OAuth page</Link>

        <div>{renderAccountBar()}</div>
    </header>
)