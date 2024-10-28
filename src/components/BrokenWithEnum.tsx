"use client"

export enum Side {
    Left,
    Center,
    Right
}

interface BrokenWithEnumProps {
    side: Side
}

export default function BrokenWithEnum({side}: BrokenWithEnumProps) {
    return <div>
        i break the bundler: {side}
    </div>
}