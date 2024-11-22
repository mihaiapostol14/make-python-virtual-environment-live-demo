// Select all copy icons
const copyIcons = document.querySelectorAll('.fa-copy')

copyIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Get the associated <p> tag
    const codeElement = icon.previousElementSibling

    if (codeElement && codeElement.tagName === 'P') {
      // Copy the text inside the <p> tag
      const codeToCopy = codeElement.innerText

      // Use Clipboard API to copy text
      navigator.clipboard
        .writeText(codeToCopy)
        .then(() => {
          // Create a message element
          const message = document.createElement('div')
          message.innerText = 'Code copied to clipboard!'
          message.className = 'copy-message'

          // Append the message to the document body
          document.body.appendChild(message)

          // Auto-hide the message after 2 seconds
          setTimeout(() => {
            message.remove()
          }, 2000)

          // Hide the message on click
          message.addEventListener('click', () => {
            message.remove()
          })
        })
        .catch(err => {
          console.error('Failed to copy code:', err)
        })
    }
  })
})
