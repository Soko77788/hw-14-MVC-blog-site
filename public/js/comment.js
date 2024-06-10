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
          location.reload()
        //   const newComment = await response.json();
        //   console.log(newComment); // Log the response to see its structure

        //   let commentContainer = document.querySelector('.comments');

        //   if (!commentContainer) {
        //     commentContainer = document.createElement('div');
        //     commentContainer.classList.add('comments');
        //     document.querySelector('.container').appendChild(commentContainer);
        //   }

        //   const newCommentElement = document.createElement('div');
        //   newCommentElement.classList.add('comment', 'mb-3');

        //   const userName = newComment.user ? newComment.user.name : 'Unknown User';
        //   const formattedDate = new Date(newComment.createdAt).toLocaleDateString();

        //   newCommentElement.innerHTML = `
        //     <p><strong>${userName}:</strong> ${newComment.comment_text} (${formattedDate})</p>
        //   `;
        //   commentContainer.appendChild(newCommentElement);

        //   document.querySelector('#comment-text').value = '';
        // } else {
        //   const errorText = await response.text();
        //   console.error('Error response:', errorText);
        //   alert('Failed to add comment.');
        }
      }
    });
  }
});
