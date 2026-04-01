current.short_description = producer.short_description;
current.description = producer.description;

if (producer.issue_type == 'network') {
    current.category = 'network';
} else if (producer.issue_type == 'hardware') {
    current.category = 'hardware';
} else {
    current.category = 'software';
}

current.caller_id = gs.getUserID();
