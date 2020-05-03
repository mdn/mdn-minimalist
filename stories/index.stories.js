export default { title: "Button" };

export const withText = () => '<button class="btn">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement("button");
  button.innerText = "😀 😎 👍 💯";
  return button;
};
