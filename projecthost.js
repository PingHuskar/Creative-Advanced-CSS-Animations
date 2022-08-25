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

for (var i = 0; i < buttonsEffects.length; i++) {
	if (buttonsEffects[i] !== "") {
		document.getElementById('buttonsEffects').innerHTML += `<section data-background-iframe="${hostpath}/creative buttons effects using CSS transforms/${buttonsEffects[i]}" data-background-interactive></section>`
	}
}

for (var i = 1; i < 12; i++) {
	document.getElementById('imagesEffects').innerHTML += `<section data-background-iframe="${hostpath}/creative images effects using CSS transforms/creative image effect ${i}" data-background-interactive></section>`
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
for (var i = 0; i < menusEffects.length; i++) {
	if (menusEffects[i] !== "") {
		document.getElementById('menusEffects').innerHTML += `<section data-background-iframe="${hostpath}/creative menus effects using CSS transforms/${menusEffects[i]}" data-background-interactive></section>`
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
for (var i = 0; i < cardsEffects.length; i++) {
    if (cardsEffects[i] !== "") {
        document.getElementById('cardsEffects').innerHTML += `<section data-background-iframe="${hostpath}/creative CSS cards effects using CSS transforms/${cardsEffects[i]}" data-background-interactive></section>`
    }
}

const transformEffects = [
    "creative rotated text border effect using CSS transforms",
    "fill text effect on hover",
    "smoky text effect using css transforms",
    "social media icons hover effect with css transforms"
]
for (var i = 0; i < transformEffects.length; i++) {
    if (transformEffects[i] !== "") {
        document.getElementById('transformEffects').innerHTML += `<section data-background-iframe="${hostpath}/other cool examples with CSS transforms/${transformEffects[i]}" data-background-interactive></section>`
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
for (var i = 0; i < animations.length; i++) {
    if (animations[i] !== "") {
        document.getElementById('animations').innerHTML += `<section data-background-iframe="${hostpath}/CSS animations creative examples/${animations[i]}" data-background-interactive></section>`
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
for (var i = 0; i < clipPath.length; i++) {
    if (clipPath[i] !== "") {
        document.getElementById('clipPath').innerHTML += `<section data-background-iframe="${hostpath}/CSS clip path property examples/${clipPath[i]}" data-background-interactive></section>`
    }
}

document.title = `Creative Advanced CSS Animations`