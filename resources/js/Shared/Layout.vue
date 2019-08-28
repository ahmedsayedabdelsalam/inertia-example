<template>
    <main>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <div class="navbar-nav">
                    <inertia-link href="/" class="nav-item nav-link">Welcome</inertia-link>
                    <inertia-link href="/about" class="nav-item nav-link">About</inertia-link>
                    <inertia-link href="/contact" class="nav-item nav-link">Contact</inertia-link>
                    <inertia-link href="/users" class="nav-item nav-link">Users</inertia-link>
                </div>
            </div>
        </nav>

        <article>
          <slot />
        </article>
    </main>
</template>