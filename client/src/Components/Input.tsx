type AppProps = {
    label: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const Input = ({ label, type, placeholder, onChange }: AppProps) => {
    return (
        <div className="input">
            <label className="text bold">{ label }</label>
            <input onChange={onChange} type={type ?? 'text'} placeholder={placeholder ?? ''} />
        </div>
    );
};