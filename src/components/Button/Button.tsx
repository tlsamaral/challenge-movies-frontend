import type { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}
function Button(props: ButtonProps) {
	return <ButtonContainer {...props} />;
}

export default Button;
