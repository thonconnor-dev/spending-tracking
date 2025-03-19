import PropTypes from "prop-types";
import "react";
import {ItemContainer, ItemLabel} from "../../styles/NavStyled";
import {useNavigate} from "react-router-dom";

function NavItem({text, children, route}) {
    const navigate = useNavigate();
    return (
        <ItemContainer onClick={() => {
            navigate(route);
        }}>
            {children}
            <ItemLabel>{text}</ItemLabel>
        </ItemContainer>
    );
}

NavItem.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    route: PropTypes.string.isRequired
};

export default NavItem;
