import { ChangeEvent, FormEvent, useState } from "react"



export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const onResetForm = () => {
        setFormData({...initialState})
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
     
        
    }
    

    return {


        //! Propiedades
        ...formData,
        formData,

        //! Metodos
        onChange,
        onSubmit,
        onResetForm,


    }
}
