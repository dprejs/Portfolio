import Image from "next/image"

export default function TechCard(props: {label:string, image:string, small?: null|boolean}) {
  if(props.small === null) {
    props.small = false
  }
  return (
    <div className={`flex flex-col items-center justify-center border-accent border-2 rounded-2xl ${props.small ? "techCardSm" : "techCard"} py-0 px-2 gap-2 bg-primary m-2 ${props.small ? "" : "h-32"}`}>
        <Image src={`/techIcons/${props.image}`} height={props.small? 20 : 50} width={props.small ? 20 : 50} alt={`${props.label} Logo`}/>
        <div className={`${props.small ? "text-md" : "text-lg"} font-bold text-center leading-snug`}>{props.label}</div>
    </div>
  )
}