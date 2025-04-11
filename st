
body {
  margin: 0;
  padding: 0;
  background: url('bg.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.85);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
}

#mochi-img {
  width: 200px;
  transition: transform 0.3s ease;
}

.actions {
  margin-top: 20px;
}

.actions img {
  width: 60px;
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.actions img:hover {
  transform: scale(1.2);
}

footer {
  text-align: center;
  padding: 10px;
}
