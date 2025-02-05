import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

interface Props {
    src: string,
    alt: string,
    titulo: string,
    descripcion: string,
}

export default function Cards({...Props}: Props) {
    return (
        <div className="max-h-200">
            <Card className="w-200 h-200 flex flex-col p-4 shadow-black">
                <div className="w-200 h-200">
                    <CardTitle>
                        {Props.titulo}
                    </CardTitle>
                    <Image className="pt-3 pb-3" src={Props.src} alt={Props.alt} width={200} height={200} />
                    <CardDescription>
                        {Props.descripcion}
                    </CardDescription>
                </div>
            </Card>
        </div>
    )
}