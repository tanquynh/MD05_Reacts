import React from 'react'

export default function Portfolio() {
  return (
    <div class="wrapper d-flex align-items-stretch">
    <nav id="sidebar">
        <div class="p-4 pt-5">
            <a href="#" class="img logo rounded-circle mb-5"
                style="background-image: url(images/logo.jpg);"></a>
            <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="./index.html" class="dropdown-toggle">Home</a>
                </li>
                <li>
                    <a href="./about.html">About</a>
                </li>
                <li>
                    <a href="./portfolio.html">Portfolio</a>
                </li>
                <li>
                    <a href="./contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn
                    btn-primary">
                    <i class="fa fa-bars"></i>
                    <span class="sr-only">Toggle Menu</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none
                    ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle
                    navigation">
                    <i class="fa fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <h2 class="mb-4">Portfolio Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
    </div>
</div>
  )
}
