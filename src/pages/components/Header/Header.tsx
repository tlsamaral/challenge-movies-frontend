import Image from "next/image";
import { FiSearch, FiSettings } from "react-icons/fi";
import { LuSlidersHorizontal } from "react-icons/lu";
import {
	ConfigSettingIcon,
	HeaderContainer,
	InputContainer,
	SectionCenter,
} from "./style";

function Header() {
	return (
		<HeaderContainer>
			<section>
				<Image src="/logo.png" alt="logo/png" width={128} height={35} />
			</section>
			<SectionCenter>
				<InputContainer>
					<div>
						<FiSearch color="#fff" />
					</div>
					<input type="text" placeholder="Pesquisar" />
				</InputContainer>
				<ConfigSettingIcon>
					<LuSlidersHorizontal color="#fff" />
				</ConfigSettingIcon>
			</SectionCenter>
			{/* <div /> */}
		</HeaderContainer>
	);
}

export default Header;
