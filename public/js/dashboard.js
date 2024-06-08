// public/js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.querySelector('#new-post-btn');
    const postFormContainer = document.querySelector('#post-form-container');
    const postForm = document.querySelector('#post-form');
    const editButtons = document.querySelectorAll('.edit-post-btn');
    const deleteButtons = document.querySelectorAll('.delete-post-btn');
  
    let editingPostId = null;
  
    newPostBtn.addEventListener('click', () => {
      postFormContainer.style.display = 'block';
    });
  
    postForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();
  
      if (title && content) {
        const method = editingPostId ? 'PUT' : 'POST';
        const url = editingPostId ? `/api/posts/${editingPostId}` : '/api/posts';
  
        const response = await fetch(url, {
          method,
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to save post.');
        }
      }
    });
  
    editButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        editingPostId = event.target.getAttribute('data-id');
        const post = posts.find((post) => post.id === Number(editingPostId));
        document.querySelector('#post-title').value = post.title;
        document.querySelector('#post-content').value = post.content;
        postFormContainer.style.display = 'block';
      });
    });
  
    deleteButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        const id = event.target.getAttribute('data-id');
  
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete post.');
        }
      });
    });
  });
  