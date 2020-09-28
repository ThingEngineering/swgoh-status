<script>
    function resetLocalStorage() {
        localStorage.clear()
        window.location.reload()
    }
</script>

<footer>
    <a href="#" on:click={resetLocalStorage}>Reset local storage</a>
</footer>
