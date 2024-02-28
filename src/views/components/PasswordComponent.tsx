import React, { useState } from 'react'
import { Input, Button } from '@/components/ui'

const callApiFunction = async (password: string) => {
    try {
        // URL da API fictícia - substitua pela sua URL real de API
        const apiUrl = '/wallet/add'

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
            }),
        })

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`)
        }

        const data = await response.json()

        console.log('Resposta da API: ', data)
    } catch (error) {
        console.error('Erro ao chamar a API: ', error)
    }
}

const PasswordComponent: React.FC = () => {
    const [password, setPassword] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        callApiFunction(password)
    }

    return (
        <div className="flex gap-2 justify-center items-center mt-2">
            <Input
                placeholder="Mnemonic"
                value={password}
                type="password"
                onChange={handleInputChange}
            />
            <Button
                size="sm"
                color="green"
                variant="solid"
                onClick={handleClick}
            >
                Add Wallet
            </Button>
        </div>
    )
}

// Componente de Input
/* interface InputProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<InputProps> = ({ value, onChange }) => {
    return <input type="password" value={value} onChange={onChange} />
}

// Componente de Botão
interface ButtonProps {
    onClick: () => void
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
    return <button onClick={onClick}>Enviar</button>
} */

export default PasswordComponent
