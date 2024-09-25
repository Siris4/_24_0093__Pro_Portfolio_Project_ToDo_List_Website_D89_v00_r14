$(document).ready(function() {
    // Set the current date in the header
    const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' };
    const today = new Date().toLocaleDateString('en-US', options);
    $('#date-header').text(`My To-Do List for ${today}`);

    // Initialize sortable for draggable tasks, restrict movement to vertical axis
    $("#task-list").sortable({
        handle: ".drag-handle",
        axis: "y", // Restrict to vertical movement
        containment: "parent", // Restrict dragging within parent container
        tolerance: "pointer", // Make sure the position is calculated correctly
        revert: true, // Adds smooth animation when task is dropped
        helper: "clone" // Clones the dragged element to prevent DOM snapping issues
    });

    // Add a new task
    $('.new-task-input').keypress(function(e) {
        if (e.which == 13) { // Enter key pressed
            const taskText = $(this).val().trim();
            if (taskText !== '') {
                const newTask = `
                    <li class="task-item">
                        <span class="drag-handle">::</span>
                        <input type="checkbox" class="task-checkbox">
                        <span class="task-name">${taskText}</span>
                        <span class="delete-task">Delete</span>
                    </li>
                `;
                $('#task-list').append(newTask);
                $(this).val(''); // Clear input
            }
        }
    });

    // Edit task name without shifting elements
    $(document).on('click', '.task-name', function() {
        const currentText = $(this).text().trim();
        const taskNameSpan = $(this);

        // Create input field with same width and styling
        const inputField = $('<input>', {
            type: 'text',
            class: 'edit-input',
            value: currentText,
            css: {
                width: taskNameSpan.width() + 'px', // Maintain the width of the original span
                fontSize: taskNameSpan.css('font-size'),
                padding: taskNameSpan.css('padding'),
                border: '1px solid #ccc',
                margin: taskNameSpan.css('margin')
            }
        });

        taskNameSpan.replaceWith(inputField);
        inputField.focus();

        // Save on blur or pressing Enter
        inputField.on('blur keypress', function(e) {
            if (e.type === 'blur' || (e.type === 'keypress' && e.which == 13)) {
                const updatedText = $(this).val().trim();
                const taskName = $('<span>', {
                    class: 'task-name',
                    text: updatedText
                });
                $(this).replaceWith(taskName);
            }
        });
    });

    // Delete task on clicking the delete button
    $(document).on('click', '.delete-task', function() {
        $(this).closest('.task-item').remove(); // Remove the entire task item
    });
});
