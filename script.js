// Home page - Show Message button
function showMessage() {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = 'Button clicked successfully!';
        messageDiv.style.display = 'block';
    }
}

// Form page - Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('formMessage');
    
    if (!nameInput || !emailInput || !messageDiv) {
        return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    if (name === '' || email === '') {
        messageDiv.textContent = 'Please fill all fields.';
        messageDiv.className = 'error';
        messageDiv.style.display = 'block';
    } else {
        messageDiv.textContent = 'Form submitted!';
        messageDiv.className = 'success';
        messageDiv.style.display = 'block';
    }
}

// Right-click context menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const contextMenuBox = document.getElementById('contextMenuBox');
    const contextMenu = document.getElementById('contextMenu');
    
    if (contextMenuBox && contextMenu) {
        // Create context menu if it doesn't exist
        if (!contextMenu.innerHTML) {
            contextMenu.innerHTML = `
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li>Refresh</li>
                </ul>
            `;
        }
        
        // Handle right-click on the box
        contextMenuBox.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            
            contextMenu.style.display = 'block';
            contextMenu.style.left = e.pageX + 'px';
            contextMenu.style.top = e.pageY + 'px';
        });
        
        // Hide context menu when clicking elsewhere
        document.addEventListener('click', function() {
            contextMenu.style.display = 'none';
        });
        
        // Prevent context menu from closing when clicking on it
        contextMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

