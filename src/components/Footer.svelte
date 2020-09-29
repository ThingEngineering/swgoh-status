<script>
    function resetLocalStorage() {
        localStorage.clear()
        window.location.reload()
    }
</script>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
        border-top: 1px solid #303438;
        background: #2b2f33;
    }
    p {
        margin: 0;
    }
</style>

<footer>
    <div>
        <p>
            <a href="https://github.com/ThingEngineering/swgoh-status">GitHub project</a>
        </p>
        <p>SWGoH Status is not affiliated with EA, EA Capital Games, Disney, or Lucasfilm LTD.</p>
    </div>
    <div>
        If things are broken: <a href="#" on:click={resetLocalStorage}>Reset local storage</a>
    </div>
</footer>
