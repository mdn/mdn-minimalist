import "../../sass/vars/_color-palette.scss";
import "../../sass/atoms/_buttons.scss";

export default { title: "Atoms|Buttons" };

export const Primary = () => `<button class="cta primary">Click me</button>`;
export const Positive = () => `<button class="cta positive">Confirm</button>`;
export const Negative = () => `<button class="cta negative">Cancel</button>`;
export const Disabled = () => `<button class="cta disabled">Cancel</button>`;
