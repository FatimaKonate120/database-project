document.getElementById("fetchBtn").addEventListener("click", async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    document.getElementById("response").textContent = data.message;
  });
  