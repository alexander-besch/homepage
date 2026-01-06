interface DescriptionProps {
    description?: string;
}

export default function Description(props: DescriptionProps): React.ReactNode {
    return <div className="image_description">
        {props.description || ""}
    </div>;
}