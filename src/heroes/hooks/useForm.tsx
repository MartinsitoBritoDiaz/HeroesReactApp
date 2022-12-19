import { useState } from 'react';
type form = {
    searchText?: string;  
  }
export const useForm = ( initialForm : form = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}