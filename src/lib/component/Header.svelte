<script lang="ts">
    import { Menu } from "@lucide/svelte/icons";
    import { resolve } from "$app/paths";
</script>

<header class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-circle">
                <Menu />
            </div>
            <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a href={resolve('/')} target="_self">Home</a></li>
                <li><a href={resolve('/projects')} target="_self">Projects</a></li>
                <li><a href={resolve('/cv')} target="_self">CV</a></li>
            </ul>
        </div>
    </div>

    <div class="navbar-center">
        <p>Ethan Mills</p>
    </div>
    
</header>

