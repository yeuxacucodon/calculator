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

const del = () => {
	display.value = display.value.toString().slice(0, -1);
};
