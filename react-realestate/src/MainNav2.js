import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logoprata from "./img/logoprata.png";


function MainNav2() {
    Parent = document.getElementsByClassName("navParent")[0]

let navTopBar = document.getElementsByClassName("navTopBar")[0]
let navSideBar = document.getElementsByClassName("navSideBar")[0]
let navSideBarButton = document.getElementsByClassName("navSideBarButton")[0]

let navRightLeft = document.getElementsByClassName("navRightLeft")[0]
let navRightButtons = document.getElementsByClassName("navRightButton")

let bar1 = document.getElementsByClassName("bar1")[0]
let bar2 = document.getElementsByClassName("bar2")[0]
let bar3 = document.getElementsByClassName("bar3")[0]

window.addEventListener("load", tooBig)
window.addEventListener("resize", tooBig)

function tooBig() {
    if (window.innerWidth <= navParent.dataset.tooBig) {

        navRightLeft.style.display = "none"
        navSideBarButton.style.display = "block"
        navSideBar.style.display = "block"

        for (let button of navRightButtons) {

            button.style.display = "none"
        }
    } else {

        navRightLeft.style.display = "flex"
        navSideBarButton.style.display = "none"
        navSideBar.style.display = "none"

        for (let button of navRightButtons) {

            button.style.display = "flex"
        }
    }
}

window.onscroll = function navParentTop() {

    let itemPosTop = document.documentElement.scrollTop

    if (itemPosTop == 0) {

        navTopBar.classList.remove("navTopBarNotTop")
    } else {

        navTopBar.classList.add("navTopBarNotTop")
    }
}

function navSideBarToggle() {

    navTopBar.classList.toggle("navTopBarNotTop")

    navSideBar.classList.toggle("navSideBarActive")

    bar1.classList.toggle("barActive1")

    bar2.classList.toggle("barActive2")

    bar3.classList.toggle("barActive3")

    document.body.classList.toggle("navBodyStopOverflow")
}

window.onclick = element => {
    clickOutSideBar(element)
}

window.ontouchend = element => {
    clickOutSideBar(element)
}

function clickOutSideBar(element) {
    let sideBarAnchors = navSideBar.getElementsByTagName("a")

    function sideBarAnchorValid() {

        let result = false

        for (let i = 0; i < sideBarAnchors.length; i++) {

            if (element.target == sideBarAnchors[i]) {

                result = true
                break
            }
            if (i == sideBarAnchors.length) {

                result = false
            }
        }

        return result
    }

    if (element.target != navSideBar && element.target != navSideBarButton && element.target != bar1 && element.target != bar2 && element.target != bar3 && sideBarAnchorValid() == false) {

        navSideBar.classList.remove("navSideBarActive")

        bar1.classList.remove("barActive1")

        bar2.classList.remove("barActive2")

        bar3.classList.remove("barActive3")

        document.body.classList.remove("navBodyStopOverflow")
    }
}
    return (
        <div>
            <nav class="navParent" data-too-big="1065">
        <div class="navTopBar">
            <div class="navChild navLeft">

                <div class="navSideBarButton animate" onclick="navSideBarToggle()">

                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>

                </div>

                <a href="#" class="navTopper">

                    <img src="materials/images/carsonIcon.png" alt="" class="navIcon animate">
                    <h1 class="navHeader animate">Header</h1>

                </a>

            </div>
            <div class="navChild navRight">
                <div class="navRightLeft animate">

                    <a href="#"><span class="material-icons-outlined">
                        home
                        </span>Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <div class="navDropDownParent" tabindex="0">
                        <a class="navDropDownButton"><span class="material-icons-outlined">
                            home
                            </span>Dropdown Button</a>
                        <div class="navDropDownContentParent">
                            <div class="navDropDownContentChild">
                                <a href="#"><span class="material-icons-outlined">
                                    home
                                    </span>Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="navRightRight">

                    <a href="#" class="navRightButton animate">Sign up</a>
                    <a href="#" class="navRightButtonAlt navRightButton animate">Login</a>
                    <a href="#" class="navRightIcon animate"><span class="material-icons-outlined">
                        account_circle
                        </span></a>

                </div>
            </div>
        </div>
        <div class="navSideBar">

            <h3>Header</h3>

            <a href="#"><span class="material-icons-outlined">
                home
                </span>Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <div class="navDropDownParent" tabindex="0">
                <a class="navDropDownButton"><span class="material-icons-outlined">
                    home
                    </span>Dropdown Button</a>
                <div class="navDropDownContentParent">
                    <div class="navDropDownContentChild">
                        <a href="#"><span class="material-icons-outlined">
                            home
                            </span>Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
            <div class="navDropDownParent" tabindex="0">
                <a class="navDropDownButton"><span class="material-icons-outlined">
                    home
                    </span>Dropdown Button</a>
                <div class="navDropDownContentParent">
                    <div class="navDropDownContentChild">
                        <a href="#"><span class="material-icons-outlined">
                            home
                            </span>Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>

        </div>
    </nav>
        </div>
    )
}

export default MainNav2
