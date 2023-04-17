import React from "react";
import {Controller} from "react-hook-form";
import {Input, InputProps} from "reactstrap";


interface Props {
    control: any
    name: string
}
export const FormInput = () => {
    return <div className={"label-container"}>
        <input type="text" placeholder={"Jonathan"} />
    </div>
}

export const TextInput = ({control, name, ...props}:Props&InputProps) => {
    return <Controller control={control} render={({field}) => <Input {...field} {...props} />} name={name} />
}