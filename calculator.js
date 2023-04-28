const display = document.getElementById("output");

const wipe = () => {
	display.value = "";
};

const show = (n) => {
	display.value += n;
};

const calc = () => {
	display.value = eval(display.value);
};
