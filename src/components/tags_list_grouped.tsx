interface TagsListGroupedProps {
    tags: string[];
}

// Optional: Typ für die Gruppierung
interface GroupedTags {
    [group: string]: string[];
}

function groupTags(tags: string[]): GroupedTags {
    const grouped: GroupedTags = {};

    tags.forEach(tag => {
        const parts = tag.split(":");
        // Fallback: wenn kein Doppelpunkt, alles als 'ungrouped'
        const group = parts[0] || "ungrouped";
        const value = parts.slice(1).join(":") || tag;

        // Jetzt garantiert group ein string
        if (!grouped[group]) grouped[group] = [];
        grouped[group].push(value);
    });

    return grouped;
}

export default function TagsListGrouped(props: TagsListGroupedProps): React.ReactNode {
    const grouped = groupTags(props.tags);

    return (
        <div className="tags_list_grouped">
            {Object.entries(grouped).map(([group, values]) => (
                <div key={group} className="tag_group">
                    <strong>{group}:</strong>{" "}
                    {values.map((v, idx) => (
                        <span key={idx} className="tag_value">{v}</span>
                    ))}
                </div>
            ))}
        </div>
    );
}