document.addEventListener('DOMContentLoaded', (event) => {
    const commentForm = document.querySelector('#comment-form');
  
    if (commentForm) {
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const commentText = document.querySelector('#comment-text').value.trim();
        const postId = commentForm.dataset.postId;
  
        if (commentText) {
          const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
              comment_text: commentText,
              post_id: postId,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to add comment.');
          }
        }
      });
    }
  });
  