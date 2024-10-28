import BrokenWithEnum, {Side} from "@/components/BrokenWithEnum"

export default function BrokenPage() {
    return <>
        <BrokenWithEnum side={Side.Right}/>
        broken
    </>
}