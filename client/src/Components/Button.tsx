type AppProps = {
    text?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}

export const Button = ({ text, disabled, onClick }: AppProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className="button">
            { text ?? 'Button' }
        </button>
    );
};