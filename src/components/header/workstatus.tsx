interface WorkStatusProps {
    status?: string;
    className?: string;
}

export default function WorkStatus({status = 'Open to work', className}: WorkStatusProps) {
    return (
        <span className={`bg-otw-bg px-4 py-1 rounded-full `+className}>
            <p className="text-sm text-otw-text font-medium">{status}</p>
        </span>
    )
}