interface TagsListProps {
    tags: string[],
};
export default function TagsList(props: TagsListProps): React.ReactNode {
    return <div className="tags_list">
        {props.tags.map((tag) =>
            <div key={tag}>{tag}</div>
        )}
    </div>;
}

