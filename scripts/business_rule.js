if (current.category == 'network') {
    current.assignment_group.setDisplayValue('Network');
} 
else if (current.category == 'hardware') {
    current.assignment_group.setDisplayValue('Hardware');
} 
else {
    current.assignment_group.setDisplayValue('Software');
}
