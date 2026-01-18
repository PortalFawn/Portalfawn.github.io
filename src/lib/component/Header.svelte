<script lang="ts">
    import { Menu, Sun, Moon } from "lucide-svelte";
</script>

<header class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-circle">
                <Menu />
            </div>
            <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/cv">CV</a></li>
            </ul>
        </div>
    </div>

    <div class="navbar-center">
        <p>Ethan Mills</p>
    </div>
    
</header>

