const hostpath = `https://pinghuskar.github.io/Creative-Advanced-CSS-Animations`
const buttonsEffects = [
	"creative 2 cuts button effect",
	"creative 2 parts skewed button effect",
	"creative 3 circles to background button effect",
	"creative 4 borders growing button effect",
	"creative border growing button effect",
	"creative border swapping button effect",
	"creative button glowing effect",
	"creative button hover effect",
	"creative button hover effect2",
	"creative button stretching effect",
	"creative button swipe effect from top to bottom with text",
	"creative circular swapping button effect",
	"creative first letter rotating button effect",
	"creative layers swapping from left to right button effect",
	"creative pulsing button effect",
	"creative rotating 3 layers button effect",
	"creative rotating button effect",
	"creative splitted button effect",
	"creative swipe button effect",
	"creative text scaling button effect",
	"creative two layers swapping button effect",
	"creative wavy button effect",
	"diagonal swipe button effect using borders"
]
target = `_blank`
var sectionTitle = `creative buttons effects using CSS transforms`
var idea = `buttonsEffects`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 0; i < buttonsEffects.length; i++) {
	if (buttonsEffects[i] !== "") {
		document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/${buttonsEffects[i]}" data-background-interactive></section>`
		document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/${buttonsEffects[i]}" target="${target}">${buttonsEffects[i]}</a></li>`
	}
}
sectionTitle = `creative images effects using CSS transforms`
idea = `imagesEffects`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 1; i < 12; i++) {
	document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/creative image effect ${i}" data-background-interactive></section>`
    document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/creative image effect ${i}" target="${target}">creative image effect ${i}</a></li>`
}
const menusEffects = [
    "2 borders and a background menu effect",
    "border sniper menu effect",
    "creative 2 moving bottom borders menu effect",
    "creative background and borders menu effect",
    "creative blurry menu effect",
    "creative colorful layered menu effect",
    "creative growing borders menu effect",
    "creative menu border rotation effect",
    "creative menu effect using the transition delay property",
    "creative splitted background menu effect"
]
sectionTitle = `creative menus effects using CSS transforms`
idea = `menusEffects`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 0; i < menusEffects.length; i++) {
	if (menusEffects[i] !== "") {
		document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/${menusEffects[i]}" data-background-interactive></section>`
        document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/${menusEffects[i]}" target="${target}">${menusEffects[i]}</a></li>`
	}
}
const cardsEffects = [
    "background translation card effect",
    "creative border card effect",
    "creative captain marvel card effect",
    "creative double face card hover effect",
    "creative expandable card effect",
    "creative layered card hover effect",
    "creative scaling card effect"
]
sectionTitle = `creative CSS cards effects using CSS transforms`
idea = `cardsEffects`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 0; i < cardsEffects.length; i++) {
    if (cardsEffects[i] !== "") {
        document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/${cardsEffects[i]}" data-background-interactive></section>`
        document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/${cardsEffects[i]}" target="${target}">${cardsEffects[i]}</a></li>`
    }
}

const transformEffects = [
    "creative rotated text border effect using CSS transforms",
    "fill text effect on hover",
    "smoky text effect using css transforms",
    "social media icons hover effect with css transforms"
]
sectionTitle = `other cool examples with CSS transforms`
idea = `transformEffects`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 0; i < transformEffects.length; i++) {
    if (transformEffects[i] !== "") {
        document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/${transformEffects[i]}" data-background-interactive></section>`
        document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/${transformEffects[i]}" target="${target}">${transformEffects[i]}</a></li>`
    }
}

const animations = [
    "animated button with css animation",
    "animated image pattern using css animation",
    "animated text background with CSS animations",
    "awesome pulse effect using CSS animations",
    "background boxes growing animation using CSS animations",
    "background boxes moving using CSS animations",
    "bouncing balls with CSS animations",
    "button shaking hover effect with css animation",
    "changing background color with css animations",
    "driving a car and a motor bike using css animation",
    "expanding line menu effect using CSS animations",
    "fading out squares using CSS animations",
    "floating text using css animation",
    "growing lines loading using CSS animations",
    "growing lines loading with CSS animation",
    "heartbeat effect with CSS animations",
    "hexagon loader animation",
    "icon hover effects with css animations",
    "lighting text with CSS animations",
    "line loading effect using CSS animations",
    "loading text animation",
    "moving squares effect with CSS animations",
    "newton\'s cradle effect with CSS animations",
    "nice colorful loading effect with CSS animations",
    "rain effect with CSS animations",
    "rings rotation loading using CSS animations",
    "rotating loading effect using css animation",
    "rotating ring loading using CSS animations",
    "simple images slider show with css animations",
    "text reveal effect with CSS animations",
    "text rotator using css animation"
]
sectionTitle = `CSS animations creative examples`
idea = `animations`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 0; i < animations.length; i++) {
    if (animations[i] !== "") {
        document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/${animations[i]}" data-background-interactive></section>`
        document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/${animations[i]}" target="${target}">${animations[i]}</a></li>`
    }
}

const clipPath = [
    "black to white and white to black text effect using CSS clip path",
    "creative button hover effect using CSS clip path property",
    "creative CSS pop up effect using CSS clip path property",
    "creative CSS wavy effect using CSS clip path property",
    "creative image hover effect using CSS clip path",
    "creative image hover effect using CSS clip path property",
    "creative menu split effect using CSS clip path property",
    "creative split loading effect using CSS clip path property",
    "image to circle hover effect using CSS clip path property"
]
sectionTitle = `CSS clip path property examples`
idea = `clipPath`
document.getElementById(`${idea}`).innerHTML += `<section><h3>Table of Content</h3><ul id="${idea}TOC"></ul></section>`
for (var i = 0; i < clipPath.length; i++) {
    if (clipPath[i] !== "") {
        document.getElementById(`${idea}`).innerHTML += `<section data-background-iframe="${hostpath}/${sectionTitle}/${clipPath[i]}" data-background-interactive></section>`
        document.getElementById(`${idea}TOC`).innerHTML += `<li><a href="${hostpath}/${sectionTitle}/${clipPath[i]}" target="${target}">${clipPath[i]}</a></li>`
    }
}

document.title = `Creative Advanced CSS Animations`