import { useState } from "react";

function Hex2rgb() {
	const [form, setForm] = useState({ value: "#" });

	const handleSubmit = (event) => {
		event.preventDefault();
		getColor(form.value);
	};

	function getColor(hex) {
		hex = hex.slice(1);

		let digit = hex.split("");

		let r = parseInt([digit[0], digit[1]].join(""), 16);
		let g = parseInt([digit[2], digit[3]].join(""), 16);
		let b = parseInt([digit[4], digit[5]].join(""), 16);

		setForm((prevForm) => ({
			...prevForm,
			result: `rgb(${r}, ${g}, ${b})`,
			color: `rgb(${r}, ${g}, ${b})`,
		}));

		digit.map((item) => {
			if (isNaN(parseInt(item, 16))) {
				setForm((prevForm) => ({
					...prevForm,
					result: `Ошибка!`,
					color: "red",
				}));
			}
			return "";
		});
		return `rgb(${r}, ${g}, ${b})`;
	}

	function handleColorChange(event) {
		let color = event.target.value;
		setForm((prevForm) => ({ ...prevForm, value: color }));

		if (color.length === 7) {
			getColor(color);
		} else if (color.length > 7) {
			color = color.slice(0, -1);
			setForm((prevForm) => ({ ...prevForm, value: color }));
		} else if (color.length === 0) {
			color = "#";
			setForm((prevForm) => ({ ...prevForm, value: color }));
		}
	}

	return (
		<div className="Hex2rgb" style={{ backgroundColor: form.color }}>
			<div className="wrapper">
				<form onSubmit={handleSubmit}>
					<input
						id="color"
						name="color"
						type="text"
						className="Hex2rgb_element Hex2rgb_element_item"
						value={form.value}
						onChange={handleColorChange}
					/>

					<div className="Hex2rgb_element Hex2rgb_element_output">
						<span>{form.result ? form.result : "rgb( )"}</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Hex2rgb;
