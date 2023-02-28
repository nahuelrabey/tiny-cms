/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from '@radix-ui/react-icons';

import { useState } from "react";

import style from "./AddCover.module.css"

type param = {className: string}
export default function AddCover({className}:param) {
    const [image, setImage] = useState("/placeholder.webp")
    const [value, setValue] = useState("")
    
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild className={className}>
                <button className={style.SetImage}>
                    <img src={image} alt="placeholder image"/>
                </button>
            </Dialog.Trigger>
            <Dialog.Overlay className={style.DialogOverlay} />
            <Dialog.Content className={style.DialogContent}>
                <Dialog.Title className={style.Title}>elegir foto de portada</Dialog.Title>
                <Dialog.Description className={style.Description}>
                    Insertar la dirección url de la imagen de portada
                </Dialog.Description>
                <fieldset className={style.Fieldset}>
                    <label>url</label>
                    <input type="text" name="url" id="url" onChange={(e)=>setValue(e.target.value)}/>
                </fieldset>
                <button className={style.Save} onClick={()=>setImage(value)}>Save</button>
                <Dialog.Close asChild className={style.Close}>
                    <Cross2Icon />
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Root>
    )
}